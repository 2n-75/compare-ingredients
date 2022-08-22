import { Colors } from '@/styles/colors'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { css } from '@emotion/css'
import { FormValue } from '.'
import { Button } from '../Button'

export type Props = {
  isFetching: boolean
  onSubmit: SubmitHandler<FormValue>
}

const Presentation: FC<Props> = ({ isFetching, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValue>({ mode: 'onChange' })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <label>ひとつめの商品</label>
        <input
          placeholder="https://www.cosme.com/products/detail.php?product_id=000000"
          {...register('url1', { pattern: /^https:\/\/www.cosme.com\/products\/detail.php\?product_id=[0-9]+$/i })}
          className={styles.input}
        />
        {errors.url1 && <p className={styles.errorMessage}>入力された値は無効です</p>}
      </div>

      <div className={styles.inputContainer}>
        <label>ふたつめの商品</label>
        <input
          placeholder="https://www.cosme.com/products/detail.php?product_id=000000"
          {...register('url2', { pattern: /^https:\/\/www.cosme.com\/products\/detail.php\?product_id=[0-9]+$/i })}
          className={styles.input}
        />
        {errors.url2 && <p className={styles.errorMessage}>入力された値は無効です</p>}
      </div>

      <div className={styles.buttonWrapper}>
        <Button className={styles.submitButton} type="submit" disabled={isFetching || !isDirty || !isValid}>
          比較する
        </Button>
      </div>
    </form>
  )
}

const styles = {
  form: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  inputContainer: css`
    height: 100px;
  `,
  input: css`
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid ${Colors.gray};
    &::placeholder {
      color: ${Colors.gray};
    }
    margin-top: 4px;
  `,
  buttonWrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  `,
  submitButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    width: 180px;
    height: 42px;
    background: ${Colors.primary};
    color: white;
    border-radius: 3px;
    transition: 0.4s;
    border: none;
    font-weight: 700;
    &:disabled {
      background: ${Colors.gray};
    }
  `,
  errorMessage: css`
    margin-top: 10px;
  `,
  checkbox: css`
    width: 20px;
    height: 20px;
    background: blue;
    &:checked {
      background: red;
    }
  `,
}

export default Presentation
