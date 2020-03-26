const puppeteer = require("puppeteer");

const connection = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitFor("body");
  await page.type('input[type="email"]', "root@root.com");
  await page.type('input[type="password"]', "root");
  await page.click('input[type="button"]');

  await page.on("response", async response => {
    if (response.url() == "http://localhost:3000/success") {
      console.log(`login: Success\nClosing Browser`);
      await browser.close();
    } else if (response.status() !== 200) {
      console.log(`login: Failed\nClosing Browser`);
      await browser.close();
    }
  });
};

connection();
