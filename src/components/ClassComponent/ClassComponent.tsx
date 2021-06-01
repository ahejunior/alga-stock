import React from 'react'

class ClassComponent extends React.Component <{nameXpto : string}> {

    constructor(props: any) {
        super(props)
        console.log('constructor reached')
      }
      
    state = {
        name: 'Mundo'
    }

    componentDidMount() {
        console.log('did mount reached')
      }
    
      componentDidUpdate() {
        console.log('did update reached')
      }

    render(){
        console.log('render reached')
        return <div>
            Ola, {this.props.nameXpto}, com react em seu {this.state.name}! 
            Eu sou um componente baseado em classe<br/>
            <button onClick={()=>{
                this.setState({name: 'Mundo Novo'})
            }}>Alterar</button>
        </div>
    }
}

export default ClassComponent