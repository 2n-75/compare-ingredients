import { FC, ReactNode } from 'react'
import { css } from '@emotion/css'

export type Props = {
  title: string
  children: ReactNode
}
const Layout: FC<Props> = ({ title, children }) => (
  <>
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
    </header>
    <main className={styles.main}>{children}</main>
  </>
)

export default Layout

const styles = {
  header: css`
    padding: 20px;
    width: 100%;
  `,
  title: css`
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
  `,
  main: css`
    min-width: 350px;
    max-width: 960px;
    margin: 0 auto;
  `,
}
