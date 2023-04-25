import { useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '@/pages/admin/versions/[versionNumber]'
import { useQuery } from 'react-query'
import api from '@/api/admin'
import TPage from '@/interfaces/TPage'
import IVersion from '@/interfaces/IVersion'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminVersionPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminVersionPage: TPage<TProps> = (props) => {
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

  const isSuccess = !isLoading & !isError

  return (
    <div className={styles.root}>
      Admin Version Page
      <div>
        {isLoading && (
          <div>Loading ...</div>
        )}
        {isError && (
          <div>Error: {error?.message}</div>
        )}
        {isSuccess && (
          <div>version number: {version.number}</div>
        )}
      </div>
    </div>
  )
}

AdminVersionPage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminVersionPage
