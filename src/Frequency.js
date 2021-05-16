import React, { Component } from 'react'
import axios from 'axios'
import Count from './Count'
// import ClassFreq from './ClassFreq'
class Frequency extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
     this.state = {
        sentence:'Vivek is my name',
       n: 5,
      render: false 
    }
    this.changeNumber= this.changeNumber.bind(this);
  }
  add = () => {
    this.setState({ render: !this.state.render })
  }
  //setting user enetered value of state n
  changeNumber = (event) => {
    this.setState({
      n: event.target.value
    })
    event.preventDefault()
  }
// Fetching Data using axios
      componentDidMount() {
        axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md')
            .then(response => {
                console.log(response)
                this.setState({sentence:response.data})
            })
            .catch(error => {
            console.log(error)
        })
        this.inputRef.current.focus()
  }
  
  render() {
  return (
    <div>
        <h1>Count Frequency Of Top N occurring Elements</h1>
        <label>Enter Number</label>
        <input type='number' min="1" max="26" placeholder='Enter Here...' ref={this.inputRef} value={this.state.n} onChange={this.changeNumber}></input>
        <button type='submit' onClick={() => this.add()}>Click me</button>
       { this.state.render &&
        <Count sentence={this.state.sentence} n={this.state.n} />
     }
      {console.log(this.state.n)}
      </div>
    )
  }
}

export default Frequency