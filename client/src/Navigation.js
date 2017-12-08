import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  navBox: {
    backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  linkItem: {
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    fontFamily: 'Josefin Sans'
  }
}

const Navigation = () =>
  <nav style={styles.navBox}>
    <Link to='/' style={styles.linkItem} >Home</Link>
    <Link to='/heroes' style={styles.linkItem} >Heroes</Link>
    <Link to='/create-hero' style={styles.linkItem} >Create a New Hero</Link>
  </nav>

export default Navigation
