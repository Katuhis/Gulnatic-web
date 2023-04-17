import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import api from '@/api'
import IVersion from '@/interfaces/IVersion'
import useStyles from './AdminVersionPageContent.styles'

interface IProps {
  version: IVersion
}

const AdminVersionPageContent: FC<IProps> = (props) => {
  const styles = useStyles()
  const [version, setVersion] = useState<IVersion>(props.version)

  const { isLoading, isError, error } = useQuery<IVersion, null | Error, IVersion>(
    ['getVersion', version.number],
    () => api.getVersion(version.number),
    {
      enabled: !version,
      onSuccess: (version: IVersion) => {
        setVersion(version)
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
      Admin Version Page Content
      <div>
        version number: {version.number}
      </div>
    </div>
  )
}

export default AdminVersionPageContent
