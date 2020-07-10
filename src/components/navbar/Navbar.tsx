import React from 'react'
import { WithStyles, withStyles, IconButton } from '@material-ui/core';
import { styles } from 'styles';
import { NavImage } from './NavImage';
import { NavMenu } from './NavMenu';
import { NavFooter } from './NavFooter';
import MenuIcon from '@material-ui/icons/MenuOpen';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const NavbarComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const [showNav, setShowNav] = React.useState(false);

  return (
    <nav className={classNames(classes.nav, showNav ? classes.navIsVisible : '')}>
      <IconButton className='toggler' component="button" onClick={() => setShowNav(!showNav)}>
        { showNav ? <CloseIcon /> : <MenuIcon /> }
      </IconButton>
      <div className={classes.navInner}>
        <NavImage />
        <NavMenu />
        <NavFooter />
      </div>
    </nav>
  )
}

export const Navbar = withStyles(styles)(NavbarComp);