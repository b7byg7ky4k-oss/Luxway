const { chromium } = require("/Users/carlosrodriguez/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

async function run() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error" && !msg.text().includes("maps.googleapis")) errors.push(msg.text());
  });
  await page.goto("file:///Users/carlosrodriguez/Documents/Codex/2026-06-01/files-mentioned-by-the-user-testo/index.html", { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#bookingForm");
  const hero = await page.locator("h1").innerText();
  const cards = await page.locator(".service-card").count();
  const logos = await page.locator("img[src='assets/images/luxway-logo.png']").count();
  const reviewLogos = await page.locator(".reviews img[src*='luxway-logo']").count();
  await page.selectOption("#serviceSelect", "cruise");
  await page.locator(".vehicle-card").nth(1).click();
  const cruisePrice = await page.locator("#priceValue").innerText();
  await page.selectOption("#serviceSelect", "hourly");
  const hourlyPrice = await page.locator("#priceValue").innerText();
  await page.locator(".lang[data-lang='it']").click();
  const italianHero = await page.locator("h1").innerText();
  const vehicleNames = await page.locator(".vehicle-card h3").allInnerTexts();
  await page.screenshot({ path: "work/mobile-check.png", fullPage: true });
  await browser.close();
  console.log(JSON.stringify({ hero, italianHero, cards, logos, reviewLogos, vehicleNames, cruisePrice, hourlyPrice, errors }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
