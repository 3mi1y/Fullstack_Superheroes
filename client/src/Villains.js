import React from 'react'
import Villain from './Villain'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '0px',
    margin: '10px'
  }
}

const Villains = ({villains, deleteVillain}) => {
  return (
    <div style={styles.container} >
      {
        villains.map(villain => {
          return <Villain villain={villain} deleteVillain={deleteVillain} />
        })
      }
    </div>
  )
}

export default Villains
