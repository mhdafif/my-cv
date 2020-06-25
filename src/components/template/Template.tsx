import React from 'react'
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const TemplateComp: React.FC<AllProps> = (props) => {
  // const { classes } = props;

  return (
    <div>

    </div>
  )
}

export const Template = withStyles(styles)(TemplateComp);