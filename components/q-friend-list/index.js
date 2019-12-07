import { render } from '../utils.js'

class QFriendList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await render(this, './index.html', import.meta.url)
    this.update()
  }
}

customElements.define('q-friend-list', QFriendList)
