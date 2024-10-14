import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { PostConfirmationTriggerEvent } from "aws-lambda";
import { v4 as uuid } from 'uuid'
import { env } from '$amplify/env/post-confirmation';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);



export const handler = async (event: PostConfirmationTriggerEvent) => {
    try {
        const { request: { userAttributes } } = event
        const newUser = {
            userId: uuid(),
            sub: userAttributes.sub,
            email: userAttributes.email,
            firstName: userAttributes.given_name,
            lastName: userAttributes.family_name,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        console.log('user to create', newUser)
        const command = new PutCommand({
            TableName: env.USER_TABLE,
            Item: newUser,
        });
        await docClient.send(command);

        console.log('success. user created')
        return event

    } catch (err) {
        console.error('error creating user', err)
        throw err
    }
};