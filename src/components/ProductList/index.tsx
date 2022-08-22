import { FC } from 'react'
import { Product } from '../App'
import Presentation from './presentation'

type Props = {
  products: Product[]
}
export const ProductList: FC<Props> = ({ products }) => {
  if (products.length === 0) {
    return <p>商品情報が存在しません</p>
  }
  return <Presentation products={products} />
}
