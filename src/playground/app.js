class IndecisionApp extends React.Component{
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

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    ); 
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props)=>{
    
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    ); 
}

const Options = (props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map(option => 
                <Option 
                    key={option}
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                /> 
            )}
        </div>
    );
}

const Option = (props)=>{
    return (
        <div>
            Option: {props.optionText}
            <button onClick={
                (e)=>{
                    props.handleDeleteOption(props.optionText);
                }            
            }>remove</button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault()

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        // console.log(error)
        this.setState(()=> ({error}) )
        
        if(!error){
            e.target.elements.option.value = '';
        }
    }    
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Option Here"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))