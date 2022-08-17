import { Dispatch, FC, SetStateAction, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Colors } from '@/styles/colors'
import { functions } from '@/server/init'
import { httpsCallable } from 'firebase/functions'
import { getProduct } from '@/server/getProduct'

export type Props = {
  setUrl: Dispatch<SetStateAction<string>>
}

type Input = {
  url: string
}
const Form: FC<Props> = ({ setUrl }) => {
  const [isFetching, setIsFetching] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, isValidating },
  } = useForm<Input>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<Input> = data => {
    setUrl(data.url)
    setIsFetching(true)
    getProduct(data.url)
      .then(result => {
        setIsFetching(false)
        console.log({ result })
      })
      .catch(error => {
        console.log({ error })
        setIsFetching(false)
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} css={styles.form}>
      <label>商品ページURL</label>
      <div css={styles.gridRow}>
        <div css={styles.inputContainer}>
          <input
            placeholder="https://www.cosme.com/products/detail.php?product_id=000000"
            {...register('url', { pattern: /^https:\/\/www.cosme.com\/products\/detail.php\?product_id=[0-9]+$/i })}
            css={styles.input}
          />
          {errors.url && <p css={styles.errorMessage}>入力された値は無効です</p>}
        </div>

        <button type="submit" css={styles.submitButton} disabled={isFetching}>
          取得する
        </button>
      </div>
    </form>
  )
}

const styles = {
  form: css``,
  gridRow: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 180px;
    gap: 40px;
  `,
  inputContainer: css``,
  input: css`
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid ${Colors.gray};
    font-size: 16px;
    &::placeholder {
      color: ${Colors.gray};
    }
  `,
  submitButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    width: 180px;
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

export default Form
