import { makeStyles } from '@material-ui/core/styles'

import { Button } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(0.4, 2),
    backgroundColor: 'var(--button-main)',
    '&:hover': {
      backgroundColor: 'var(--button-main-hover)',
    },
    '& .MuiButton-startIcon': {
      marginLeft: 0,
    },
    '&.Mui-disabled ': {
      backgroundColor: 'var(--button-main)',
      opacity: 0.3,
    },
  },
}))
export default function ButtonField({ children, className, ...props }) {
  const classes = useStyles()
  return (
    <Button
      {...props}
      className={clsx(classes.button, className || '')}
      variant="contained"
      color="secondary"
    >
      {children}
    </Button>
  )
}
