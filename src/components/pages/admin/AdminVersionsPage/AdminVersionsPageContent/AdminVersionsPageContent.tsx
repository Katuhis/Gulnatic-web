import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import api from '@/api'
import IVersion from '@/interfaces/IVersion'
import useStyles from './AdminVersionsPageContent.styles'

const AdminVersionsPageContent: FC = () => {
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

  if (isLoading) {
    return (
      <div>Loading ...</div>
    )
  }

  if (isError) {
    return (
      <div>Error: {error?.message}</div>
    )
  }

  return (
    <div className={styles.root}>
      Admin Versions Page Content
      <div>
        versions count: {versions.length}
      </div>
    </div>
  )
}

export default AdminVersionsPageContent
