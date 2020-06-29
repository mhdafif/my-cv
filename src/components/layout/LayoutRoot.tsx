import React from 'react'
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const LayoutRootComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.layoutBody}>
      {props.children}
    </div>
  )
}

export const LayoutRoot = withStyles(styles)(LayoutRootComp);