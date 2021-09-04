import { makeStyles } from '@material-ui/core/styles'

export const FormEmailStyles = makeStyles({
  formAlone: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start;',
    marginTop: '1rem',
    margin: 'auto',
    '@media (max-width:600px)': {
      flexDirection: 'column',
    },
  },
  btnStarted: {
    minWidth: 160,
    height: 56,
    '@media (max-width:600px)': {
      margin: '0 auto',
      height: 42,
      marginTop: '1rem',
    },
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    '@media (max-width:600px)': {
      fontSize: 14,
    },
  },
})
