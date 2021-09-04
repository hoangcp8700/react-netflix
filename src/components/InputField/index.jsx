import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  inputField: {
    width: '100%',
    '& .MuiInputBase-input': {
      color: '#000',
      backgroundColor: '#c9c9c9',
    },
    '& .MuiFormLabel-root': {
      '&.Mui-focused': {
        color: 'gray',
      },
    },
    '@media (max-width:900px)': {
      '& .MuiInputBase-input': {
        fontSize: 14,
      },
    },
  },
})

const InputField = ({ errors, className, children, ...props }) => {
  const classes = useStyles()
  return (
    <TextField
      {...props}
      error={!!errors}
      helperText={errors?.message ? errors?.message : ''}
      variant="filled"
      className={clsx(classes.inputField, className || '')}
    >
      {children}
    </TextField>
  )
}
export default InputField
