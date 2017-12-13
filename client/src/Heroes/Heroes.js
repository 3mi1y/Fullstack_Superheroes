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

const Heroes = ({heroes, deleteHero, showUniqueHero}) =>
  <div style={styles.container}>
    {
      heroes.map(hero => {
        return <Hero
          hero={hero}
          deleteHero={deleteHero}
          showUniqueHero={showUniqueHero}
        />
      })
    }
  </div>

export default Heroes
