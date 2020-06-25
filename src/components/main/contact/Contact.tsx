import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MapIcon from '@material-ui/icons/Room';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const ContactComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <div className={classes.contactArea}>
      <Grid container className={classes.container2}>
        <Grid item xs={10} lg={8}>
          <div className={classes.title}>
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <div>
                <h4>Get In Touch</h4>
                <form>
                  <div className={classes.formField}>
                    <label>Enter your name*</label>
                    <input type="text" name="name" />
                  </div>
                  <div className={classes.formField}>
                    <label>Enter your email*</label>
                    <input type="text" name="email" />
                  </div>
                  <div className={classes.formField}>
                    <label>Enter your subject*</label>
                    <input type="text" name="subject" />
                  </div>
                  <div className={classes.formField}>
                    <label>Enter your message*</label>
                    <textarea name="message" cols={30} rows={6} ></textarea>
                  </div>
                  <div className={classes.formField}>
                    <button className={classes.button}>Send Mail</button>
                  </div>
                </form>
              </div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className={classes.contactInfo}>
                <div className={classes.contactCard}>
                  <span className={classes.contactIcon}>
                    <PhoneIcon />
                  </span>
                  <div className={classes.contactContent}>
                    <h6>Phone</h6>
                    <p>
                      <a href="/">081321972065</a>
                    </p>
                  </div>
                </div>
                <div className={classes.contactCard}>
                  <span className={classes.contactIcon}>
                    <EmailIcon />
                  </span>
                  <div className={classes.contactContent}>
                    <h6>Email</h6>
                    <p>
                      <a href="/">hammadaf9408@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className={classes.contactCard}>
                  <span className={classes.contactIcon}>
                    <MapIcon />
                  </span>
                  <div className={classes.contactContent}>
                    <h6>Address</h6>
                    <p>
                      <a href="/">Super Puma Raya no 9, Cimahi Selatan</a>
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export const Contact = withStyles(styles)(ContactComp);