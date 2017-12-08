import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import Heroes from './Heroes'
import Navigation from './Navigation'
import Header from './Header'
import CreateHeroContainer from './CreateHeroContainer'
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
    name: undefined,
    superpower: undefined,
    universe: undefined,
    img: undefined,
    nemesis: undefined
  }

  componentDidMount () {
    this.loadSuperHeroesFromServer()
  }

  loadSuperHeroesFromServer = () => {
    $.ajax({
      url: '/api/superheroes',
      method: 'GET'
    }).done(response => {
      this.setState({ heroes: response.data })
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
          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
              : 'No heroes yet'
          }
        </div>
      </Router>
    )
  }
}
export default App
