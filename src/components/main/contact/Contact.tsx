import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MapIcon from '@material-ui/icons/Room';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';

interface Props {}

interface IContact {
  type: string;
  value: string;
  visible: boolean;
  icon: any;
}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const ContactComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const [contacts, setContacs] = React.useState<IContact[]>([
    {
      type: 'Phone',
      value: '081321972065',
      visible: false,
      icon: <PhoneIcon />
    },
    {
      type: 'Email',
      value: 'hammadaf9408@gmail.com',
      visible: false,
      icon: <EmailIcon />
    },
    {
      type: 'Address',
      value: 'Super Puma Raya no 9, Cimahi Selatan',
      visible: false,
      icon: <MapIcon />
    },
  ]);

  const handleTooltip = (index: number) => {
    let newContacts = [...contacts];
    newContacts[index].visible = true;
    setContacs(newContacts);
    setTimeout(() => {
      let resetContacts = [...contacts];
      resetContacts[index].visible = false;
      setContacs(resetContacts);
    }, 1500)
  }

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
                {
                  contacts.map((contact, index) => 
                    <React.Fragment key={index}>
                      <div className={classes.contactCard}>
                        <span className={classes.contactIcon}>
                          {contact.icon}
                        </span>
                        <div className={classes.contactContent}>
                          <h6>{contact.type}</h6>
                          <p>
                            <CopyToClipboard onCopy={() => handleTooltip(index)} text={contact.value}>
                              <span className="copyText">{contact.value}</span>
                            </CopyToClipboard>
                            <span className={classNames(classes.copiedToolTip, contact.visible ? classes.copiedTooltipVisible : '')}>Copied</span>
                          </p>
                        </div>
                      </div>
                    </React.Fragment>  
                  )
                }
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export const Contact = withStyles(styles)(ContactComp);