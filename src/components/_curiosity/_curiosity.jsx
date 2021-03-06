import React, { Component } from 'react';
import './_curiosity.css';

class Curiosities extends Component {
    state = { 
        actualBlock: 0,
        isAnimating: true,
        helpBlock: 0,
        timer: 12000
    }
    componentDidMount(){
        setTimeout(this.changeAfterTime, this.state.timer);
        setTimeout(this.changeTimer, 1000);
    }
    changeAfterTime = () => {
        this.setState({isAnimating: false, helpBlock: this.state.helpBlock === this.props.curiosities.length-1 ? 
        0 : this.state.helpBlock+1});
        setTimeout(this.changeActualBlock, 1000); 
        setTimeout(this.changeAfterTime, 12000);
    }
    changeActualBlock = () => {
        this.setState({isAnimating: true, actualBlock: this.state.helpBlock});
    }
    handleClick = (id) => {
        this.setState({isAnimating: false, helpBlock: id, timer: 12000});
        setTimeout(this.changeActualBlock, 1000); 
    }
    
    changeTimer = () => {
        this.setState({timer: this.state.timer+1000});
        setTimeout(this.changeTimer, 1000);
    }

    componentWillUnmount(){
        let id = window.setTimeout(null,0);
        while (id--) 
        {
            window.clearTimeout(id);
        }
    }
    render() { 
        return (
            <div className="curosities-container">
                <h1>Czy wiesz, że...</h1>
                <div id={this.state.actualBlock} className={!this.state.isAnimating ? 
                "curiositiy-content hidden-block" : "curiositiy-content visible-block"}>
                    {this.props.curiosities[this.state.actualBlock].content}
                </div>
                <nav>
                    {this.props.curiosities.map(c => {
                        return <i style={{color: this.state.actualBlock === c.id ? "orange" : "white"}}
                        onClick={() => this.handleClick(c.id)} key={c.id} className="fa fa-circle"></i>;
                    })}
                </nav>
            </div>
        )
    }
}
 
export default Curiosities;