export const getProduct = async (url: string) => {
  const requestUrl = `https://us-central1-compare-ingredients.cloudfunctions.net/getProduct?url=${url}`
  const localUrl = `http://localhost:5001/compare-ingredients/us-central1/getProduct?url=${url}`

  try {
    const response = await fetch(localUrl, {
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
