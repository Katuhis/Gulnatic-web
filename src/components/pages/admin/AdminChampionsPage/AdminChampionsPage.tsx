import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminChampionsPage.styles'

const AdminChampionsPage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Champions Page
    </AdminLayout>
  )
}

export default AdminChampionsPage
