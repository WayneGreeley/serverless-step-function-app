# serverless-step-function-app
Serverless StepFunctions Application
 - parallel map state is used to break up the units of work and each is sent to a lambda to be processed

# commands used to build this app
## npm init
## npm install serverless --save
## npm install serverless-plugin-aws-alerts --save
## npm install serverless-step-functions --save






### Successful Input:

```
POST
https://{{step_key}}.execute-api.us-east-1.amazonaws.com/dev/settingload/

{
  "upload-date": "2021-03-14",
  "detail": {
    "migrationname": "initial load",
    "migrationid": "1",
    "settings": [
      { "category": "client", "categoryid": "9511", "setting": "name", "effectivedate": "1900-01-01", "settingvalue": "abc1"},
      { "category": "client", "categoryid": "9511", "setting": "name", "effectivedate": "2021-01-01", "settingvalue": "abc2"},
      { "category": "client", "categoryid": "9511", "setting": "name", "effectivedate": "1900-01-01", "settingvalue": "abcde"},
      { "category": "client", "categoryid": "9833", "setting": "name", "effectivedate": "1900-01-01", "settingvalue": "abcdeeeeeeeee"},
      { "category": "client", "categoryid": "9860", "setting": "name", "effectivedate": "1900-01-01", "settingvalue": "abc"},
      { "category": "client", "categoryid": "9511", "setting": "size", "effectivedate": "2021-01-01", "settingvalue": "999"}
    ]
  }
}
```
![Successful Order](/step-function-flow.png "Successful Order")