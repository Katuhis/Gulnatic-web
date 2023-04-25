import TPage from '@/interfaces/TPage'
import Layout from '@/components/common/Layout'
import useStyles from './HomePage.styles'

const HomePage: TPage = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Home Page
    </div>
  )
}

HomePage.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default HomePage
