import { ReactNode } from 'react'
import { NextPage } from 'next'

type TPage<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export default TPage
