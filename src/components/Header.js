import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice'; 

const Header = () => {
  // executing useDispatch() to get access to the dispatch function.
  const dispatch = useDispatch();
  // getting access to data with the help of 'useSelector' function in order to conditionally rendering nav bar on the screen.
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    // use dispatch function to dispatch an action.
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
