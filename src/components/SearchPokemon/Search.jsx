import { Component } from 'react'

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
          name: '',
          img: ''
        }
    }
 
    traerDatos = async () => {
      let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
      let data = await respuesta.json();
      //console.log(data);

     this.setState({
        img: data.sprites.front_default
      })
    }

    handleName = (event) => {
      let aux = event.target.value.toLowerCase();
      console.log(event.target.value.toLowerCase());

      this.setState({
          name: aux
      })
    }

    handleSubmit = (event) => {
      let name = this.state.name;
      console.log(name);
      event.preventDefault();
      this.traerDatos();
    }

  render() {
   // console.log(this.state.name);
    if(this.state.img === ''){
    return (
      <div  className='card mt-4' style={{'background-color': '#ffcb05', 'box-shadow': '10px 10px 5px black'}}>
            <div className='card-header ' style={{'text-shadow': '3px 3px 3px black', "font-size":'2rem'}} >
              Busca tu pokemon
            </div>
            <div className='card-body'>
                <form>
                <label className='text-black'>Ingresa nombre de tu pokemon: </label><br />
                <input type="text" 
                placeholder='Nombre pokemon'
                className='form-control'
                onChange={this.handleName}
                /> <br />
                <button className='btn btn-primary' 
                type='submit' 
                onClick={this.handleSubmit}>Buscar</button>
                </form>
            </div>
      </div>

    )}else {
      return(
      <div className='card mt-4' style={{width: '18rem','background-color': '#ffcb05', 'box-shadow': '10px 10px black'}}>
            <div className='card-header' >
              {this.state.name}
            </div>
            <div className='card-body'>
              <img src={this.state.img} alt={this.state.name} style={{width: '10rem'}}></img>
              <br />
              <button className='btn btn-primary' onClick={() => {this.setState({ name: '', img: ''})}}> Regresar </button>
            </div>
       </div>
      )}

  }
}
