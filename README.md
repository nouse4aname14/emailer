# Emailer

## Getting Started
- Install the [Node Version Manager](https://github.com/creationix/nvm).
- Make sure you're on the correct version of NodeJS.
  ```bash
  nvm use
  ```
- Create a .env file at the root of the directory and provide your own configuration values
    ```
    PORT=$YOUR_API_PORT
    MAILGUN_API_USER=$YOUR_MAILGUN_API_USER
    MAILGUN_API_KEY=$YOUR_MAILGUN_API_KEY
    MAILGUN_API_URL=$YOUR_MAILGUN_API_MESSAGES_URL    #e.g https://api.mailgun.net/v3/$YOUR_SANDBOX.mailgun.org/messages
    SENDGRID_API_URL=$YOUR_SENDGRID_API_MAIL_SEND_URL #e.g https://api.sendgrid.com/v3/mail/send
    SENDGRID_API_KEY=$YOUR_SENDGRID_API_KEY
    EMAIL_PROVIDER=Choose a value of either "Mailgun" or "Sendgrid"
    ```
- Install the app
    ```bash
    npm install
    ```
- Build the app
    ```bash
    npm run build
    ```
- Start the app
    ```bash
    npm start
    ```

## Language, Framework, and Libraries
- I decided to use `node.js` with `Typescript` and `express.js` to complete this task because given the timeframe I thought it would be the quickest to get the job done.
- I have used `eslint` and `prettier` to maintain styling.
- I decided to use `inversify` for inversion of control because I think it is the best IOC library for node.js.

## With more time I would have:
- Written tests for all the code.
- Used a middleware for only allowing `Content-Type: application/json` requests.
- Used `Swagger` and `Ajv` for api schema contracts and validation.
- Added a logger for request/response logging and general purposes.
- Centralized the request code for making api calls within each respective email provider to allow for adding new methods to the classes without copying and pasting already used code.