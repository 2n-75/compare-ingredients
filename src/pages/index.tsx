import Form from '@/components/Form'
import 'the-new-css-reset/css/reset.css'
import App from '@/components/App'
import Layout from '@/components/Layout'
import { css } from '@emotion/css'

export default function Home() {
  return (
    <App>
      <Layout title="成分比較">
        <>
          <p>
            <a href="https://www.cosme.com/" target="_blank">
              @cosmeshopping
            </a>
            の商品を比較します。商品URLを入力してください。
          </p>
          <div className={styles.formWrapper}>
            <Form />
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
