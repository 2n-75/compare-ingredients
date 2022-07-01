import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import App from '../components/App'
import 'the-new-css-reset/css/reset.css'
import { getProduct, Product } from '@/utils/getProduct'

export default function Home() {
  const [url, setUrl] = useState('')
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    if (url) {
      setProduct(getProduct(url))
    }
  }, [url])
  return (
    <App>
      <p>Index Page</p>
      <section>
        <h2>商品情報取得</h2>
        <Form setUrl={setUrl}></Form>
      </section>

      {product && (
        <>
          <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <a href={product.url} target="_blank">
              商品ページを見る
            </a>
          </div>
        </>
      )}
    </App>
  )
}
