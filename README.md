# Discord QR code generator

A bot for Discord that get parameters and return a QR code leading to the arguments sent.
The purpose of this development is studying and will be using nodeJS, discord.js and google API.

## Running the project

To run this project you must have node installed, then open it and run the following command:
```
npx install
```

or

```
yarn
```

With the dependencies installed, to get the bot online you must write the required env variables like demonstrated in the .env.example file, then run this command once to create the commands in your discord server:
```
yarn ts .src/commands.ts
```

Finally you can run the bot with:
```
yarn dev
```
