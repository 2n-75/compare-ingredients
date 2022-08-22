import Presentation from './presentation'
import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { getProduct } from '@/server/getProduct'
import Router from 'next/router'
import { ProductsContext, setProductsContext } from '../App'

export type FormValue = {
  url1: string
  url2: string
}
const Form: FC = () => {
  const [isFetching, setIsFetching] = useState(false)
  const products = useContext(ProductsContext)
  const setProducts = useContext(setProductsContext)
  const onSubmit: SubmitHandler<FormValue> = data => {
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
