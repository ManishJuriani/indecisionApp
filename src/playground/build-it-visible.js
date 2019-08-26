class VisibilityToggle extends React.Component{
    constructor(props){
        super(props)
        {
            this.handleHideAndSeek = this.handleHideAndSeek.bind(this)
            this.state = {
                details: 'Some details to be shown',
                visibility: false
            }
        }
    }

    handleHideAndSeek(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <h2>Hide & Seek</h2>
                <button onClick={this.handleHideAndSeek}>{this.state.visibility?'Hide Details':'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <h3>Some important details to be shown here</h3>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))
