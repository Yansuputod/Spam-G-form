const puppeteer = require('puppeteer');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayClick = 50;
const delayUlang = 300;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=600,400'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });

  const page = await browser.newPage();
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfiyG_XxqGqydlR5UWmrK--fdGT_E5brpW7g_JIFB94Tkj3Ng/viewform?usp=sf_link';
  await page.goto(formUrl);

  for (let i = 0; i < 1; i++) {
    await page.waitForSelector('label[for="i63"]');
    await page.click('label[for="i63"]');
    await delay(delayClick);

    await page.waitForSelector('label[for="i200"]');
    await page.click('label[for="i200"]');
    await delay(delayClick);

    await page.waitForSelector('label[for="i534"]');
    await page.click('label[for="i534"]');
    await delay(delayClick);

    await page.waitForSelector('label[for="i367"]');
    await page.click('label[for="i367"]');
    await delay(delayClick);

    await page.waitForSelector('label[for="i430"]');
    await page.click('label[for="i430"]');
    await delay(delayClick);

    await page.waitForSelector('label[for="i764"]');
    await page.click('label[for="i764"]');
    await delay(delayClick);

    await page.waitForSelector('div.e19J0b.CeoRYc');
    await page.click('div.e19J0b.CeoRYc');
    console.log(`Pengisian form ke-${i + 1} berhasil.`);

    await delay(delayUlang);
    await page.goto(formUrl);
  }

  await browser.close();
})();
