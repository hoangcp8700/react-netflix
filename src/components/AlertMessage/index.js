import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { Slide } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: '10%',
    right: 5,
  },
})
const AlertMessage = ({ message }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (!message) return
    setIsOpen(true)
    const time = setTimeout(() => {
      setIsOpen(false)
    }, 5000)

    return () => {
      clearTimeout(time)
    }
  }, [message])
  return (
    <Slide direction="left" in={isOpen} timeout={500} className={classes.root}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {message} — <strong>check it out!</strong>
      </Alert>
    </Slide>
  )
}

export default AlertMessage
