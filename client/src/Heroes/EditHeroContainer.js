import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import EditHeroForm from './EditHeroForm'

class HeroContainer extends Component {
  componentDidMount () {
    let heroId = this.props.match.params.heroId
    this.loadHeroFromServer(heroId)
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    loadSuperHeroesFromServer: PropTypes.func.isRequired
  }

  state = {
    name: undefined,
    universe: undefined,
    nemesis: undefined,
    img: undefined,
    superPower: undefined,
    heroLoaded: false
  }

  onNameChange = (e) => this.setState({ name: e.target.value })
  onUniverseChange = (e) => this.setState({ universe: e.target.value })
  onNemesisChange = (e) => this.setState({ nemesis: e.target.value })
  onImageChange = (e) => this.setState({ img: e.target.value })
  onSuperPowerChange = (e) => this.setState({ superPower: e.target.value })

  submitHeroEdit = (e) => {
    e.preventDefault()
    const editedSuperHero = {
      name: this.state.name,
      superPower: this.state.superPower,
      universe: this.state.universe,
      nemesis: this.state.nemesis,
      img: this.state.img
    }
    $.ajax({
      url: `/api/superheroes/${this.props.match.params.heroId}`,
      method: 'PUT',
      data: editedSuperHero
    }).done(response => {
      this.props.loadSuperHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }
  loadHeroFromServer = (id) => {
    $.ajax({
      url: `/api/superheroes/${id}`,
      method: 'GET'
    }).done(response => {
      this.setState({
        name: response.data.name,
        universe: response.data.universe,
        nemesis: response.data.nemesis,
        img: response.data.img,
        superPower: response.data.superPower,
        heroLoaded: true
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.heroLoaded
            ? <EditHeroForm
              name={this.state.name}
              universe={this.state.universe}
              nemesis={this.state.nemesis}
              img={this.state.img}
              superPower={this.state.superPower}
              onNameChange={this.onNameChange}
              onUniverseChange={this.onUniverseChange}
              onNemesisChange={this.onNemesisChange}
              onImageChange={this.onImageChange}
              onSuperPowerChange={this.onSuperPowerChange}
              submitHeroEdit={this.submitHeroEdit}
            /> : <h1> Loading Hero </h1>
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)
