import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 5,
            minutos: 1,
            isOn: false,
            status: "Parado",
            label: "Start"
        }
    }

    decrementar(){
        this.setState (
            (state) => {
                if(this.state.isOn===true){
                if(state.segundos === 0 && state.minutos>0){
                    this.segreset()
                    this.decrementarMin()
                } else if(state.segundos === 1 && state.minutos === 0){
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
    toggle(){
        if(this.state.isOn===true)
        this.setState({isOn: false,status: "Parado",label:"Start"})
        else
        this.setState({isOn: true,status: "Funcionando",label:"Stop"})
    }
    decrementarMin(){
        this.setState({minutos: this.state.minutos -1})
    }

    componentDidMount(){
        this.timer = setInterval( () => this.decrementar(),1000)
    }

    render(){
        return (
            <div>
            <h1>{this.state.minutos}:{this.state.segundos}</h1>
            <LabelCronometro name={this.state.status}/>
            <Botao onClick={()=> this.toggle()} label={this.state.label}></Botao>
            </div>
            
        )
    }

}

export default Timer