import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import Heroes from './Heroes'
import Villains from './Villains'
import Navigation from './Navigation'
import Header from './Header'
import CreateHeroContainer from './CreateHeroContainer'
import CreateVillainContainer from './CreateVillainContainer'
// import HeroesContainer from './HeroesContainer'
import $ from 'jquery'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class App extends Component {
  state = {
    heroes: undefined,
    villains: undefined
  }

  componentDidMount () {
    this.loadSuperHeroesFromServer()
    this.loadVillainsFromServer()
  }

  loadSuperHeroesFromServer = () => {
    $.ajax({
      url: '/api/superheroes',
      method: 'GET'
    }).done(response => {
      this.setState({ heroes: response.data })
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains',
      method: 'GET'
    }).done(response => {
      this.setState({ villains: response.data })
    })
  }

  deleteHero = (hero) => {
    console.log(`Post id ${hero._id}`)
    $.ajax({
      url: `/api/superheroes/${hero._id}`,
      method: 'DELETE'
    }).done(response => {
      console.log(response)
      this.loadSuperHeroesFromServer()
    })
  }

  deleteVillain = (villain) => {
    console.log(`Post id ${villain._id}`)
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done(response => {
      console.log(response)
      this.loadVillainsFromServer()
    })
  }

  showUniqueHero = (hero) => {
    $.ajax({
      url: `/api/superheroes/${hero._id}`,
      method: 'GET'
    }).done(response => {
      console.log(response)
      alert(`${response.data.name}`)
      // this.props.history.push(`/heroes/${hero._id}`)
    })
  }

  render () {
    return (
      <Router>
        <div style={styles.container} >
          <Navigation />
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/create-hero' render={() => <CreateHeroContainer />} />
          <Route path='/create-villain' render={() => <CreateVillainContainer />} />
          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
              : 'No heroes yet'
          }
          {
            this.state.villains
              ? <Route path='/villains' render={() => <Villains deleteVillain={this.deleteVillain} villains={this.state.villains} />} />
              : 'No villains yet'
          }
        </div>
      </Router>
    )
  }
}
export default App
