import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import useStyles from './AdminLayout.styles'

interface IProps {
  className?: string
  children: ReactNode
}

const AdminLayout: FC<IProps> = ({
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
      </Head>

      <main className={clsx(styles.main, className)}>
        {children}
      </main>
    </>
  )
}

export default AdminLayout
