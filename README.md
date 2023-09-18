# Vieew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Amplify CLI

#### Install the Amplify CLI

```bash
  npm install -g @aws-amplify/cli
```

#### Configure the Amplify CLI

```bash
  amplify configure
```

`amplify configure` will ask you to sign into the AWS Console and ask for a new user creation. Once the user is created, Amplify CLI will ask you to provide the `accessKeyId` and the `secretAccessKey` to connect Amplify CLI with your newly created IAM user.

```bash
Enter the access key of the newly created user:
? accessKeyId:  # YOUR_ACCESS_KEY_ID
? secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name:  # (default)

Successfully set up the new user.
```

#### Initialize Amplify CLI

After you install the CLI, navigate to a JavaScript, iOS, or Android project root, initialize AWS Amplify in the new directory by running `amplify init`. After a few configuration questions, you can use amplify help at any time to see the overall command structure. When you’re ready to add a feature, run amplify add <category>.

```bash
  amplify init
```
    