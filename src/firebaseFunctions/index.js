const { join } = require('path')
const { https, logger } = require('firebase-functions')
const { default: next } = require('next')
const nextjsDistDir = join('.', require('../../next.config.js').distDir)
const puppeteer = require('puppeteer')

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()
exports.nextjsFunc = https.onRequest(async (req, res) => {
  return nextjsServer.prepare().then(product => nextjsHandle(req, product))
})

exports.getProduct = https.onRequest(async (req, res) => {
  logger.log('onRequest', req.query.url)
  const requestUrl = req.query.url
  if (!requestUrl) {
    return res.status(404).send('not found').end()
  }
  // TODO: domainのバリデーション
  const browser = await puppeteer.launch()
  const xpath = {
    name: '//*[@id="inr__wrap-info"]/div[1]/h1',
    price: '//*[@id="inr__wrap-info"]/dl/dd[1]/p/span[2]',
    ingredients: '//*[@id="product-detail"]/div[5]/div/div/div[3]/dl/dd[6]',
  }
  const page = await browser.newPage()
  await page.goto(requestUrl)
  const name = await getText(page, xpath.name)
  if (!name) {
    return res.status(404).send('not found').end()
  }
  const product = {
    price: await getText(page, xpath.price),
    ingredients: await getText(page, xpath.ingredients),
    name,
  }
  await browser.close()
  logger.log(JSON.stringify(product))
  return res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000').status(201).send({ product }).end()
})

const getText = async (page, xpath) => {
  const elems = await page.$x(xpath)
  if (elems.length === 0) return ''
  const jsHandle = await elems[0].getProperty('textContent')
  return await jsHandle.jsonValue()
}
