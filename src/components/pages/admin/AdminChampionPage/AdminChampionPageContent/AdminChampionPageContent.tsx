import { FC } from 'react'
import IChampion from '@/interfaces/IChampion'
import useStyles from './AdminChampionPageContent.styles'

interface IProps {
  champion: IChampion
}

const AdminChampionPageContent: FC<IProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Champion Page Content
      <div>
        champion id: {props.champion.id}
      </div>
    </div>
  )
}

export default AdminChampionPageContent
