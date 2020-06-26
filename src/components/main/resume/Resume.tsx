import React from 'react'
import { WithStyles, withStyles, Grid } from '@material-ui/core';
import { styles } from 'styles';
import CaseIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

interface Props {}

interface Skill {
  name: string;
  value: string;
}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const ResumeComp: React.FC<AllProps> = (props) => {
  const { classes } = props;
  const [skill1] = React.useState<Skill[]>([
    { 
      name: 'HTML',
      value: '90%',
    },
    { 
      name: 'Javascript',
      value: '85%',
    },
    { 
      name: 'React',
      value: '80%',
    },
  ])

  const [skill2] = React.useState<Skill[]>([
    { 
      name: 'CSS',
      value: '70%',
    },
    { 
      name: 'Typescript',
      value: '85%',
    },
    { 
      name: 'Node',
      value: '65%',
    },
  ])
  return (
    <React.Fragment>
      <div className={classes.skillArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={12} lg={8}>
            <div className={classes.title}>
              <h2>My Skills</h2>
              <span>My Skills</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  {
                    skill1.map((item, index) => 
                      <Grid item xs={12}>
                        <div key={index} className={classes.skillItem}>
                          <h6>
                            {item.name}
                          </h6>
                          <div className="skill-progress">
                              <div className="skill-percentage">{item.value}</div>
                            <div className="skill-bar">
                              <span className="skill-bar-active" style={{width: item.value}}></span>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                  {
                    skill2.map((item, index) => 
                      <Grid item xs={12}>
                        <div key={index} className={classes.skillItem}>
                          <h6>
                            {item.name}
                          </h6>
                          <div className="skill-progress">
                              <div className="skill-percentage">{item.value}</div>
                            <div className="skill-bar">
                              <span className="skill-bar-active" style={{width: item.value}}></span>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    )
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.resumeArea}>
        <Grid container className={classes.container2}>
          <Grid item xs={12} lg={8}>
            <div className={classes.title}>
              <h2>Resume</h2>
              <span>Resume</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={8}>
            <div className={classes.subTitle}>
              <span className='subTitle-icon'>
                <CaseIcon />
              </span>
              <h4>Working Experience</h4>
            </div>
            <div className={classes.resumeWrapper}>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2018 - Present
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Frontend Web Developer</h5>
                  <h6 className="resume-detail-company">Xsis Mitra Utama</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus, iusto at quo ut dolorum illo quas natus. Qui numquam mollitia placeat impedit consequuntur sapiente possimus non nobis pariatur animi!</p>
                </div>
              </div>
           </div>
          </Grid>          
          <Grid item xs={12} lg={8} style={{paddingTop: '50px'}}>
            <div className={classes.subTitle}>
              <span className='subTitle-icon'>
                <SchoolIcon />
              </span>
              <h4>Educational Qualifications</h4>
            </div>
            <div className={classes.resumeWrapper}>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2012 - 2018
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Bachelor of Computer Science</h5>
                  <h6 className="resume-detail-company">Telkom University</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus, iusto at quo ut dolorum illo quas natus. Qui numquam mollitia placeat impedit consequuntur sapiente possimus non nobis pariatur animi!</p>
                </div>
              </div>
              <div className="resume-item">
                <div className="resume-date">
                  <h6 className="resume-date-year">
                    2009 -2012
                  </h6>
                </div>
                <div className="resume-detail">
                  <h5>Higher Schoold Graduation</h5>
                  <h6 className="resume-detail-company">SMA Angkasa Bandung</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus, iusto at quo ut dolorum illo quas natus. Qui numquam mollitia placeat impedit consequuntur sapiente possimus non nobis pariatur animi!</p>
                </div>
              </div>
           </div>
          </Grid>          
        </Grid>
      </div>
    </React.Fragment>
  )
}

export const Resume = withStyles(styles)(ResumeComp);