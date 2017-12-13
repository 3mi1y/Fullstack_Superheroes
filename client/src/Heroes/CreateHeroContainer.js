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

class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    universe: undefined,
    nemesis: undefined,
    image: undefined,
    superPower: undefined
  }

  onNameChange = (e) => this.setState({ name: e.target.value })
  onUniverseChange = (e) => this.setState({ universe: e.target.value })
  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })
  onImageChange = (e) => this.setState({ image: e.target.value })
  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  addSuperHero = (e) => {
    e.preventDefault()
    const newSuperHero = {
      name: this.state.name,
      superPower: this.state.superPower,
      universe: this.state.universe,
      nemesis: this.state.nemesis,
      img: this.state.image
    }
    $.ajax({
      url: '/api/superheroes',
      method: 'POST',
      data: newSuperHero
    }).done(response => {
      console.log(response)
      this.props.history.push('/heroes')
    })
  }

  render () {
    return (
      <form style={styles.container} >
        <input type='text' style={styles.inputElement} placeholder='Whats your SuperHeroes name?' onChange={this.onNameChange} />
        <input type='text' style={styles.inputElement} placeholder='Whats your SuperHeroes power?' onChange={this.onSuperPowerChange} />
        <input type='text' style={styles.inputElement} placeholder='What Universe is your SuperHero from?' onChange={this.onUniverseChange} />
        <input type='text' style={styles.inputElement} placeholder='Who is your SuperHeroes nemasis' onChange={this.onNemesisChange} />
        <input type='text' style={styles.inputElement} placeholder='Image URL for your superhero???' onChange={this.onImageChange} />
        <button onClick={this.addSuperHero} style={styles.button}>Add SuperHero</button>
      </form>
    )
  }
}

export default withRouter(CreateHeroContainer)
