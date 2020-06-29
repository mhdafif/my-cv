import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import cocobo from 'image/cocobo.png';
import { Link } from 'react-router-dom';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const BlogsComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const dummy: number[] = [1,2,3];

  return (
    <div className={classes.blogsArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <div className={classes.title}>
            <h2>Recent Blogs</h2>
            <span>Recent Blogs</span>
          </div>
        </Grid>
        <Grid item xs={10} lg={8}>
          <Grid container spacing={3}>
            {
              dummy.map((item, index) => 
                <Grid item xs={12} md={6}>
                  <div className={classes.blogItem}>
                    <div className="blog-item-image">
                      <Link to="/blogs/detail" >
                        <img src={cocobo} alt="Cocobo" />
                      </Link>
                      <div className="blog-item-date">
                        <span className="date">20</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>
                    <div className="blog-item-content">
                      <h5>
                        <a href="/blogs">
                          Markdown & Html supported blog.
                        </a>
                      </h5>
                    </div>
                  </div>
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export const Blogs = withStyles(styles)(BlogsComp);