import TPage from '@/interfaces/TPage'
import AdminLayout from '@/components/common/AdminLayout'
import Link from 'next/link'
import useStyles from './AdminHomePage.styles'

const AdminHomePage: TPage = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Home Page
      <div>
        <Link href="/admin/versions">to Admin Versions Page</Link>
      </div>
    </div>
  )
}

AdminHomePage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminHomePage
