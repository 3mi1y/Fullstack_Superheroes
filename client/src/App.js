import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import $ from 'jquery'

import Home from './Home'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import HeroContainer from './Heroes/HeroContainer'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import Heroes from './Heroes/Heroes'
import Villains from './Villains/Villains'
import Navigation from './Components/Navigation'
import Header from './Components/Header'

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
    villains: undefined,
    hero: undefined
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
      const hero = response.data
      alert(`${hero.name}, Superpower: ${hero.superPower}, Nememsis: ${hero.nemesis}`)
    })
  }

  showUniqueVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'GET'
    }).done(response => {
      console.log(response)
      const villain = response.data
      alert(`${villain.name}, Nemesis: ${villain.nemesis}`)
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
              ? <Route exact path='/heroes' render={() => <Heroes showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
              : 'No heroes yet'
          }
          <Route exact path='/heroes/:heroId' render={() => <HeroContainer loadHeroFromServer={this.loadHeroFromServer} hero={this.state.hero} />} />
          {
            this.state.villains
              ? <Route path='/villains' render={() => <Villains showUniqueVillain={this.showUniqueVillain} deleteVillain={this.deleteVillain} villains={this.state.villains} />} />
              : 'No villains yet'
          }
        </div>
      </Router>
    )
  }
}
export default App
