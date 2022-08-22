import { useState } from 'react'
import 'the-new-css-reset/css/reset.css'
import { ProductList } from '@/components/ProductList'
import { css } from '@emotion/css'
import App from '@/components/App'
import Layout from '@/components/Layout'
import { Button } from '@/components/Button'
import { Colors } from '@/styles/colors'

export type Product = {
  id: number
  name: string
  price: string
  ingredients?: string
  url: string
}

export default function Result() {
  const [products, setProducts] = useState<Product[]>([])

  const handleHighlight = () => {
    console.log('マークする')
  }
  return (
    <App>
      <Layout title="結果">
        <>
          <section>
            <div className={styles.checkboxWrapper}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.input} onChange={handleHighlight} />
                <span className={styles.text}>同じ成分をマークする</span>
              </label>
            </div>
            <div className={styles.contentsWrapper}>
              <ProductList products={products} />
            </div>
          </section>

          <div className={styles.buttonWrapper}>
            <Button as="a" href="/">
              別の商品を比較する
            </Button>
          </div>
        </>
      </Layout>
    </App>
  )
}

const styles = {
  checkboxWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  label: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  input: css`
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width: 16px;
    height: 16px;

    &::before,
    &::after {
      position: absolute;
      display: inline-block;
      content: '';
    }

    &::before {
      width: 18px;
      height: 18px;
      margin-right: 4px;
      border: 1px solid ${Colors.gray};
      border-radius: 3px;
    }

    &:checked::after {
      top: -2px;
      right: 0;
      bottom: 0;
      left: 5px;
      width: 7px;
      height: 12px;
      margin-top: auto;
      margin-bottom: auto;
      border-right: 3px solid ${Colors.primary};
      border-bottom: 3px solid ${Colors.primary};
      transform: rotate(40deg);
    }
  `,

  text: css`
    :not(:first-child) {
      margin-left: 6px;
    }
  `,
  contentsWrapper: css`
    margin-top: 20px;
  `,
  buttonWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
  `,
}
