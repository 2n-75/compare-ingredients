import { FC } from 'react'
import Link from 'next/link'
import { Product } from '@/utils/getProduct'
import { css } from '@emotion/react'
import { Colors } from '@/styles/colors'

export type Props = {
  products: Array<Product>
}
const Presentation: FC<Props> = ({ products }) => {
  const header = ['商品', '成分', '価格']

  return (
    <table css={styles.table}>
      <tr css={[styles.row, styles.headerRow]}>
        {header.map(item => (
          <th css={styles.headerCell}>{item}</th>
        ))}
      </tr>
      {products.map(product => (
        <tr css={[styles.row, styles.contentRow]}>
          <td css={styles.contentCell}>
            <div>{product.name}</div>
          </td>
          <td css={styles.contentCell}>{product.ingredients}</td>
          <td css={styles.contentCell}>
            <a href={product.url} target="_blank" css={styles.link}>
              <span css={styles.linkTextWrapper}>
                {product.price}円<span css={styles.linkSubText}>商品ページへ</span>
              </span>
            </a>
          </td>
        </tr>
      ))}
    </table>
  )
}

const styles = {
  table: css``,
  row: css`
    display: grid;
    grid-template-columns: 0.5fr 1fr 160px;
  `,
  headerRow: css`
    background: ${Colors.black};
    border-radius: 3px 3px 0 0;
  `,
  contentRow: css`
    border-bottom: 1px solid ${Colors.gray};
  `,
  headerCell: css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.white};
    font-weight: 700;
    padding: 16px 0;
  `,
  contentCell: css`
    display: flex;
    align-items: center;
    padding: 4px;
    line-height: 1.5;
  `,
  link: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    padding: 8px 0;
    background: ${Colors.primary};
    color: white;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  `,
  linkTextWrapper: css`
    display: flex;
    flex-direction: column;
  `,
  linkSubText: css`
    font-size: 12px;
    font-weight: normal;
  `,
}

export default Presentation
