import { FC } from 'react'
import Link from 'next/link'
import useStyles from './AdminHomePageContent.styles'

const AdminHomePageContent: FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Home Page Content
      <div>
        <Link href="/admin/versions">to Admin Versions Page</Link>
      </div>
    </div>
  )
}

export default AdminHomePageContent
