import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import IVersion from '@/interfaces/IVersion'
import useStyles from './AdminVersionPage.styles'

interface IProps {
  version: IVersion
}

const AdminVersionPage: FC<IProps> = ({
  version
}) => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Version Page
      <div>
        version number: {version.number}
      </div>
    </AdminLayout>
  )
}

export default AdminVersionPage
