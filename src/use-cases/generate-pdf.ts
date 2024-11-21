import puppeteer from "puppeteer";

export const generatePDF = async ({ url }: { url: string }) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  // [TODO] @skorupaw
  // It seems something unexpected is happening here. For some reason, `puppeteer`
  // adds extra height to the template.
  const height = await page.evaluate(() => document.body.scrollHeight);
  const minHeight = 1684;

  const file = await page.pdf({
    printBackground: true,
    width: "1190px",
    height: height > minHeight ? `${height}px` : `${minHeight}px`,
    // height: minHeight,
    landscape: false,
    margin: {
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  });

  await browser.close();

  return file;
};

export default generatePDF;
