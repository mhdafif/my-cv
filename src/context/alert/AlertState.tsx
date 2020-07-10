import React, { useReducer } from 'react'
import { IAlert } from './IAlert'
import { alertReducer, AlertAction } from './alertReducer';
import { AlertContext } from './alertContext';
import Alert from '@material-ui/lab/Alert';
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from 'styles';
import classNames from 'classnames';

type AllProps 
  = WithStyles<typeof styles>;

export const AlertStateComp: React.FC<AllProps> = props => {
  const { classes } = props;

  const initialState: IAlert = {
    type: undefined,
    message: '',
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);
  const [showAlert, setShowAlert] = React.useState(false);

  // Set alert
  const setAlert = (alert: IAlert) => {
    dispatch({
      type: AlertAction.SET_ALERT,
      alert
    });
    setShowAlert(true);
    setTimeout(() => {
      dispatch({
        type: AlertAction.SET_ALERT,
        alert: initialState
      });
    }, 4000)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000)
  }
  
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alert: state,
        AlertJSX: <Alert variant="filled" severity={state.type} className={classNames(classes.alertBox, showAlert && classes.isVisible)}>{state.message}</Alert>
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export const AlertState = withStyles(styles)(AlertStateComp);
