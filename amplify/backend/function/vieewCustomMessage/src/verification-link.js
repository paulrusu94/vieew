/**
 * @type {import('@types/aws-lambda').CustomMessageTriggerHandler}
 */
exports.handler = async (event, context, callback) => {
  
  console.log('event', event);
  console.log(Object.keys(event));

  // Define the URL that you want the user to be directed to after verification is complete
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const confirmFuctionURL = 'https://lkwwdknkcj.execute-api.eu-north-1.amazonaws.com/backup/confirmUser'
    
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;


    const redirectUrl = `${process.env.REDIRECTURL}/?username=${userName}`;

    const payload = Buffer.from(
      JSON.stringify({
        userName,
        redirectUrl,
        region,
        clientId,
      }),
    ).toString('base64');

    // eslint-disable-next-line spellcheck/spell-checker
    const functionUrl = confirmFuctionURL;
    const url = `${functionUrl}/?data=${payload}&code=${codeParameter}`;
    const message = `${process.env.EMAILMESSAGE}. \n ${url}`;
    event.response.smsMessage = message;
    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = message;
    console.log('event.response', event.response);
  }

  return event;
};
