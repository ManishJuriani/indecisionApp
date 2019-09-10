import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined 
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
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

    handleCloseModal = ()=>{
        this.setState(()=>({
            selectedOption: undefined
        }))
    }

    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=>({options:prevState.options.filter((option)=>optionToRemove !== option)}))
    }

    handlePick = ()=>{

        this.setState((prevState)=>({
            selectedOption : prevState.options[Math.floor(Math.random() * prevState.options.length)]
        }))
    }

    handleAddOption = (option)=>{
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists';
        }
        this.setState((prevState)=> ( {options: prevState.options.concat([option])} ) )
    }

    handleDeleteOptions = ()=>{
        this.setState(()=>( { options:[] } ))
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer!!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                    handlePick = {this.handlePick}
                    hasOptions = {this.state.options.length > 0}                  
                    />
                    <div className="widget">
                        <Options                 
                            handleDeleteOptions={this.handleDeleteOptions}
                            options={this.state.options}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                    
                </div>
                <OptionModal handleCloseModal={this.handleCloseModal} selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}