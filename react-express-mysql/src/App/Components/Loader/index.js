import React from 'react'
import { CircularProgress } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color='secondary' size={60} />
    </Backdrop>
  )
}

export default Index
