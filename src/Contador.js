import React from 'react'
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import Button from 'react-bootstrap/Button';

class Contador extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            stop: false,
            btnStop: "Pausar",
            parcial: ""
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

    gerarParcial(){
        let p = this.state.minutos + ":" + this.state.segundos
        this.setState({
            parcial: this.state.parcial + " || " +p
        })
    }


    render(){
        return (
            <div class='mx-auto'>
            <h1 class= 'mx-auto'>{this.state.minutos}:{this.state.segundos}</h1>
            <Botao class='p-2'variant="dark" onClick={()=> this.zerarCronometro()} label="Zerar" />
            <Botao variant="dark" onClick={()=> this.pausarCronometro()} label={this.state.btnStop} />
            <Botao variant="dark" onClick={()=> this.gerarParcial()} label="Parcial" />
            <LabelCronometro name={this.state.parcial}/>
            </div>
            
        )
    }
}

export default Contador