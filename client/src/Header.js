import React from 'react'

const styles = {
  container: {
    backgroundImage: 'url(http://sociologyinfocus.com/wp-content/uploads/2017/05/Superheros-compressor.jpeg)',
    height: '400px',
    margin: '0px',
    marginTop: '0px',
    zIndex: '1',
    width: '100%',
    paddingTop: '0px 0px 0px 0px'
  }
}

const Header = () => {
  return (
    <div style={styles.container} />
  )
}

export default Header
