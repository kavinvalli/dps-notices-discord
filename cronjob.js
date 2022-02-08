const cron = require('node-cron');
const RssParser = require('rss-parser');
const { client } = require('./index');

const FEED_URL = 'https://dpsrkp.net/category/notices/feed/';

const checkIfNewNotice = async () => {
  try {
    const now = Date.now();
    const parser = new RssParser();
    const data = (await parser.parseURL(FEED_URL)).items
      .map(({ title, link, pubDate }) => ({ title, link, pubDate }))
      .filter(
        ({ pubDate }) => now - new Date(pubDate).getTime() < 5 * 60 * 1000,
      );

    data.forEach(({ title, link }) => {
      client.guilds.cache
        .filter((_) => true)
        .forEach((guild) => {
          guild.channels.cache
            .find((i) => i.name === 'dps-notices')
            .send(`${title}\n${link}`);
        });
    });
  } catch (err) {
    console.error(err);
  }
};

cron.schedule('*/5 * * * *', async () => {
  await checkIfNewNotice();
});
