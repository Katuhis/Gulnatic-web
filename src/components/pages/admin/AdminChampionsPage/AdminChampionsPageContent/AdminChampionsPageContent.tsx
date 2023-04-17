import { FC } from 'react'
import useStyles from './AdminChampionsPageContent.styles'

interface IProps {
  message: string
}

const AdminChampionsPageContent: FC<IProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      Admin Champions Page Content
      <div>
        message: {props.message}
      </div>
    </div>
  )
}

export default AdminChampionsPageContent
