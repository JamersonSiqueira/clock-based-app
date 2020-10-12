import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'

class Relogio extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            relogio1: "",
            relogio2: "",
            relogio3: ""
        }

    }
    componentDidMount(){
        this.relogio = setInterval( () => this.relogioupdate(),1000)
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
            <h1>{this.state.relogio1}</h1>
            <h1>{this.state.relogio2}</h1>
            <h1>{this.state.relogio3}</h1>
            </div>
            
        )
    }
}

export default Relogio