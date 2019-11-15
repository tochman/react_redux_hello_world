import greetingsReducer from '../../state/reducers/greetingsReducer'
import configureStore from '../../state/store/configureStore'


describe('greetingsReducer', () => {
  let store, state

  beforeEach(() => {
    store = configureStore()
  });

  it('returns initial state', () => {
    const action = { type: '' }
    const expectedState = {
      greeting: 'Hello World from Redux',
      proposedGreeting: ''
    }
    expect(greetingsReducer(undefined, action))
      .toEqual(expectedState)
  });

  it('changes proposedGreeting', () => {
    const action = { type: 'PROPOSE_GREETING', payload: 'Tjena tjena' }
    const expectedState = {
      greeting: 'Hello World from Redux',
      proposedGreeting: 'Tjena tjena'
    }
    state = store.getState().greetings
    expect(greetingsReducer(undefined, action))
      .toEqual(expectedState)
  });

  it('changes greeting and purges proposedGreeting',  () => {
    store.dispatch({type: 'PROPOSE_GREETING', payload: "Hej på dig!"})
    const expectedState = {
      greeting: 'Hej på dig!',
      proposedGreeting: ''
    }
    console.table(store.getState())
    state = store.getState().greetings
    expect(
      greetingsReducer(state, { type: 'CHANGE_GREETING' })
    ).toEqual(expectedState)
  });
})
