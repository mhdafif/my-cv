import React from 'react'
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';
import { NavImage } from './NavImage';
import { NavMenu } from './NavMenu';
import { NavFooter } from './NavFooter';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const NavbarComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <nav className={classes.nav}>
      <div className={classes.navInner}>
        <NavImage />
        <NavMenu />
        <NavFooter />
      </div>
    </nav>
  )
}

export const Navbar = withStyles(styles)(NavbarComp);