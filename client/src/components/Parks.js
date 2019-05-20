import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Parks extends Component {
  state = {
      parks: [],
      newPark: {
          name: '',
          bio: '',
          side: ''
      },
      isParkFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/parks').then(res => {
        this.setState({parks: res.data})
    })
  }

  toggleParkForm = () => {
      this.setState((state, props) => {
          return ({isParkFormDisplayed: !state.isParkFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewPark = {...this.state.newPark}
    cloneNewPark[e.target.name] = e.target.value
    this.setState({newPark: cloneNewPark})
  }

  createPark = (e) => {
    e.preventDefault()
    axios
        .post('/parks', {
            name: this.state.newPark.name,
            description: this.state.newPark.description
        })
        .then(res => {
            const parksList = [...this.state.parks]
            parksList.unshift(res.data)
            this.setState({
                newPark: {
                    name: '',
                    bio: '',
                    side: ""
                },
                isParkFormDisplayed: false,
                parks: parksList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Parks</h1>
        {
            this.state.parks.map(park => {
                return (
                    <div key={park._id}>
                        <Link
                            to={`/${park._id}`}
                        >
                            {park.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleParkForm}>+ New Park</button>
        {
            this.state.isParkFormDisplayed
                ? <form onSubmit={this.createPark}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newPark.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            id="bio"
                            type="text"
                            name="bio"
                            onChange={this.handleChange}
                            value={this.state.newPark.description}
                        />
                    </div>
                    <div>
                        <label htmlFor="side">Neighborhood</label>
                        <textarea
                            id="side"
                            type="text"
                            name="side"
                            onChange={this.handleChange}
                            value={this.state.newPark.description}
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

export default Parks