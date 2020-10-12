import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            isOn: false,
            status: "Parado",
            label: "Start"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    decrementar(){
        this.setState (
            (state) => {
                if(this.state.isOn===true){
                if(state.segundos <= 0 && state.minutos>0){
                    this.segreset()
                    this.decrementarMin()
                } else if(state.segundos <= 1 && state.minutos === 0){
                    this.toggle()
                    return({segundos: 0})
                }
                return({segundos: state.segundos - 1})
            }
            }
        )
    }

    segreset(){
        this.setState({segundos: 59})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    toggle(){
        if(this.state.isOn===true) {
        this.setState({isOn: false,status: "Parado",label:"Start"})
        }
        else {
        this.setState({isOn: true,status: "Funcionando",label:"Stop"})
        
        }
    }
    decrementarMin(){
        this.setState({minutos: this.state.minutos -1})
    }

    componentDidMount(){
        this.timer = setInterval( () => this.decrementar(),1000)
    }

    render(){
        const { isOn }= this.state;
        return (
            <div>
            <h1>{this.state.minutos}:{this.state.segundos}</h1>
            <LabelCronometro name={this.state.status}/>
            <Botao onClick={()=> this.toggle()} label={this.state.label}></Botao>
            { isOn
            ? null
            : <div id="form">
            <form>
        <label>
          Minutos:
          <input
            id="min"
            name="minutos"
            type="number"
            value={this.state.minutos}
            onChange={this.handleInputChange} 
            min="0"/>
        </label>
        <br />
        <label>
          Segundos:
          <input
            id="seg"
            name="segundos"
            type="number"
            value={this.state.segundos}
            onChange={this.handleInputChange} 
            min="0"
            max="59"/>
        </label>
        
      </form>
      </div>
    }
            </div>
            
        )
    }

}

export default Timer