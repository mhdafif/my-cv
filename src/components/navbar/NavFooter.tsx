import React from 'react'
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';
import { Link } from 'react-router-dom';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const NavFooterComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <p className={classes.navFooter}>
      @ 2020 <b> <Link to="/contact">Mhd Afif</Link> </b>
    </p>
  )
}

export const NavFooter = withStyles(styles)(NavFooterComp);