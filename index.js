const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event))
    
    const settingdata = JSON.parse(event);
    const timestamp = new Date().getTime();

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            CategoryKey: 'pk',
            SettingKey: timestamp
        }
    };

    // insert or update the item
    try {
        const storeddata = await dynamoDb.put().promise();
        console.log("success");
        return storeddata;
    } catch (err) {
        // handle potential errors
        console.error("fail", err.message);
    }
}