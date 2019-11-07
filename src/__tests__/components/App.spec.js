import App from '../../App'
import { Provider } from 'react-redux'
import React from 'react'
import { mount } from 'enzyme'
import configureStore from '../../state/store/configureStore'

describe('<App />', () => {
  let desribedComponent, store
  store = configureStore()

  beforeEach(() => {
    desribedComponent = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });

  it('displays default greeting', () => {
    expect(desribedComponent.find('h1').text())
      .toEqual('Hello World from Redux')
  });

  it('changes greeting after user interaction', () => {
    let input = desribedComponent.find('input[id="greeting-input"]').first()
    input.instance().value = 'Hej Hej Hej';
    input.simulate('blur');
    desribedComponent.find('button').simulate('click')
    expect(desribedComponent.find('h1').text())
      .toEqual('Hej Hej Hej')
  });
})
