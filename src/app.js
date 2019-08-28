import React from 'react'
import ReactDOM from 'react-dom'
import LineChart from 'react-linechart'
import IndecisionApp from './components/IndecisionApp'

export default class App extends React.Component {
    render() {

        fetch('http://localhost:5000/ages')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        }).catch(console.log)

        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart</h1>
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