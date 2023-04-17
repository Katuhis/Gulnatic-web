import { FC } from 'react'
import { InferGetStaticPropsType } from 'next'
import { getStaticProps } from '@/pages/admin/versions/champions/[championId]'
import AdminLayout from '@/components/common/AdminLayout'
import AdminChampionPageContent from './AdminChampionPageContent'
import useStyles from './AdminChampionPage.styles'

type TProps = InferGetStaticPropsType<typeof getStaticProps>

const AdminChampionPage: FC<TProps> = (props) => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Champion Page
      <div>
        <AdminChampionPageContent champion={props.champion} />
      </div>
    </AdminLayout>
  )
}

export default AdminChampionPage
