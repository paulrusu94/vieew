

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
 
         callback(null, redirectResponse('Redirect succesfully', redirectUrl));
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
 