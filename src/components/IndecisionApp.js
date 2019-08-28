import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount(){

        fetch('http://localhost:5000/ages')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        }).catch(console.log)
        
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(json => console.log(json))

        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(()=>({options}))
            }        
        }catch(e){
            //Do nothing at all
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({options:prevState.options.filter((option)=>optionToRemove !== option)}))
    }

    handlePick(){
        this.setState((prevState)=>{
            const randomNum = Math.floor(Math.random() * prevState.options.length);
            const option = prevState.options[randomNum];
            alert(option);
        })
    }

    handleAddOption(option){
        // console.log('hao',option)
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists';
        }
        this.setState((prevState)=> ( {options: prevState.options.concat([option])} ) )
    }

    handleDeleteOptions(){
        this.setState(()=>( { options:[] } ))
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer!!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                 handlePick = {this.handlePick}
                 hasOptions = {this.state.options.length > 0}                  
                 />
                <Options                 
                 handleDeleteOptions={this.handleDeleteOptions}
                 options={this.state.options}
                 handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                 handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}