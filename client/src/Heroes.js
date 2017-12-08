import React from 'react'
import Hero from './Hero'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '0px',
    margin: '10px'
  }
}

const Heroes = ({heroes}) => 
  <div style={styles.container}>
    {
      heroes.map(hero => {
        return <Hero hero={hero} />
      })
    }
  </div>



export default Heroes 
