export const scraper = {
  url: 'http://books.toscrape.com/',
  async scrape(browser) {
    const page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url);
  },
};
