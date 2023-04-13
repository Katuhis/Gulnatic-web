import { createUseStyles } from 'react-jss'

export default createUseStyles({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    }
  },
  body: {
    margin: 0,
    minHeight: '100vh',
    display: 'flex'
  },
  main: {
  }
})
