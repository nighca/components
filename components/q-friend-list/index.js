import { render } from '../utils.js'

class QFriendList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await render(this, '/components/q-friend-list/index.html')
    this.update()
  }
}

customElements.define('q-friend-list', QFriendList)
