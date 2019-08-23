import * as React from 'react';
// import * as ReactDom from 'react-dom';

interface props {
  color: string
}
interface state {
  size: number
}
class App extends React.Component<props, state> {
  public state = {
    size: 50
  }
  _add(n: number){
    let size = this.state.size + n
    this.setState({
      size
    }, () => {
      console.log(this.state)
    })
  }
  public render() {
    return (
      <div>
        <p onClick = {() => this._add(5)}>{this.state.size}</p>
      </div>
      
    )
  }

}

export default App
