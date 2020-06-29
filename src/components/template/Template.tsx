import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const TemplateComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={''}>
      <Grid container className={classes.container2}>
        
      </Grid>
    </div>
  )
}

export const Template = withStyles(styles)(TemplateComp);