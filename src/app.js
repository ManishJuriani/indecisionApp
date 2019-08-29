import React from 'react'
import ReactDOM from 'react-dom'
import LineChart from 'react-linechart'
import IndecisionApp from './components/IndecisionApp'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        const count = 3;
        fetch('http://localhost:5000/ages/'+count)
        .then(res => res.json())
        .then((receivedData) => {
            let data = []
            let points = []
            let input = {}
            let color = receivedData[0].color

            for(let i=0;i<count;i++){
                points.push({x:receivedData[0].points[i].x,y:receivedData[0].points[i].y})
            }
            
            input = {
                color: color,
                points: points
            }
            data.push(input)  
            console.log(input)

            let string_data = JSON.stringify(data)
            
            console.log(string_data)
            this.setState(()=>({data:string_data}))
            // console.log(this.state.data)
        }).catch(console.log)
        
    }

    render() {
        // const color = {this.state.data}

        const data = [
            {									
                color: "orange", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart =={this.state.data}==</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />
                </div>				
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))