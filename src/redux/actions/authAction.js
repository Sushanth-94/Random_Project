import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';

//register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('https://park-easy-test.herokuapp.com/register',userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    );
}

//login user
export const loginUser = (userData) => dispatch => {
    axios
      .post('https://park-easy-test.herokuapp.com/register', userData)
      .then(res => {
        //save to local storage
        const {token} = res.data;
        //set token to ls
        localStorage.setItem('jwtToken', token);
        //set token to Auth Header
        setAuthToken(token);
        //decode token
        const decoded = jwt_decode(token);
        //set current user
        dispatch({
          type: 'SET_CURRENT_USER',
          payload : decoded
        })
      })
     .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      }));
}

//logout user
export const logoutUser = () => dispatch => {
  //remove token
  localStorage.removeItem('jwtToken');
  // auth header
  setAuthToken(false);
  // set current user to empty object
  dispatch({
    type: 'SET_CURRENT_USER',
    payload: {}
  })
}
