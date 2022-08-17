import Form from '@/components/Form'
import { useEffect, useState } from 'react'
import 'the-new-css-reset/css/reset.css'
import { ProductList } from '@/components/ProductList'
import { css } from '@emotion/react'
import App from '@/components/App'

export type Product = {
  id: number
  name: string
  price: string
  ingredients?: string
  url: string
}

export default function Home() {
  const [url, setUrl] = useState('')
  const [product, setProduct] = useState<Product | null>(null)
  return (
    <App>
      <p>Index Page</p>
      <section>
        <h2>商品情報取得</h2>
        <Form setUrl={setUrl}></Form>
      </section>

      <section css={styles.productListWrapper}>
        <ProductList />
      </section>
    </App>
  )
}

const styles = {
  productListWrapper: css`
    margin-top: 40px;
  `,
}
