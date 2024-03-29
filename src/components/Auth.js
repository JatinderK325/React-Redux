import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice'; 

const Auth = () => {
  // executing useDispatch() to get access to the dispatch function leads to our redux state being changed.
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    // use dispatch function to dispatch an action.
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
