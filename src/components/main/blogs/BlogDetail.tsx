import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import cocobo from 'image/cocoboBg.jpg';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const BlogDetailComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.blogsDetailArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <p>
            <img src={cocobo} alt="Cocobo" />
          </p>
          <h3>Markdown & HTML supported blog.</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni at, tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum debitis mollitia repellat porro dolorum magni neque, consectetur et nam fugiat ipsa, quibusdam accusamus aperiam asperiores quia inventore numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis reprehenderit cum quos quia necessitatibus ipsa mollitia error nemo dicta, possimus nobis tempora quod voluptate nostrum ducimus nulla aperiam, explicabo pariatur.
          </p>
          <blockquote>
            <p>
            Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.
            </p>
          </blockquote>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni at, tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum debitis mollitia repellat.</p>
          <p>Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.</p>
        </Grid>
      </Grid>
    </div>
  )
}

export const BlogDetail = withStyles(styles)(BlogDetailComp);