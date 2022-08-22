import Presentation from './presentation'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { getProduct } from '@/server/getProduct'
import { Product } from '../App'

export type FormValue = {
  url1: string
  url2: string
}

type Props = {
  setProducts: Dispatch<SetStateAction<Product[]>>
  setIsFetched: Dispatch<SetStateAction<boolean>>
}
const Form: FC<Props> = ({ setProducts, setIsFetched }) => {
  const onSubmit: SubmitHandler<FormValue> = async data => {
    if (!data.url1 || !data.url2) {
      return
    }
    await getProduct(data)
      .then(result => {
        setProducts(result.products)
        setIsFetched(true)
      })
      .catch(error => {
        console.log({ error })
      })
  }
  return <Presentation onSubmit={onSubmit} />
}

export default Form
