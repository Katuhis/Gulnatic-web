import { FC } from 'react'
import Link from 'next/link'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminHomePage.styles'

const AdminHomePage: FC = () => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Home Page
      <Link href="/admin/champion">to Admin Champion Page</Link>
    </AdminLayout>
  )
}

export default AdminHomePage
