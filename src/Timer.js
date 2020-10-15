import React from 'react'
import Botao from './Botao'
import {Toast} from 'react-bootstrap';
import Sound from './Sound'

class Timer extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            isOn: false,
            status: "Parado",
            label: "Iniciar",
            tocar: false
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
                      this.ligarsom()
                    return({segundos: 0})
                }
                return({segundos: state.segundos - 1})
            }
            }
        )
    }

    desligarsom(){
        this.setState({
            tocar: false
        })
    }
    ligarsom(){
        this.setState({
            tocar: true
        })
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
        this.setState({isOn: false,status: "Parado",label:"Iniciar"})
        }
        else {
            this.desligarsom()
        this.setState({isOn: true,status: "Funcionando",label:"Parar"})
        
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
        const { tocar }= this.state;
        return (
            <div>
                <div class="col d-flex justify-content-center">
            <h1 class="display-4">{this.state.minutos}:{this.state.segundos}</h1>
            </div>
            { isOn
            ? null
            : 
            
            <div id="form mx-auto">
                <Toast class="mb-4">
                <Toast.Header>
                <strong className="mr-auto">Configurações</strong>
                <small>Timer</small>
            </Toast.Header>
            <Toast.Body>
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
                </Toast.Body>
</Toast>
            
      </div>
    }
    <div class="col d-flex justify-content-center">
    <Botao class="mt-2 mb-2 " variant="dark" onClick={()=> this.toggle()} label={this.state.label}></Botao>
    </div>
    { tocar
        ? <Sound />
        : null
    }
            </div>
            
        )
    }

}

export default Timer