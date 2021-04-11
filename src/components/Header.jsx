import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {GREENPANTONE,BABYPOWEDER} from '../support/Colors'
import {ReactComponent as Icon} from '../images/shopping-cart.svg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color:BABYPOWEDER,

    flexGrow: 1,
  },
  colorScheme:{

    background:GREENPANTONE,
  },
  iconStyle:{
    width:35,
    height:35,
    marginRight:10,
    fill:BABYPOWEDER
  } 
}));


const Header = (props) => {
  const classes = useStyles()
  const { countCartItems } = props
  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.colorScheme} >
      <Toolbar>
        <Icon className={classes.iconStyle}/>
        <Typography variant="h6" className={classes.title}  >
          My Shopping
    </Typography>
      </Toolbar>
    </AppBar>
    </div>

  )
}
export default Header
  // <a class="nav-link" href="#">Amount cart itens {' '} {countCartItems ? (<>{countCartItems}</>) : '0'}</a>