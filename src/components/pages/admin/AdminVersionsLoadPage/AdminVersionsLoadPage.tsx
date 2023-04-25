import TPage from '@/interfaces/TPage'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminVersionsLoadPage.styles'

const AdminVersionsLoadPage: TPage = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Versions Page
    </div>
  )
}

AdminVersionsLoadPage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminVersionsLoadPage
