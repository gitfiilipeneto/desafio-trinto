import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'
import { GREENPANTONE, BABYPOWEDER, POPUPRED } from '../support/Colors'
import { ReactComponent as Icon } from '../images/shopping-cart.svg'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: BABYPOWEDER,

    flexGrow: 1,
  },
  colorScheme: {

    background: GREENPANTONE,
  },
  iconStyle: {
    width: 35,
    height: 35,
    fill: BABYPOWEDER,
  },
  cartCount: {
    verticalAlign:10,
    marginRight:10,
    borderRadius: 50,
    paddingRight:5,
    backgroundColor: POPUPRED,
  }

}));


const Header = (props) => {
  const classes = useStyles()
  const { countCartItems } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorScheme} >
        <Toolbar>
          <div>
            <Icon className={classes.iconStyle} />
            <a className={classes.cartCount}>{' '} {countCartItems ? (<>{countCartItems}</>) : '0'}</a>
          </div>
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