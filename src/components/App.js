import React from 'react';
import Child from './Child';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div>
        <Child onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
