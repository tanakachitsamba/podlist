// @flow 
import { computed, action, observable } from 'mobx'

class Store {
    @observable posts: Array<mixed> = []
  
    @action createPost = (post: Object): void => {
      this.posts.push(post)
    }
  
    @computed get numberofPosts(): number {
      return this.posts.length
    }
}
  
export const store = new Store()