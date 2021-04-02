const AWS = require('aws-sdk');
// const awsXRay = require('aws-xray-sdk');
// const awsSdk = awsXRay.captureAWS(require('aws-sdk'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event, context) => {
    console.log(JSON.stringify(event));
    //console.log(JSON.stringify(context));
    const data = event.settingObject;
    const migData = event.migrationid;
    
    const timestamp = new Date().getTime();
    const myTableName = process.env.DYNAMODB_TABLE.replace(/.*:/,'').substr(6);

    const params = {
        TableName: myTableName,
        Item: {
            CategoryKey: data.category + "#" + data.categoryid,
            SettingKey: data.setting + "#" + data.effectivedate,
            SettingValue: data.settingvalue,
            LastUpdated: timestamp,
        }
    };

    // insert or update the item
    const storeddata = await dynamoDb.put(params).promise();
    console.log("success");
    const newvar = {...data, migration_result: migData};
    console.log("newvar:"+newvar);
    return newvar;
}