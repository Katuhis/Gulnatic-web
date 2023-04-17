import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import AdminHomePageContent from './AdminHomePageContent'
import useStyles from './AdminHomePage.styles'

const AdminHomePage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Home Page
      <div>
        <AdminHomePageContent />
      </div>
    </AdminLayout>
  )
}

export default AdminHomePage
