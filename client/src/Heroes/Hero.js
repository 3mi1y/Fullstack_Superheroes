import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    border: '1px solid #cecece',
    width: 'calc(25% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5px',
    marginRight: '5px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    paddingBottom: '10px'
  },
  image: {
    maxWidth: '100%',
    height: 'auto'
  },
  title: {
    fontFamily: 'Pacifico',
    fontSize: '20px',
    color: 'rgba(158, 10, 173, .5)'
  },
  caption: {
    fontFamily: 'Arial',
    fontSize: '13px',
    paddingLeft: '5px'
  },
  userName: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%'
  },
  button: {
    width: '45%',
    backgroundColor: '#ffffff',
    border: '1px solid #cecece',
    color: 'rgb(117, 117, 117)',
    padding: '15px',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: '15px',
    marginTop: '3%'
  }
}

const Hero = ({hero, deleteHero, showUniqueHero}) => {
  return (
    <div>
      <img src={hero.img} style={styles.image} />
      <p style={styles.caption} >{hero.name}</p>
      <button onClick={() => deleteHero(hero)}>Delete Hero</button>
      <button onClick={() => showUniqueHero(hero)}>Show Additional Info</button>
      <Link to={`/hero/${hero._id}`}> View Hero </Link>
      <Link to={`/edit-hero/${hero._id}`}> Edit Hero </Link>
    </div>
  )
}

export default Hero
