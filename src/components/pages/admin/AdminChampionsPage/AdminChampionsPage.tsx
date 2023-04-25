import { InferGetStaticPropsType } from 'next'
import TPage from '@/interfaces/TPage'
import AdminLayout from '@/components/common/AdminLayout'
import { getStaticProps } from '@/pages/admin/versions/[versionNumber]/champions'
import useStyles from './AdminChampionsPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminChampionsPage: TPage<TProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
        Admin Champions Page
      <div>
        message: {props.message}
      </div>
    </div>
  )
}

AdminChampionsPage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminChampionsPage
