import { Component } from 'react'

export default class Navbar extends Component {

    constructor(props){
      super(props)

      this.state = {
        title: 'Pokedex'
      }
    }

  render() {
    return (
      <div className='container'>
        <nav className="navbar" style={{'background-color': '#ffcb05', 'box-shadow': '10px 10px 5px black', 'border-radius': '0px 0px 10px 10px'}}>
         <div className="container-fluid">
            <h1 className="navbar-brand" href="/">{this.props.name}</h1>
         </div>
        </nav>
      </div>
    )
  }
}

