import React from 'react'
import { WithStyles, withStyles, Avatar } from '@material-ui/core';
import { styles } from 'styles';
import avatar from 'image/nonik.png';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const NavImageComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.navImage}>
      <Avatar src={avatar} onClick={() => console.log('a')} />
    </div>
  )
}

export const NavImage = withStyles(styles)(NavImageComp);