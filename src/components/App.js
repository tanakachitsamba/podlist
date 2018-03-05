// @flow
import React, { Component } from "react"
import { Image, Text, View, Button, Picker, TextInput } from "react-native"
import { initStore } from 'react-stateful'

type Post = {
  title: string, 
  desc: string, 
  date: string, 
  authors: string, 
  upvotes: number, 
  podcast: string,
  id: string // Id object 
}

type Store = {
  initialState: {
    posts: Array<mixed>, 
  }, 
  actions: {
    createPost: () => void, 
  }, 
}

const store: Store = {
  initialState: { 
    posts: [], 
  },
  actions: {
    createPost: ({ posts }) => ({ posts: [{ title: 'hello', upvote: 0, }, ...posts ]}), 
    getPostByID: (id: string, { posts }) => (posts.filter(post => post.id === id)), 
    onUpvote: (id: string) => (
      let post: Post = getPostByID(id) 
    )
  },
}

const { Provider, connect, Consumer, actions, subscribe } = initStore(store)
subscribe((action, state) => console.log(action, state))

let Count = ({ state, actions }) => (
  <View>
    <Text>yooo</Text>
    <View>
    {state.posts.map((item, index) => <Text key={index}>{item.title}</Text>)}
    </View>

    <Button title="yoooo" onPress={actions.createPost} />
  </View>
)
Count = connect(['posts'])(Count)

class App extends Component {
  render() {
    return (
      <View>
        <Provider>
          <Count />
        </Provider>
      </View>
    )
  }
}

export default App
