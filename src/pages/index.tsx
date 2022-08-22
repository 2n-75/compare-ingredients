import Form from '@/components/Form'
import 'the-new-css-reset/css/reset.css'
import App, { Product } from '@/components/App'
import { css } from '@emotion/css'
import { useState } from 'react'
import { ProductList } from '@/components/ProductList'
import { Colors } from '@/styles/colors'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [isFetched, setIsFetched] = useState(false)

  const handleHighlight = () => {
    console.log('マークする')
  }

  return (
    <App>
      <>
        <header className={styles.header}>
          <h2 className={styles.title}>成分比較</h2>
        </header>
        <main className={styles.main}>
          <section>
            <p>
              <a href="https://www.cosme.com/" target="_blank">
                @cosmeshopping
              </a>
              の商品を比較します。商品URLを入力してください。
            </p>
            <div className={styles.formWrapper}>
              <Form setProducts={setProducts} setIsFetched={setIsFetched} />
            </div>
          </section>

          {isFetched && (
            <section className={styles.listWrapper}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.input} onChange={handleHighlight} />
                <span className={styles.text}>同じ成分をハイライトする</span>
              </label>
              <ProductList products={products} />
            </section>
          )}
        </main>
      </>
    </App>
  )
}

const styles = {
  header: css`
    padding: 20px;
    width: 100%;
  `,
  title: css`
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
  `,
  main: css`
    min-width: 350px;
    max-width: 960px;
    margin: 0 auto;
  `,
  formWrapper: css`
    margin-top: 20px;
  `,
  listWrapper: css`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  label: css`
    display: flex;
    align-items: center;
    justify-content: center;
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
}
