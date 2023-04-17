import { FC } from 'react'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '@/pages/admin/versions/champions'
import AdminLayout from '@/components/common/AdminLayout'
import AdminChampionsPageContent from './AdminChampionsPageContent'
import useStyles from './AdminChampionsPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminChampionsPage: FC<TProps> = (props) => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Champions Page
      <div>
        <AdminChampionsPageContent message={props.message} />
      </div>
    </AdminLayout>
  )
}

export default AdminChampionsPage
