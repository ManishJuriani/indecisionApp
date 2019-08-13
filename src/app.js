
class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        return (
            <div>
                <Header title={title} />
                <Action />
                <Options />
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                Options component here
                <Option></Option>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Option Component here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <h4>Add Option Here</h4>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));