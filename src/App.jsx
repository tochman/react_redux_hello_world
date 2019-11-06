import React, { Component } from 'react';
import { Container, Header} from 'semantic-ui-react'

class App extends Component {
  state = {
    greeting: 'Hello World from component state'
  }
  render() {
    return (
      <Container>
        <Header as="h1">{this.state.greeting}</Header>
      </Container>
    );
  }
}

export default App;