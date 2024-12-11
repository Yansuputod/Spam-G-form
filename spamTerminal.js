const puppeteer = require("puppeteer");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayClick = 80;
const delayUlang = 300;
const jumlahVote = 1000;
const jumlahChrome = 8;

(async () => {
  console.log("starting....");
  const votesPerChrome = Math.ceil(jumlahVote / jumlahChrome);
  let totalBerhasil = 0;

  const tasks = [];
  for (let j = 0; j < jumlahChrome; j++) {
    tasks.push(
      (async () => {
        let browser;
        try {
          browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
          });

          const page = await browser.newPage();
          const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe0zSCDSpFWRj7hISuVRwHWfVaKdnhs6D5Y1l6xOAWopA2LYg/viewform?usp=sf_link";
          await page.goto(formUrl);

          for (let i = 0; i < votesPerChrome; i++) {
            await page.waitForSelector('label[for="i6"]');
            await page.click('label[for="i6"]');
            await delay(delayClick);

            await page.waitForSelector('label[for="i20"]');
            await page.click('label[for="i20"]');
            await delay(delayClick);

            await page.waitForSelector('label[for="i37"]');
            await page.click('label[for="i37"]');
            await delay(delayClick);

            await page.waitForSelector('label[for="i54"]');
            await page.click('label[for="i54"]');
            await delay(delayClick);

            await page.waitForSelector('div[role="button"][aria-label="Submit"]');
            await page.click('div[role="button"][aria-label="Submit"]');
            await delay(1000);

            const currentUrl = page.url();
            if (currentUrl.includes("/formResponse")) {
              console.log(`Chrome-${j + 1}: Pengisian form ke-${i + 1} berhasil.`);
              totalBerhasil++;
            } else {
              console.log(`Chrome-${j + 1}: Pengisian form ke-${i + 1} gagal.`);
            }

            await delay(delayUlang);
            await page.goto(formUrl);
          }
        } catch (error) {
          console.error(`Chrome-${j + 1} error:`, error.message);
        } finally {
          if (browser) await browser.close();
        }
      })()
    );
  }

  await Promise.all(tasks);
  console.log("Semua vote selesai.");
  console.log("Total Vote: " + jumlahVote);
  console.log("Vote yang berhasil dikirim: "+ totalBerhasil+ "\n\n\n") ;
})();
