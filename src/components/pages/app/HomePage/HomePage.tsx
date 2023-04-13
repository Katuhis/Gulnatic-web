import { FC } from 'react'
import Layout from '@/components/common/Layout'
import useStyles from './HomePage.styles'

const HomePage: FC = () => {
  const styles = useStyles()

  return (
    <Layout
      className={styles.root}
      meta={{
        title: '',
        description: ''
      }}
    >
      Home Page
    </Layout>
  )
}

export default HomePage
