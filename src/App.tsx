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

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const AppComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

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
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portofolio" component={Portofolio} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/detail" component={BlogDetail} />
          </div>
        </LayoutRoot>
      </ThemeRoot>
    </ThemeState>
  )
}

export const App = withStyles(styles)(AppComp);