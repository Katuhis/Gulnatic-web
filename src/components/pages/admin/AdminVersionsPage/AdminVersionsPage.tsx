import { useState } from 'react'
import { useQuery } from 'react-query'
import api from '@/api/admin'
import TPage from '@/interfaces/TPage'
import IVersion from '@/interfaces/IVersion'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminVersionsPage.styles'

const AdminVersionsPage: TPage = () => {
  const styles = useStyles()
  const [versions, setVersions] = useState<IVersion[]>([])

  const { isLoading, isError, error } = useQuery<IVersion[], null | Error, IVersion[]>(
    'getVersions',
    api.getVersions,
    {
      enabled: true,
      onSuccess: (versions: IVersion[]) => {
        setVersions(versions)
      }
    }
  )

  const isSuccess = !isLoading & !isError

  return (
    <div className={styles.root}>
      Admin Versions Page
      <div>
        {isLoading && (
          <div>Loading ...</div>
        )}
        {isError && (
          <div>Error: {error?.message}</div>
        )}
        {isSuccess && (
          <div>versions count: {versions.length}</div>
        )}
      </div>
    </div>
  )
}

AdminVersionsPage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminVersionsPage
