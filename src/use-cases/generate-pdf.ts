import puppeteer from "puppeteer";

export const generatePDF = async ({ url }: { url: string }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  const height = await page.evaluate(() => document.body.scrollHeight);
  const minHeight = 1684;

  const file = await page.pdf({
    printBackground: true,
    width: "1190px",
    height: height > minHeight ? `${height}px` : `${minHeight}px`,
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