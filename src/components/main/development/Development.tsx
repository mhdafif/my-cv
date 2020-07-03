import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import { RiCodeSSlashLine } from 'react-icons/ri';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const DevelopmentComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.developmentArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <div className="development-content">
            <RiCodeSSlashLine />
            <h5>This page is under development!</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export const Development = withStyles(styles)(DevelopmentComp);