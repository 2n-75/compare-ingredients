import 'modern-normalize'
import { css } from '@emotion/react'
import { FC, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}
const App: FC<Props> = ({ children }) => <main css={styles.contentsWrapper}>{children}</main>

const styles = {
  contentsWrapper: css`
    min-width: 350px;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
  `,
}

export default App
