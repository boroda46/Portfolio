import React, { Component } from 'react'

import './styles/Logo.css'

export default class Logo extends Component{
    constructor(props){
        super(props);
        this.developerName = 'Dmitry Borodin';
        this.specialization = ['Frontend Developer']
    }

    render(){
        return (
            <div className='logo'>
                <h1 className='logo__name-developer'>{this.developerName}</h1>
                <h2 className='logo__specialization'>{this.specialization}</h2>
            </div>
        )
    }
}