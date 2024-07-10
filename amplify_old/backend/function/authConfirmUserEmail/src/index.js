/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */const AWS = require('aws-sdk');
const apiVersion = '2016-04-18';

exports.handler = async (request, context, callback) => {
    console.log('event', request);
    console.log(Object.keys(request));
    console.log('event', context);
    console.log(Object.keys(context));
    try {

        const data = request.queryStringParameters.data;
        const code = request.queryStringParameters.code;

        const { userName,
            redirectUrl,
            region,
            clientId, } = JSON.parse(
                Buffer.from(data, 'base64')
                    .toString('utf-8')
            );

        console.log("data", typeof data, data)
        console.log({ userName, redirectUrl, region, clientId, code })

        const cognito = new AWS.CognitoIdentityServiceProvider({
            region,
            apiVersion
        });

        const params = {
            ClientId: clientId,
            Username: userName,
            ConfirmationCode: code
        };

        await cognito.confirmSignUp(params).promise();
        

        // Initiate auth to get authentication tokens
        const authParams = {
            AuthFlow: 'CUSTOM_AUTH',
            ClientId: clientId,
            AuthParameters: {
                USERNAME: userName,
            },
        };

        const authResponse = await cognito.initiateAuth(authParams).promise();
        console.log("aasdasd", JSON.stringify(authResponse))
        const session = authResponse.Session;

        // Respond to custom challenge
        const respondToAuthChallengeParams = {
            ClientId: clientId,
            ChallengeName: 'CUSTOM_CHALLENGE',
            Session: session,
            ChallengeResponses: {
                USERNAME: userName,
                ANSWER: process.env.CHALLENGEANSWEAR,
            },
        };

        const challengeResponse = await cognito.respondToAuthChallenge(respondToAuthChallengeParams).promise();
        const idToken = challengeResponse.AuthenticationResult.IdToken;

        // Redirect to the confirmation page with the token
        const finalRedirectUrl = `${redirectUrl}?idToken=${idToken}`;

        callback(null, redirectResponse('Redirect succesfully', finalRedirectUrl));
    } catch (err) {
        console.log(err);

        return err;
    }
};


const redirectResponse = (message, redirectUrl) => ({
    statusCode: 301,
    headers: {
        Location: redirectUrl.toString(),
    },
    body: JSON.stringify(message),
});
