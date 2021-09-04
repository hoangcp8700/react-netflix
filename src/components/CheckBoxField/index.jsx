import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  checkBox: {
    color: '#fff',
    '& .MuiCheckbox-root': {
      color: '#fff',
    },
  },
})
const CheckboxField = ({ label, className, ...props }) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      className={clsx(classes.checkBox, className || '')}
      control={<Checkbox {...props} />}
      label={label}
    />
  )
}

export default CheckboxField
