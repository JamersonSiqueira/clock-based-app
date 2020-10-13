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
            minultimo: "",
            segultimo: "",
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
            minutos: 0,
            parcial: "",
            minultimo:"",
            segultimo:""
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
        let difmin = this.state.minutos - this.state.minultimo
        let difseg = this.state.segundos - this.state.segultimo
        this.setState({
            minultimo: this.state.minutos,
            segultimo: this.state.segundos,
            parcial: this.state.parcial +"\n"+p+" || Diferença: "+difmin+":"+difseg
        })
    }


    render(){
        return (
            <div>
                <div class="row d-flex justify-content-center">
            <h1 class= 'mx-auto display-4'>{this.state.minutos}:{this.state.segundos}</h1>
            </div>
            <div class="row d-flex justify-content-center">
            <Botao class='p-2'variant="dark" onClick={()=> this.zerarCronometro()} label="Zerar" />
            <Botao variant="dark" onClick={()=> this.pausarCronometro()} label={this.state.btnStop} />
            <Botao variant="dark" onClick={()=> this.gerarParcial()} label="Parcial" />
            </div>
            <div class="parcial">
            <LabelCronometro name={this.state.parcial}/>
            </div>
            </div>
            
        )
    }
}

export default Contador