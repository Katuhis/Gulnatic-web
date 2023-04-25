import { FC, ReactNode } from 'react'
import Head from 'next/head'
import useStyles from './Layout.styles'

interface IProps {
  meta?: {
    title?: string
    description?: string
  }
  children: ReactNode
}

const Layout: FC<IProps> = ({
  meta,
  children
}) => {
  useStyles()

  return (
    <div>
      <Head>
        <title>Gulnatic</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={meta?.title || 'Gulnatic'} />
        <meta name="description" content={meta?.description || 'Gulnatic'} />
      </Head>

      <header>
        App
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
