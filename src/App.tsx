import React from 'react';
import { WithStyles, withStyles, Paper, useMediaQuery, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { styles } from 'styles';
import classNames from 'classnames';
import { Navbar } from 'components/navbar/Navbar';
import { Home } from 'components/main/home/Home';
import { Route } from 'react-router-dom';
import { Contact } from 'components/main/contact/Contact';
import './App.css';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const AppComp: React.FC<AllProps> = (props) => {
  const { classes } = props;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          // type: 'light'
        },
      }),
    // eslint-disable-next-line
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <Paper square className={classNames(classes.bgLinesRaw, classes.bgLines)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Paper>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </ThemeProvider>
  )
}

export const App = withStyles(styles)(AppComp);