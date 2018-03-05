import React, { Component } from "react"
import { Image, Text, View, Button, Picker } from "react-native"

import { initStore } from 'react-stateful'

const store = {
  initialState: { count: 0, title: 'hello' },
  actions: {
    increment: ({ count }) => ({ count: count + 1 }),
  },
}

const { Provider, connect } = initStore(store)

let Count = ({ state, actions }) => (
  <View>
    <Text>{state.count}</Text>
    <Button onPress={actions.increment} title={state.title}/>
  </View>
)

Count = connect(['count', 'title'])(Count)

class App extends Component {
  render() {
    return (
      <View>
        <Text>How are you</Text>
        <Provider>
          <Count />
        </Provider>
      </View>
    )
  }
}

export default App
