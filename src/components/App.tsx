import React, { FC, ReactNode } from 'react'
import Header from './Header'

export type Props = {
  children: ReactNode
}
const App: FC<Props> = ({ children }) => (
  <main>
    <Header pathname={''} />
    {children}
  </main>
)

export default App
