import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

class Contador extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            stop: false,
            btnStop: "Pausar",
            parcial: "",
            relogio1: "",
            relogio2: "",
            relogio3: ""
        }

    }

    incrementar(){
        this.setState (
            (state) => {
                if(this.state.stop===false){
                if(state.segundos >= 59){
                    this.zerar()
                    this.incrementarMin()
                }
                return({segundos: state.segundos + 1})
            }
            }
        )
    }

    zerar(){
        this.setState({segundos: 0})
    }

    incrementarMin(){
        this.setState({minutos: this.state.minutos +1})
    }

    componentDidMount(){
        this.timer = setInterval( () => this.incrementar(),1000)
        this.relogio = setInterval( () => this.relogioupdate(),1000)
    }

    zerarCronometro(){
        this.setState({
            segundos: 0,
            minutos: 0
        })
    }

    pausarCronometro(){
        this.setState({
            stop: !this.state.stop
        })
        if(this.state.stop)
        this.setState({
            btnStop: "Pausar"
        })
         else 
            this.setState({
                btnStop: "Continuar"
            })
    }

        relogioupdate() {
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("Brazil/Brasilia").format('HH:mm:ss').toString()
        this.setState({relogio1: "Brasil - Brasília: "+localTime}) 
        
        localTime = moment( ).tz("America/Los_Angeles").format('HH:mm:ss').toString()
        this.setState({relogio2: "América - Los Angeles: "+localTime})

        localTime = moment( ).tz("Australia/Sydney").format('HH:mm:ss').toString()
        this.setState({relogio3: "Austrália - Sydney: "+localTime})
        }

    gerarParcial(){
        let p = this.state.minutos + ":" + this.state.segundos
        this.setState({
            parcial: this.state.parcial + " || " +p
        })
    }


    render(){
        return (
            <div>
            <h1>{this.state.minutos}:{this.state.segundos}</h1>
            <Botao onClick={()=> this.zerarCronometro()} label="Zerar" />
            <Botao onClick={()=> this.pausarCronometro()} label={this.state.btnStop} />
            <Botao onClick={()=> this.gerarParcial()} label="Parcial" />
            <LabelCronometro name={this.state.parcial}/>
            <h1>{this.state.relogio1}</h1>
            <h1>{this.state.relogio2}</h1>
            <h1>{this.state.relogio3}</h1>
            </div>
            
        )
    }
}

export default Contador