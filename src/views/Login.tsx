import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../components/Controls/Input";
import MessageError from "../components/Controls/MessageError";
import { PostLogin } from '../api/login';
import { useLocation } from 'wouter';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const methods = useForm();
  const [location, setLocation] = useLocation();
  const { handleSubmit, errors } = methods;
  const onSubmit = async (data: any) => {
    try {
      const res = await PostLogin(data);
      if (res && res.ok) {
        const body = await res.json();
        if (body && body.code === 200) {
          localStorage.setItem('token', body.data.token);
          setLocation('/home');
        }
        console.log('body', body)
      }
    } catch {}
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormProvider {...methods}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email"
                }
              }}
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <MessageError errors={errors} type="email"/>
            <FormInput
              rules={{required: true}}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <MessageError errors={errors} type="password"/>
            
            <br/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
}