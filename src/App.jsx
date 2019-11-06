import React from 'react';
import { Container, Header, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'


const App = ({ greeting, dispatch }) => {
  const changeGreeting = () => {
    dispatch({ type: 'CHANGE_GREETING' })
  }

  return (
    <Container>
      <Header as="h1">{greeting}</Header>
      <Input
        onBlur={event => dispatch({ type: 'PROPOSE_GREETING', payload: event.target.value })}
        placeholder='New greeting'
      />
      <Button
        onClick={() => changeGreeting()}
      >Change me</Button>
    </Container>
  )
}


const mapStateToProps = (state) => {
  return {
    greeting: state.greetings.greeting
  }
}

export default connect(mapStateToProps)(App)