import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import $ from 'jquery'

class HeroContainer extends Component {
  state = {
    hero: undefined
  }
  componentDidMount () {
    let heroId = this.props.match.params.heroId
    this.loadHeroFromServer(heroId)
  }
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  loadHeroFromServer = (id) => {
    $.ajax({
      url: `/api/superheroes/${id}`,
      method: 'GET'
    }).done(response => {
      this.setState({hero: response.data})
    })
  }

  render () {
    return (
      <div>
        {
          this.state.hero
            ? (
              <div>
                <Link to={'/heroes'}> Back </Link>
                <h1> { this.state.hero.name } </h1>
              </div>
            ) : <h1> Loading Hero </h1>
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)
