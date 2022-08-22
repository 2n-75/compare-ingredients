import { FC } from 'react'
import { css } from '@emotion/css'
import { Colors } from '@/styles/colors'
import { Product } from '../App'

export type Props = {
  products: Array<Product>
}
const Presentation: FC<Props> = ({ products }) => {
  const header = ['商品', '成分', '価格']

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          {header.map(item => (
            <th className={styles.headerCell} key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr className={styles.contentRow} key={product.id}>
            <td className={styles.contentCell}>
              <div>{product.name}</div>
            </td>
            <td className={styles.contentCell}>{product.ingredients}</td>
            <td className={styles.contentCell}>
              <a href={product.url} target="_blank" className={styles.link}>
                <span className={styles.linkTextWrapper}>
                  {product.price}円<span className={styles.linkSubText}>商品ページへ</span>
                </span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const defaultStyles = {
  row: css`
    display: grid;
    grid-template-columns: 0.5fr 1fr 160px;
  `,
}
const styles = {
  table: css`
    width: 100%;
  `,
  headerRow: css`
    ${defaultStyles.row};
    background: ${Colors.black};
    border-radius: 3px 3px 0 0;
  `,
  contentRow: css`
    ${defaultStyles.row};
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
    font-weight: 700;
    text-align: center;
    transition: all 0.2s;
    &:hover {
      background: ${Colors.link};
    }
  `,
  linkTextWrapper: css`
    display: flex;
    flex-direction: column;
  `,
  linkSubText: css`
    font-size: 0.75em;
    font-weight: normal;
  `,
  noContentText: css`
    font-weight: normal;
    padding: 8px;
  `,
}

export default Presentation
