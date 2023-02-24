module.exports = { developerSite };

async function developerSite(page) {
  await page.goto('https://developer.sailpoint.com/developerdays/');
  await new Promise(resolve => setTimeout(resolve, 10000));
}