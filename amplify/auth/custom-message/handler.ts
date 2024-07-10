import type { CustomMessageTriggerHandler } from "aws-lambda";

export const handler: CustomMessageTriggerHandler = async (event) => {
  const { codeParameter } = event.request;
  const { userName } = event;
  if (event.triggerSource === "CustomMessage_ForgotPassword") {

    event.response.emailMessage = `Your new one-time code is ${event.request.codeParameter}`;
    event.response.emailSubject = "Reset my password";
    
  } else if (event.triggerSource === 'CustomMessage_SignUp') {
    const redirectUrl = `${process.env.REDIRECTURL}`;
    const payload = Buffer.from(
      JSON.stringify({
        userName,
        codeParameter
      }),
    ).toString('base64');
    const url = `${redirectUrl}/?v=${payload}`;

    event.response.smsMessage = "Code:";
    event.response.emailSubject = "Verify your email.";
    event.response.emailMessage = `Link: ${url}`;
  }


  return event;
};