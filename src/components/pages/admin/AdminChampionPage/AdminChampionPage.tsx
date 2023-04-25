import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '@/pages/admin/versions/[versionNumber]/champions/[championId]'
import TPage from '@/interfaces/TPage'
import AdminLayout from '@/components/common/AdminLayout'
import useStyles from './AdminChampionPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminChampionPage: TPage<TProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Champion Page
      <div>
        champion id: {props.champion.id}
      </div>
    </div>
  )
}

AdminChampionPage.getLayout = (page) => {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}

export default AdminChampionPage
