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
  const requestUrls = req.query.urls
  logger.log({ requestUrls })
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const products = []
  const xpath = {
    name: '//*[@id="inr__wrap-info"]/div[1]/h1',
    price: '//*[@id="inr__wrap-info"]/dl/dd[1]/p/span[2]',
    ingredients: '//*[@id="product-detail"]/div[5]/div/div/div[3]/dl/dd[6]',
  }
  // TODO: ここの書き方直す
  // 1つめ
  await page.goto(requestUrls[0])
  const name1 = await getText(page, xpath.name)
  if (!name1) {
    return undefined
  }
  products.push({
    price: await getText(page, xpath.price),
    ingredients: await getText(page, xpath.ingredients),
    name: name1,
    url: requestUrls[0],
  })

  // 2つめ
  await page.goto(requestUrls[1])
  const name2 = await getText(page, xpath.name)
  if (!name2) {
    return undefined
  }
  products.push({
    price: await getText(page, xpath.price),
    ingredients: await getText(page, xpath.ingredients),
    name: name2,
    url: requestUrls[1],
  })

  logger.log({ products })
  await browser.close()
  return res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000').status(201).send({ products }).end()
})

const getByUrl = async (page, url) => {
  const xpath = {
    name: '//*[@id="inr__wrap-info"]/div[1]/h1',
    price: '//*[@id="inr__wrap-info"]/dl/dd[1]/p/span[2]',
    ingredients: '//*[@id="product-detail"]/div[5]/div/div/div[3]/dl/dd[6]',
  }
  await page.goto(url)
  const name = await getText(page, xpath.name)
  if (!name) {
    return undefined
  }
  return {
    price: await getText(page, xpath.price),
    ingredients: await getText(page, xpath.ingredients),
    name,
  }
}

const getText = async (page, xpath) => {
  const elems = await page.$x(xpath)
  if (elems.length === 0) return ''
  const jsHandle = await elems[0].getProperty('textContent')
  return await jsHandle.jsonValue()
}
