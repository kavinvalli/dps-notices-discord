# DPS Notices Discord
A discord bot to check [DPS RKP Notices](https://dpsrkp.net/category/notices) every 5 minutes and send a message on `dps-notices` channel if a new notice has been created.

## Setup
- Invite the bot using [this link](https://discord.com/api/oauth2/authorize?client_id=827751236270555136&permissions=8&scope=bot)
- Create a text channel in your server named `dps-notices`

## Run Locally
- Clone repo
```sh
git clone https://github.com/kavinvalli/dps-notices-discord
cd dps-notices-discord
```
- Run the cronjob
```sh
npm run dev # For development
npm start # For production
```
