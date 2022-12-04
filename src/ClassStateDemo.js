import React from "react";

class ClassStateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMoreInfo: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({ displayMoreInfo: !this.state.displayMoreInfo });
  }

  render() {
    const info = this.state.displayMoreInfo ? (
      <ul>
        <li>Basics</li>
        <li>JSX</li>
        <li>Components</li>
        <li>state and props</li>
        <li>Event Handling</li>
        <li>Hooks</li>
        <li>Binding</li>
      </ul>
    ) : null;

    return (
      <div>
        <h1>React Js Course Summary</h1>
        <br></br>
        {this.state.displayMoreInfo ? (
          <div>
            {info}
            <button onClick={this.toggleDisplay}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplay}>Show More</button>
          </div>
        )}
      </div>
    );
  }
}

export default ClassStateDemo;
