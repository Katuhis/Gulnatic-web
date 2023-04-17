import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import AdminVersionsLoadPageContent from './AdminVersionsLoadPageContent'
import useStyles from './AdminVersionsLoadPage.styles'

const AdminVersionsLoadPage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Versions Load Page
      <div>
        <AdminVersionsLoadPageContent />
      </div>
    </AdminLayout>
  )
}

export default AdminVersionsLoadPage
