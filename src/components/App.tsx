import Head from 'next/head'
import { FC, ReactNode } from 'react'
import '@/styles/global'

export type Props = {
  children: ReactNode
}
const App: FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>成分比較</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"></meta>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </>
)

export default App
