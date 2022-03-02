import * as cheerio from 'cheerio';

const parseItemUrl = (entry: any) => {
  const $ = cheerio.load(entry.bodyHTML);

  const urlRegex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/g;

  let url: string = '';

  const rawURL = $('ul li:first').text();

  if (rawURL) {
    const matches = rawURL.match(urlRegex);
    if (matches && matches.length !== 0) {
      url = matches[0];
    }
  }

  $('ul:first-of-type').remove();
  $('hr:first-of-type').remove();

  const description = $('body').html() ?? '';
  return { url, description };
};

export default parseItemUrl;
