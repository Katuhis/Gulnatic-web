import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminVersionsPage.styles'

const AdminVersionsPage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Versions Page
    </AdminLayout>
  )
}

export default AdminVersionsPage
