import Head from 'next/head'
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'
import '@/styles/global'

// === context ===
export type Product = {
  id: number
  name: string
  price: string
  ingredients?: string
  url: string
}
export const ProductsContext = createContext<Product[]>([])
export const setProductsContext = createContext<Dispatch<SetStateAction<Product[]>>>(() => undefined)

export type Props = {
  children: ReactNode
}
const App: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  return (
    <>
      <Head>
        <title>成分比較</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <ProductsContext.Provider value={products}>
        <setProductsContext.Provider value={setProducts}>{children}</setProductsContext.Provider>
      </ProductsContext.Provider>
    </>
  )
}

export default App
