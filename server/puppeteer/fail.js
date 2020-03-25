const puppeteer = require("puppeteer");

let words = [
  { name: "empty", email: "", password: "", msg: "the form is not complete" },
  {
    name: "emptyEmail",
    email: "",
    password: "root",
    msg: "the form is not complete"
  },
  {
    name: "emptyPassword",
    email: "root@root.com",
    password: "",
    msg: "the form is not complete"
  },
  {
    name: "wrongEmailOrPwd",
    email: "rroot@root.com",
    password: "rrooddt",
    msg: "Email or password incorrect"
  }
];

const fillFields = async ({ name, email, password, msg }, page) => {
  await page.type('input[type="email"]', email);
  await page.type('input[type="password"]', password);
  await page.click('input[type="button"]');

  let rsl = await page.evaluate(async msg => {
    try {
      let err = await document.querySelector("#error").innerText;

      await page.waitFor("#error");

      return err === msg ? true : false;
    } catch (error) {
      return false;
    }
  }, msg);

  console.log(`${rsl ? "Success" : "Failed"}:`, name, rsl);
};

const failedTest = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitFor("body");

  try {
    for (let i in words) await fillFields(words[i], page);
  } catch (e) {
    console.error("Any Error occurred Shutting down.");
  } finally {
    console.log("Closing Browser");
    await browser.close();
  }
};

failedTest();
