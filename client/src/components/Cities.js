import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Cities extends Component {
  state = {
      cities: [],
      newCity: {
          name: '',
          description: ''
      },
      isCityFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/API/cityApi').then(res => {
        this.setState({cities: res.data})
    })
  }

  toggleCityForm = () => {
      this.setState((state, props) => {
          return ({isCityFormDisplayed: !state.isCityFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewCity = {...this.state.newCity}
    cloneNewCity[e.target.name] = e.target.value
    this.setState({newCity: cloneNewCity})
  }

  createCity = (e) => {
    e.preventDefault()
    axios
        .post('/API/cityApi', {
            name: this.state.newCity.name,
            description: this.state.newCity.description
        })
        .then(res => {
            const citiesList = [...this.state.cities]
            citiesList.unshift(res.data)
            this.setState({
                newCity: {
                    name: '',
                    description: ''
                },
                isCityFormDisplayed: false,
                cities: citiesList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Cities</h1>
        {
            this.state.cities.map(city => {
                return (
                    <div key={city._id}>
                        <Link
                            to={`/${city._id}`}
                        >
                            {city.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleCityForm}>+ New City</button>
        {
            this.state.isCityFormDisplayed
                ? <form onSubmit={this.createCity}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newCity.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newCity.description}
                        />
                    </div>
                    <button>Create</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Cities