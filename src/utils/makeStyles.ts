import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  link: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
    color: '#1769AA',
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
    marginTop: theme.spacing(6),
    width: '144px',
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(4),
  },
}));
