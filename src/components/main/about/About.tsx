import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import myPict from 'image/foto.jpg';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import moment from "moment";
import PaletteIcon from '@material-ui/icons/Palette';
import CodeIcon from '@material-ui/icons/Code';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const AboutComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      {/* About */}
      <div className={classes.aboutArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={8}>
            <div className={classes.title}>
              <h2>About</h2>
              <span>About</span>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <div className={classes.aboutImage}>
                  <img alt="about" src={myPict} />
                  <span className='about-image-zoom'>
                    <ZoomInIcon />
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className={classes.aboutContent}>
                  <h3>I am <span className={classes.colorTheme}>Muhammad Afif</span></h3>
                  <p>
                    I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                  </p>
                  <ul>
                    <li><b>Full Name</b>Muhammad Afif</li>
                    <li><b>Age</b>{moment().diff('1994-08-09', 'years')} Years</li>
                    <li><b>Languages</b>Sundanese, Bahasa, English</li>
                    <li><b>Address</b>Super Puma Raya no 9, Cimahi Selatan</li>
                    <li><b>Freelance</b>Available</li>
                  </ul>
                  <a className={classes.button} href={process.env.PUBLIC_URL + '/Muhammad-Afif_CV.pdf'} rel="noopener noreferrer" target="_blank">
                    Download CV
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      
      {/* Services */}
      <div className={classes.servicesArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={8}>
            <div className={classes.title}>
              <h2>Services</h2>
              <span>Services</span>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <div className={classes.serviceItem}>
                  <div className="service-icon">
                    <PaletteIcon />
                  </div>
                  <h5>Web Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div className={classes.serviceItem}>
                  <div className="service-icon">
                    <CodeIcon />
                  </div>
                  <h5>Web Development</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div className={classes.serviceItem}>
                  <div className="service-icon">
                    <PhoneAndroidIcon />
                  </div>
                  <h5>Mobile Application</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      
      {/* Review */}
      <div className={classes.reviewArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={8}>
            <div className={classes.title}>
              <h2>Review</h2>
              <span>Review</span>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className={classes.reviewItem}>
                  <div className="review-item-content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>

                  </div>
                  <div className="reivew-item-author">
                    <h5>Burdette Turner</h5>
                    <h6>Web Developer, Abc Company</h6>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.reviewItem}>
                  <div className="review-item-content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.</p>

                  </div>
                  <div className="reivew-item-author">
                    <h5>Burdette Turner</h5>
                    <h6>Web Developer, Abc Company</h6>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export const About = withStyles(styles)(AboutComp);