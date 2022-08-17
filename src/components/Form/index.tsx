import Presentation from './presentation'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { getProduct } from '@/server/getProduct'
import { Product } from '@/pages'

export type Props = {
  setUrl: Dispatch<SetStateAction<string>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  products: Product[]
}

type Input = {
  url: string
}
const Form: FC<Props> = ({ setUrl, setProducts, products }) => {
  const [isFetching, setIsFetching] = useState(false)
  const onSubmit: SubmitHandler<Input> = data => {
    setUrl(data.url)
    setIsFetching(true)
    getProduct(data.url)
      .then(result => {
        setIsFetching(false)
        console.log({ result })
        setProducts([...products, result.product])
      })
      .catch(error => {
        console.log({ error })
        setIsFetching(false)
      })
  }
  return <Presentation onSubmit={onSubmit} isFetching={isFetching} />
}

export default Form
