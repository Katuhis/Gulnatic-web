import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminVersionsLoadPage.styles'

const AdminVersionsLoadPage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Versions Load Page
    </AdminLayout>
  )
}

export default AdminVersionsLoadPage
