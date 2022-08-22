export const getProduct = async (params: { url1: string; url2: string }) => {
  const { url1, url2 } = params
  const productionUrl = `https://us-central1-compare-ingredients.cloudfunctions.net/getProduct`
  const localUrl = `http://localhost:5001/compare-ingredients/us-central1/getProduct`

  const requestUrl = `${localUrl}?urls[]=${url1}&urls[]=${url2}`
  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Error! status: ${response}`)
    }

    return await response.json()
  } catch (err) {
    console.log(err)
  }
}
