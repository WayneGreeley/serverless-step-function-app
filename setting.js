const AWS = require('aws-sdk');
// const awsXRay = require('aws-xray-sdk');
// const awsSdk = awsXRay.captureAWS(require('aws-sdk'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));
    //console.log(JSON.stringify(context));
    
    const timestamp = new Date().getTime();
    const myTableName = process.env.DYNAMODB_TABLE.replace(/.*:/,'').substr(6);

    const params = {
        TableName: myTableName,
        Item: {
            CategoryKey: event.category + "#" + event.categoryid,
            SettingKey: event.setting + "#" + event.effectivedate,
            SettingValue: event.settingvalue,
            LastUpdated: timestamp,
        }
    };

    // insert or update the item
    const storeddata = await dynamoDb.put(params).promise();
    console.log("success");
    return storeddata;
}