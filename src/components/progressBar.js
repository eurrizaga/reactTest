import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';
class ProgressBar extends Component{
	constructor(props){
        super(props);
        this.state = props;
    }
    static propTypes = {
        percentage: PropTypes.number
    }
	componentDidUpdate(newProps){
        if (newProps.percentage > this.state.percentage){
            this.setState({
                percentage: newProps.percentage
            })
        }
        
    }  
    render(){
        return(
        <div className="progressBar">
            <div className='bg-bar'></div>
            <div style={{'width': this.state.percentage + '%'}} className='progress'></div>
        </div>);
    }
}

export default ProgressBar;