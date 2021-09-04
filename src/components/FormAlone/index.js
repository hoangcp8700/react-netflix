import React from 'react'
import { Typography } from '@material-ui/core'
import InputField from 'components/InputField'
import ButtonField from 'components/ButtonField'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { FormEmailStyles } from './styles/FormEmail'

export default function FormAlone(props) {
  const classes1 = FormEmailStyles()

  return (
    <div className={classes1.formAlone} {...props}>
      <Typography className={classes1.text}>
        Ready to watch? Enter your email to create or restart your membership
      </Typography>
      <form className={classes1.form}>
        <InputField label="Email Address" />
        <ButtonField
          className={classes1.btnStarted}
          endIcon={<ArrowForwardIosIcon />}
        >
          Get Started
        </ButtonField>
      </form>
    </div>
  )
}
