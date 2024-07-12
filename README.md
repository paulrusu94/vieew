## README

### AWS CLI

#### Install the AWS CLI

Get the latest documentation from here:
[https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)



#### Configure the AWS CLI

Install aws CLI from here:

```bash
aws configure --profile {IAM_PROFILE}
```
You'll be prompted to enter the following:

```bash
WS Access Key ID [None]: {YOUR_ACCESS_KEY}
AWS Secret Access Key [None]: {YOUR_SECRET_ACCESS_KEY}
Default region name [None]: eu-north-1
Default output format [None]: json
```
Install dependencies
```bash
npm install
```

Start the sandbox
```bash
npx ampx sandbox --profile bogdan
```

After the sandbox is ready, you can run the Angular app:
```bash
ng serve
```