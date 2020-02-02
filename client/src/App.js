import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locading: true,
      consulta: "",
      responseJSON: {}
    }
  }
  
componentDidMount(){
  
  fetch('/api/items?q=mesas')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(response => { 
                console.log('json',response); 
                this.setState({ responseJSON: response })
                this.setState({ locading: false })
             });

}

  render() {
    const r = this.state.responseJSON
    return (
      <div className="App">
        {this.state.locading ? <div>loading...</div> : <div>response... </div>}
        {Object.keys(r).map((e, i) => {return <div key={i}>{e}</div>})}
      </div>
    );
  }
}

export default App;
