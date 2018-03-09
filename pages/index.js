// @flow
import * as React from 'react'
import { Provider,  inject, observer } from 'mobx-react'
import { store } from './../store'

type Props = {
  store: {
    numberofPosts: number, 
  }
}

@inject('store') @observer
class Counter extends React.Component<{}> {
  constructor(props) {
    super(props)
  }

  render() {
    const { createPost } = this.props.store

    return (
      <div>
        {this.props.store.numberofPosts}
      </div>
    )
  }
}

export default class App extends React.Component<{}> {
  render () {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}