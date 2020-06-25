import { Theme, createStyles } from "@material-ui/core";

const borderColor = '#2e344e';
const fontColor = '#a4acc4';

export const styles = (theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    'body': {
      '-webkit-font-smoothing': 'antialiased',
      fontSize: '18px',
      lineHeight: '1.8rem',
      fontWeight: 400,
      fontFamily: `'Baloo Chettan 2', cursive`,
      color: `${fontColor}`,
    },
    'a': {
      textDecoration: 'none',
      backgroundColor: 'transparent'
    }
  },
  wrapper: {
    paddingLeft: '300px',
    position: 'relative',
    minHeight: '100vh',
    zIndex: 1
  },
  bgLinesRaw: {
    height: '100%',
    minHeight: '100vh',
    top: 0,
    position: 'absolute',
  },
  bgLines: {
    background: '#10121b',
    left: '300px',
    width: 'calc(100% - 300px)',
    zIndex: -1,
    '& span': {
      display: 'inline-block',
      width: '2px',
      background: 'rgba(46,52,78,.3)',
      left: 0,
      height: '100%',
      minHeight: '100vh',
      top: 0,
      position: 'absolute',
      '&:nth-child(2)': {
        left: '20%'
      },
      '&:nth-child(3)': {
        left: '40%'
      },
      '&:nth-child(4)': {
        left: '60%'
      },
      '&:nth-child(5)': {
        left: '80%'
      },
    },
  },
  bgLinesSpan: {
    display: 'inline-block',
    width: '2px',
    background: 'rgba(46,52,78,.3)',
    left: 0,
  },
  nav: {
    position: 'fixed',
    left: 0,
    top: 0,
    '-webkit-transform': 'translateX(0)',
    transform: 'translateX(0)',
    height: '100vh',
    width: '300px',
    background: '#191d2b',
    borderRight: `1px solid ${borderColor}`,
    zIndex: 10,
    '-webkit-transition': 'all .4s ease-out',
    transition: 'all .4s ease-out'
  },
  navInner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    overflowY: 'auto'
  },
  navImage: {
    padding: '20px 0',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid ${borderColor}`,
    '& div': {
      height: '200px',
      width: '200px',
      borderRadius: '1000px',
      border: `7px solid ${borderColor}`,
      overflow: 'hidden',
      margin: '0 auto',
      cursor: 'pointer'
      // display: 'inline-block',
      // verticalAlign: 'middle'
    }
  },
  navMenu: {
    width: '100%',
    padding: '15px 5px',
    '& li': {
      listStyle: 'none',
      textAlign: 'center',
      display: 'block',
      '& a': {
        '-webkit-transition': 'all .4s ease-out',
        transition: 'all .4s ease-out',
        textTransform: 'uppercase',
        fontSize: '.94rem',
        letterSpacing: '1px',
        display: 'block',
        padding: '5px 0',
        color: `${fontColor}`,
        fontWeight: '600',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        '&:hover': {
          color: '#037fff',
          '&:before': {
            width: '100%',
            visibility: 'visible'
          }
        },
        '&.active': {
          color: '#fff',
          '&:before': {
            background: '#037fff',
            width: '100%',
            visibility: 'visible'
          }
        },
        '&:before': {
          content: `''`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: '100%',
          height: '100%',
          width: 0,
          background: 'rgba(3,127,255,.2)',
          visibility: 'hidden',
          zIndex: -1,
          transition: 'all .4s ease-out'
        }
      }
    },
    '& li:not(:last-child)': {
      marginBottom: '1px'
    }
  },
  navFooter: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    marginBotton: 0,
    fontSize: '1rem',
    padding: '15px 0',
    borderTop: `1px solid ${borderColor}`,
    '& a': {
      color: `${fontColor}`,
      '-webkit-transition': 'all .4s ease-out',
      transition: 'all .4s ease-out',
      '&:hover': {
        color: '#037fff'
      }
    }
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1
  },
  particle: {
    position: 'absolute',
    left: '300px',
    top: 0,
    height: '100%',
    zIndex: -1,
    background: '#10121b'
  },
  container: {
    width: '100%',
    padding: '0 15px',
    margin: '0 auto',
    '@media (min-width: 576px)': {
      maxWidth: '540px'
    },
    '@media (min-width: 768px)': {
      maxWidth: '720px'
    },
    '@media (min-width: 992px)': {
      maxWidth: '960px'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1140px'
    },
  },
  container2: {
    justifyContent: 'center',
  },
  homeContent: {
    textAlign: 'center',
    padding: '50px 80px',
    '& h1': {
      fontWeight: 700
    },
    '& .color-theme': {
      color: '#037fff'
    },
    '& p': {
      marginTop: '15px',
      fontSize: '1.25rem',
      lineHeight: '2rem'
    }
  },
  homeSocial: {
    paddingLeft: 0,
    marginBottom: 0,
    marginTop: '20px',
    '& li': {
      listStyle: 'none',
      display: 'inline-block',
      margin: '0 8px',
      '-webkit-transition': 'all .4s ease-out',
      transition: 'all .4s ease-out',
      '& a': {
        '-webkit-transition': 'all .4s ease-out',
        transition: 'all .4s ease-out',
        color: `${fontColor}`,
        '&:hover': {
          color: '#037fff',
        }
      },
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }
  },
  section: {

  },
  contactArea: {
    position: 'relative',
    padding: '120px 0'
  }
})