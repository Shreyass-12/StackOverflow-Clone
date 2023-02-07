import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode'
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  useEffect(() => {                                       //LOGGING IN also we will check expiry of token
    const token = User?.token
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) {    //if expiry time is less than currrent time   
        handleLogout()                                       // which means after 1 hr i will logout ...this is all about token based authentication
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  return (

    <nav className="main-nav">
      <div className='Navbar'>
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...' />
          <img src={search} alt="search" className="search-icon" style={{ height: "14px" }} />
        </form>
        {User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
          <>
            <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to='/User' style={{ color: "white", textDecoration: "none" }}></Link>{User.result.name.charAt(0).toUpperCase()}</Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav>

  )
}

export default Navbar
