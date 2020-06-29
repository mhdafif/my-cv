import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';
import './App.css';
import classNames from 'classnames';
import { Navbar } from 'components/navbar/Navbar';
import { Home } from 'components/main/home/Home';
import { Route } from 'react-router-dom';
import { Contact } from 'components/main/contact/Contact';
import { Resume } from 'components/main/resume/Resume';
import { About } from 'components/main/about/About';
import { ThemeState } from 'context/theme/ThemeState';
import { Layout } from 'components/layout/Layout';
import { Portofolio } from 'components/main/portofolio/Portofolio';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const AppComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  return (
    <ThemeState>
      <Layout>
        <div className={classes.wrapper}>
          <div className={classNames(classes.bgLinesRaw, classes.bgLines)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portofolio" component={Portofolio} />
        </div>
      </Layout>
    </ThemeState>
  )
}

export const App = withStyles(styles)(AppComp);