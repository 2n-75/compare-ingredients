import Presentation from './presentation'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { getProduct } from '@/server/getProduct'
import { Product } from '@/pages'
import Router from 'next/router'

export type Props = {
  setUrl: Dispatch<SetStateAction<string>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  products: Product[]
}

export type FormValue = {
  url1: string
  url2: string
}
const Form: FC<Props> = ({ setUrl, setProducts, products }) => {
  const [isFetching, setIsFetching] = useState(false)
  const onSubmit: SubmitHandler<FormValue> = data => {
    setUrl(data.url1)
    setIsFetching(true)
    getProduct(data.url1)
      .then(result => {
        setIsFetching(false)
        console.log({ result })
        setProducts([...products, result.product])
        Router.push('/result')
      })
      .catch(error => {
        console.log({ error })
        setIsFetching(false)
      })
  }
  return <Presentation onSubmit={onSubmit} isFetching={isFetching} />
}

export default Form
