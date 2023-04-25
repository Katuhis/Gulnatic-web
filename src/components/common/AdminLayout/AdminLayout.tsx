import { FC, ReactNode } from 'react'
import Head from 'next/head'
import useStyles from './AdminLayout.styles'

interface IProps {
  children: ReactNode
}

const AdminLayout: FC<IProps> = ({
  children
}) => {
  useStyles()

  return (
    <div>
      <Head>
        <title>Gulnatic</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        Admin
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
