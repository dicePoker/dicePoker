import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  link: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    color: '#000000',
  },

  button: {
    margin: 'auto',
    marginTop: theme.spacing(6),
    width: '144px',
    color: '#fff',
    backgroundColor: '#2196F3',
    textTransform: 'uppercase',
  },

  buttonSignUp: {
    margin: 'auto',
    marginTop: theme.spacing(1),
    width: '144px',
    backgroundColor: '#E3F2FD',
    color: '#2196F3',
  },

  buttonSignUpForm: {
    margin: 'auto',
    marginTop: '44px',
    width: '144px',
    backgroundColor: '#5E2604',
    '&:hover': {
      backgroundColor: '#62402B',
    },
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 'auto',
    marginBottom: theme.spacing(4),
  },

  formSignIn: {
    width: '100%',
  },
  buttonSignInEntrance: {
    width: '144px',
    backgroundColor: '#5E2604',
    marginTop: '44px',
    margin: 'auto',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#62402B',
    },
  },

  buttonSignInCreate: {
    width: '144px',
    backgroundColor: '#704829',
    marginTop: '14px',
    margin: 'auto',
    '&:hover': {
      backgroundColor: '#472D1D',
    },
  },
  input: {
    '&:focus': {
      borderColor: '#9B6F37',
    },
  },
}));
