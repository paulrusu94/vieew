import type { CustomMessageTriggerHandler } from "aws-lambda";

export const handler: CustomMessageTriggerHandler = async (event) => {
  const { codeParameter, userAttributes } = event.request;
  const { email, sub } = userAttributes;
  const { userName } = event;
  console.log(event)
  if (event.triggerSource === "CustomMessage_ForgotPassword") {

    event.response.emailMessage = `Your new one-time code is ${codeParameter}`;
    event.response.emailSubject = "Reset my password";

  } else if (event.triggerSource === 'CustomMessage_SignUp') {
    const { REDIRECTURL } = process.env;
    const payload = Buffer.from(
      JSON.stringify({
        userName,
        email,
        sub,
      }),
    ).toString('base64');
    const url = `${REDIRECTURL}/?v=${payload}&code=${codeParameter}`;
    const subject = `Confirm your email`;
    const message = `Click on link below \n ${url}`;
    event.response.emailSubject = subject;
    event.response.emailMessage = message;
  }

  return event;
};