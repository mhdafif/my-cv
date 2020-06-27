import { Theme, createStyles } from "@material-ui/core";

const borderColor = '#2e344e';
const fontColor = '#a4acc4';
const blueColor = '#037fff';

export const styles = (theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  // '@global': {
  //   '*': {
  //     boxSizing: 'border-box',
  //     margin: 0,
  //     padding: 0
  //   },
  //   'body': {
  //     '-webkit-font-smoothing': 'antialiased',
  //     fontSize: '18px',
  //     lineHeight: '1.8rem',
  //     fontWeight: 400,
  //     fontFamily: `'Baloo Chettan 2', cursive`,
  //     color: fontColor,
  //   },
  //   'a': {
  //     textDecoration: 'none',
  //     backgroundColor: 'transparent'
  //   }
  // },
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
    // background: theme.palette.type === 'dark' ? '#191d2b' : '#fff',
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
    '& .nav-image-avatar': {
      height: '200px',
      width: '200px',
      borderRadius: '1000px',
      border: `7px solid ${borderColor}`,
      overflow: 'hidden',
      margin: '0 auto',
      cursor: 'pointer'
      // display: 'inline-block',
      // verticalAlign: 'middle'
    },
    '& .nav-image-theme': {
      position: 'absolute',
      right: '5px',
      top: '10px',
      overflow: 'hidden',
      '& .light-icon': {
        color: '#fbc02d',
        '-webkit-transition': 'all .4s ease-out',
        transition: 'all .4s ease-out',
        transform: theme.palette.type === 'light' ? 'translateX(0)' : 'translateX(36px)',
        transitionDelay: theme.palette.type === 'light' ? '0' : '1s',
        '&:hover': {
          color: '#fbdc2d',
          backgroundColor: 'unset'
        }
      },
      '& .dark-icon': {
        position: 'absolute',
        color: '#547ae8',
        '-webkit-transition': 'all .4s ease-out',
        transition: 'all .4s ease-out',
        transform: theme.palette.type === 'dark' ? 'translateX(0)' : 'translateX(36px)',
        transitionDelay: theme.palette.type === 'dark' ? '0' : '1s',
        '&:hover': {
          color: '#548de8',
          backgroundColor: 'unset'
        }
      },
      '& span': {
        padding: '0',
        '& svg': {
          fontSize: '30px',
        }
      }
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
        color: fontColor,
        fontWeight: '600',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        '&:hover': {
          color: blueColor,
          '&:before': {
            width: '100%',
            visibility: 'visible'
          }
        },
        '&.active': {
          color: '#fff',
          '&:before': {
            background: blueColor,
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
    paddingTop: '15px',
    borderTop: `1px solid ${borderColor}`,
    '& a': {
      color: fontColor,
      '-webkit-transition': 'all .4s ease-out',
      transition: 'all .4s ease-out',
      '&:hover': {
        color: blueColor
      }
    }
  },
  homeArea: {
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
  colorTheme: {
    color: blueColor
  },
  homeContent: {
    textAlign: 'center',
    padding: '50px 80px',
    '& h1': {
      fontWeight: 700
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
        color: fontColor,
        '&:hover': {
          color: blueColor,
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
    padding: '120px 0',
    height: '100vh'
  },
  title: {
    marginBottom: '60px',
    position: 'relative',
    zIndex: 1,
    '& h2': {
      fontWeight: 700,
      position: 'relative',
      paddingBottom: '15px',
      textTransform: 'uppercase',
      '&:before, &:after': {
        content: `''`,
        position: 'absolute',
        left: 0,
        top: 'auto',
        bottom: 0,
        height: '5px',
        borderRadius: '100px'
      },
      '&:before': {
        width: '100px',
        background: 'rgba(3,127,255,.3)'
      },
      '&:after': {
        width: '35px',
        background: blueColor
      }
    },
    '& span': {
      position: 'absolute',
      left: 0,
      top: '100%',
      fontSize: '6rem',
      lineHeight: 1,
      fontWeight: 700,
      color: 'rgba(25, 29, 43, .44)',
      display: 'inline-block',
      textTransform: 'uppercase',
      zIndex: -1,
      '-webkit-transform': 'translateY(-40%)',
      transform: 'translateY(-40%)',
      '-webkit-user-select': 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap'
    }
  },
  formField: {
    marginTop: '30px',
    position: 'relative',
    '& label': {
      position: 'absolute',
      left: '15px',
      top: '-13px',
      background: '#10121b',
      '-webkit-transition': 'all .4s ease-out',
      transition: 'all .4s ease-out',
      pointerEvents: 'none',
      padding: '0 10px',
      fontSize: '.94rem'
    },
    '& input, & textarea': {
      border: '1px solid #2e344e',
      fontSize: '1rem'
    }
  },
  'button, button:before': {
    transition: 'all .4s ease-out',
    '-webkit-transition': 'all .4s ease-out',
  },
  button: {
    position: 'relative',
    padding: '0 30px',
    background: blueColor,
    color: '#fff',
    border: 0,
    display: 'inline-block',
    zIndex: 1,
    textTransform: 'uppercase',
    fontSize: '.9rem',
    letterSpacing: '2px',
    height: '50px',
    lineHeight: '50px',
    transition: 'all .4s ease-out',
    '-webkit-transition': 'all .4s ease-out',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
      '&:before': {
        transform: 'scaleX(1)',
        '-webkit-transform': 'scaleX(1)',
      }
    },
    '&:before': {
      transition: 'all .4s ease-out',
      '-webkit-transition': 'all .4s ease-out',
      content: `''`,
      position: 'absolute',
      left: 0,
      top: 'auto',
      bottom: 0,
      height: '2px',
      width: '100%',
      background: '#fff',
      zIndex: -1,
      '-webkit-transform': 'scaleX(0)',
      transform: 'scaleX(0)',
      '-webkit-transform-origin': '0 0',
      transformOrigin: '0 0'
    }
  },
  contactInfo: {
    // marginTop: '-30px'
    marginTop: '68px'
  },
  contactCard: {
    marginTop: '30px',
    background: '#191d2b',
    padding: '30px',
    display: 'flex',
    '&:hover span svg': {
      transition: 'all .4s ease-out',
      '-webkit-transition': 'all .4s ease-out',
      transform: 'scale(1.3)',
      color: '#037fff'
    }
  },
  contactIcon: {
    display: 'inline-block',
    height: '60px',
    width: '60px',
    flex: '0 0 60px',
    maxWidth: '60px',
    border: '1px solid #2e344e',
    textAlign: 'center',
    lineHeight: '76px',
    marginRight: '20px',
    '& svg': {
      transition: 'all .4s ease-out',
      '-webkit-transition': 'all .4s ease-out',
      transform: 'scale(1)',
      height: '30px',
      width: '30px'
    }
  },
  contactContent: {
    '& h6': {
      marginTop: '-5px'
    },
    '& p': {
      marginBottom: 0,
      position: 'relative',
      '& a': {
        color: '#a4acc4',
        transition: 'all .4s ease-out',
        '-webkit-transition': 'all .4s ease-out',
        '&:hover': {
          color: '#037fff'
        }
      },
      '& span.copyText': {
        cursor: 'pointer',
        color: '#a4acc4',
        transition: 'all .4s ease-out',
        '-webkit-transition': 'all .4s ease-out',
        '&:hover': {
          color: '#037fff'
        },
      }
    }
  },
  copiedToolTip: {
    visibility: 'hidden',
    opacity: 0,
    marginLeft: '5px',
    background: blueColor,
    color: '#fff',
    width: '75px',
    borderRadius: '6px',
    padding: '0px 10px',
    position: 'absolute',
    left: '110%',
    transition: 'all .4s ease-out',
    '-webkit-transition': 'all .4s ease-out',
    '&:after': {
      content: `''`,
      position: 'absolute',
      top: '50%',
      right: '100%',
      marginTop: '-7px',
      borderWidth: '7px',
      borderStyle: 'solid',
      borderColor: `transparent ${blueColor} transparent transparent`
    }
  },
  copiedTooltipVisible: {
    visibility: 'visible',
    opacity: 1
  },
  skillArea: {
    position: 'relative',
    paddingTop: '120px',
  },
  skillItem: {
    '& h6': {
      fontWeight: 600,
      marginBottom: 0,
    },
    '& .skill-progress': {
      display: 'flex',
      alignItems: 'center',
      '& .skill-percentage': {
        flex: '0  60px'
      },
      '& .skill-bar': {
        background: '#2e344e',
        display: 'block',
        height: '6px',
        width: '100%',
        position: 'relative',
        '& .skill-bar-active': {
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          background: blueColor,
          width: 0,
          transition: 'all .4s ease-out',
          '-webkit-transition': 'all .4s ease-out',
        }
      }
    }
  },
  resumeArea: {
    position: 'relative',
    padding: '120px 0',
  },
  subTitle: {
    display: 'flex',
    alignItems: 'center',
    '& .subTitle-icon': {
      verticalAlign: 'middle',
      marginRight: '10px',
      fontSize: '1.71rem',
      lineHeight: '2.43rem',
      color: fontColor
    },
    '& h4': {
      fontWeight: 700
    }
  },
  resumeWrapper: {
    borderLeft: '3px solid #2e344e',
    '& .resume-item': {
      display: 'flex',
      marginTop: '30px',
      '& .resume-date': {
        alignSelf: 'flex-start',
        flex: '0 0 180px',
        maxWidth: '180px',
        paddingLeft: '20px',
        position: 'relative',
        '&:before': {
          content: `''`,
          position: 'absolute',
          left: '-9px',
          top: '6px',
          height: '15px',
          width: '15px',
          borderRadius: '100px',
          background: '#10121b',
          border: '3px solid #2e344e'
        },
        '& .resume-date-year': {
          color : fontColor,
          marginBottom: 0
        }
      },
      '& .resume-detail': {
        position: 'relative',
        paddingLeft: '50px',
        '&:before': {
          content: `''`,
          position: 'absolute',
          left: 0,
          top: '15px',
          height: '1px',
          width: '30px',
          background: '#2e344e'
        },
        '& h5': {
          color: blueColor,
          marginBottom: 0,
          fontWeight: 700
        },
        '& .resume-detail-company': {
          color: '#fff'
        },
        '& p': {
          marginBottom: 0
        }
      },
    }
  },
  aboutArea: {
    position: 'relative',
    paddingTop: '120px',
  },
  aboutImage: {
    position: 'relative',
    '&:before, &:after': {
      content: `''`,
      position: 'absolute',
      height: '65%',
      width: '15px',
      background: 'rgba(3,127,255, .6)'
    },
    '& img': {
      width: '100%',
    },
    '&:before': {
      left: 0,
      top: 0,
    },
    '&:after': {
      left: 'auto',
      right: 0,
      top: 'auto',
      bottom: 0
    },
    '&:hover': {
      '& .about-image-zoom': {
        visibility: 'visible',
        opacity: .3,
        '-webkit-transform': 'scale(1)',
        transform: 'scale(1)'
      }
    },
    '& .about-image-zoom': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: '100px',
      width: '100px',
      marginLeft: '-50px',
      marginTop: '-50px',
      color: '#fff',
      display: 'inline-block',
      visiblity: 'hidden',
      opacity: 0,
      '-webkit-transform': 'scale(0)',
      transform: 'scale(0)',
      '-webkit-transition': 'all .4s ease-out 0s',
      transition: 'all .4s ease-out 0s',
      pointerEvents: 'none',
      '& svg': {
        height: '100%',
        width: '100%'
      }
    }
  },
  aboutContent: {
    // display: 'flex',
    // height: '100%',
    // flexWrap: 'wrap',
    // alignContent: 'space-between',
    '& h3': {
      fontWeight: 600,
      marginTop: '-8px'
    },
    '& ul li': {
      listStyle: 'none',
      display: 'flex',
      '&:not(:last-child)': {
        marginBottom: '3px'
      },
      '& b': {
        minWidth: '120px',
        display: 'inline-block',
        position: 'relative',
        marginRight: '7px',
        '&:after': {
          content: `':'`,
          position: 'absolute',
          top: 0,
          left: 'auto',
          right: 0
        }
      }
    },
    '& a': {
      marginTop: '15px',

    }
  },
  servicesArea: {
    position: 'relative',
    padding: '120px 0',
  },
  serviceItem: {
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    padding: '30px',
    background: '#191d2b',
    '-webkit-transition': 'all .4s ease-out',
    transition: 'all .4s ease-out',
    '&:hover': {
      borderTopColor: blueColor
    },
    '& .service-icon': {
      marginBottom: '18px',
      display: 'inline-block',
      color: blueColor,
      fontSize: '2.5rem',
      '& svg': {
        fontSize: '50px'
      }
    },
    '& h5': {
      fontWeight: 600,
      position: 'relative',
      paddingBottom: '15px',
      marginBottom: '15px',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 'auto',
        bottom: 0,
        height: '2px',
        width: '50px',
        background: '#2e344e'
      }
    },
    '& p': {
      marginBottom: 0
    }
  },
  reviewArea: {
    position: 'relative',
    // paddingTop: '120px',
    paddingBottom: '120px',
  },
  reviewItem: {
    '& .review-item-content': {
      minHeight: '150px',
      display: 'flex',
      alignItems: 'center',
      padding: '30px',
      marginBottom: '35px',
      position: 'relative',
      borderLeft: '5px solid #2e344e',
      background: '#191d2b',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '30px',
        top: '100%',
        borderColor: '#191d2b transparent transparent #191d2b',
        borderStyle: 'solid',
        borderWidth: '12px',
      },
      '& p': {
        marginBottom: 0,
        fontSize: '1.2rem'
      }
    },
    '& .review-item-author': {
      '& h5': {
        marginBottom: 0
      },
      '& h6': {
        marginBottom: 0,
        color: fontColor
      }
    },
  }
})