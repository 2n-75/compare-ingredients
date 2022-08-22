import Form from '@/components/Form'
import { useState } from 'react'
import 'the-new-css-reset/css/reset.css'
import App from '@/components/App'
import Layout from '@/components/Layout'
import { css } from '@emotion/css'

export type Product = {
  id: number
  name: string
  price: string
  ingredients?: string
  url: string
}

export default function Home() {
  const [url, setUrl] = useState('')
  const [products, setProducts] = useState<Product[]>([])

  return (
    <App>
      <Layout title="成分比較">
        <>
          <p>
            <a href="https://cosmestore.net/" target="_blank">
              @cosmestore
            </a>
            の商品を比較します。商品URLを入力してください。
          </p>
          <div className={styles.formWrapper}>
            <Form setUrl={setUrl} setProducts={setProducts} products={products}></Form>
          </div>
        </>
      </Layout>
    </App>
  )
}

const styles = {
  formWrapper: css`
    margin-top: 20px;
  `,
}
