import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import useStyles from './Layout.styles'

interface IProps {
  meta?: {
    title?: string
    description?: string
  }
  className?: string
  children: ReactNode
}

const Layout: FC<IProps> = ({
  meta,
  className,
  children
}) => {
  const styles = useStyles()

  return (
    <>
      <Head>
        <title>TeKoken</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={meta?.title || 'TeKoken'} />
        <meta name="description" content={meta?.description || 'TeKoken'} />
      </Head>

      <main className={clsx(styles.main, className)}>
        {children}
      </main>
    </>
  )
}

export default Layout
