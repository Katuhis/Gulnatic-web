import { FC } from 'react'
import AdminLayout from '@/components/common/AdminLayout'
import IChampion from '@/interfaces/IChampion'
import useStyles from './AdminChampionPage.styles'

interface IProps {
  champion: IChampion
}

const AdminChampionPage: FC<IProps> = ({
  champion
}) => {
  const styles = useStyles()

  return (
    <AdminLayout className={styles.root}>
      Admin Champion Page
      <div>
        champion id: {champion.id}
      </div>
    </AdminLayout>
  )
}

export default AdminChampionPage
