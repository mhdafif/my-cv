import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
// import imgNonik from 'image/nonik.png';
import cocobo from 'image/cocobo.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import LinkIcon from '@material-ui/icons/Link';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const PortofolioComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const dummy: number[] = [1,2,3];

  return (
    <div className={classes.portofolioArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <div className={classes.title}>
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
        </Grid>
        <Grid item xs={10} lg={8}>
          <Grid container spacing={3}>
            {
              dummy.map((item, index) => 
                <Grid item xs={12} md={6} lg={4}>
                  <div className={classes.portofolioItem}>
                    <div className='portofolio-image'>
                      <img src={cocobo} alt="Cocobo" />
                      <ul>
                        <li>
                          <button>
                            <ZoomInIcon />
                          </button>
                        </li>
                        <li>
                          <a href="/">
                            <LinkIcon />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h5>
                      <a href="/">Cocobo</a>
                    </h5>
                    <h6>A beautiful t-shirt mockup.</h6>
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

export const Portofolio = withStyles(styles)(PortofolioComp);