import { FC } from 'react'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '@/pages/admin/versions/[versionNumber]'
import AdminLayout from '@/components/common/AdminLayout'
import AdminVersionPageContent from './AdminVersionPageContent'
import useStyles from './AdminVersionPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminVersionPage: FC<TProps> = (props) => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Version Page
      <div>
        <AdminVersionPageContent version={props.version} />
      </div>
    </AdminLayout>
  )
}

export default AdminVersionPage
