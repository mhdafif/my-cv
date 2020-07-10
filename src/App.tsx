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
import { Portofolio } from 'components/main/portofolio/Portofolio';
import { ThemeRoot, LayoutRoot } from 'components/layout';
import { ThemeState } from 'context/theme/ThemeState';
import { Blogs } from 'components/main/blogs/Blogs';
import { BlogDetail } from 'components/main/blogs/BlogDetail';
import { Development } from 'components/main/development/Development';
import { LoadingState } from 'context/loading/LoadingState';
import { AlertState } from 'context/alert/AlertState';
import { ErrorState } from 'context/error/ErrorState';
import axios from 'axios';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const AppComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  // Just to awake api on heroku
  React.useEffect(() => {	
    axios.get('https://mhdafif-api.herokuapp.com/api/v1/home');	
  }, []);

  return (
    <ThemeState>
      <ThemeRoot>
        <LayoutRoot>
          <div className={classes.wrapper}>
            <div className={classNames(classes.bgLinesRaw, classes.bgLines)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Navbar />
            <LoadingState>
              <ErrorState>
                <AlertState>
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/portofolio" component={process.env.REACT_APP_TYPE === 'develop' ? Portofolio : Development} />
                  <Route exact path="/blogs" component={process.env.REACT_APP_TYPE === 'develop' ? Blogs : Development} />
                </AlertState>
              </ErrorState>
            </LoadingState>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blogs/detail" component={BlogDetail} />
          </div>
        </LayoutRoot>
      </ThemeRoot>
    </ThemeState>
  )
}

export const App = withStyles(styles)(AppComp);