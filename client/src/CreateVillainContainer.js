import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: '20px'
  },
  inputElement: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    padding: '3%',
    margin: '1%',
    width: '100%',
    border: '1px solid #cecece',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  button: {
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

class CreateVillainContainer extends Component {
  state = {
    name: undefined,
    universe: undefined,
    nemasis: undefined,
    image: undefined,
    superPower: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value })
  onUniverseChange = (e) => this.setState({ universe: e.target.value })
  onNemesisChange = (e) => this.setState({ nemasis: e.target.value })
  onImageChange = (e) => this.setState({ image: e.target.value })
  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  addVillain = (e) => {
    e.preventDefault()
    const newVillain = {
      name: this.state.name,
      superPower: this.state.superPower,
      universe: this.state.universe,
      nemasis: this.state.nemasis,
      img: this.state.image
    }

    $.ajax({
      url: '/api/villains',
      method: 'POST',
      data: newVillain
    }).done(response => {
      console.log(response)
      this.props.history.push('/villains')
    })
  }

  render () {
    return (
      <form style={styles.container} >
        <input type='text' style={styles.inputElement} placeholder='Whats your Villains name?' onChange={this.onNameChange} />
        <input type='text' style={styles.inputElement} placeholder='Whats your Villains power?' onChange={this.onSuperPowerChange} />
        <input type='text' style={styles.inputElement} placeholder='What Universe is your Villain from?' onChange={this.onUniverseChange} />
        <input type='text' style={styles.inputElement} placeholder='Who is your Villains nemasis' onChange={this.onNemesisChange} />
        <input type='text' style={styles.inputElement} placeholder='Image URL for your villain???' onChange={this.onImageChange} />
        <button onClick={this.addVillain} style={styles.button}>Add Villain</button>
      </form>
    )
  }
}

export default withRouter(CreateVillainContainer)
