import React from 'react'
import Villain from './Villain'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '0px',
    margin: '10px'
  }
}

const Villains = ({villains, deleteVillain, showUniqueVillain}) => {
  return (
    <div style={styles.container} >
      {
        villains.map(villain => {
          return <Villain
            villain={villain}
            deleteVillain={deleteVillain}
            showUniqueVillain={showUniqueVillain}
          />
        })
      }
    </div>
  )
}

Villains.propTypes = {
  villains: PropTypes.array.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}

export default Villains
