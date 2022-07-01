import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { css } from '@emotion/react'
import { SubmitHandler, useForm } from 'react-hook-form'

export type Props = {
  setUrl: Dispatch<SetStateAction<string>>
}

type Input = {
  url: string
}
const Form: FC<Props> = ({ setUrl }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, isValidating },
  } = useForm<Input>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<Input> = data => {
    console.log(data)
    setUrl(data.url)
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
        <button type="submit" css={styles.submitButton} disabled={!isDirty || !isValid}>
          send
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
    border: 1px solid #aaa;
    font-size: 20px;
    &::placeholder {
      color: #aaa;
    }
  `,
  submitButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 40px;
    background: #67c5ff;
    color: white;
    border-radius: 3px;
    transition: 0.4s;
    border: none;
    font-size: 20px;
    font-weight: 700;
    &:disabled {
      background: #aaa;
    }
  `,
  errorMessage: css`
    margin-top: 10px;
  `,
}

export default Form
