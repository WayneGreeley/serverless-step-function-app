# serverless-step-function-app
Serverless StepFunctions Application


## npm init
## npm install serverless --save
## npm install serverless-plugin-aws-alerts --save
## npm install serverless-step-functions --save






### Successful Input:

```
POST
https://{{step_key}}.execute-api.us-east-1.amazonaws.com/dev/

{
  "ship-date": "2016-03-14T01:59:00Z",
  "detail": {
    "delivery-partner": "UQS",
    "shipped": [
      { "prod": "R31", "dest-code": 9511, "quantity": 1344 },
      { "prod": "S39", "dest-code": 9511, "quantity": 40 },
      { "prod": "R31", "dest-code": 9833, "quantity": 12 },
      { "prod": "R40", "dest-code": 9860, "quantity": 887 },
      { "prod": "R40", "dest-code": 9511, "quantity": 1220 }
    ]
  }
}
```
![Successful Order](/step-function-flow.png "Successful Order")