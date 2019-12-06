import { render } from '../utils.js'

class QChatList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await render(this, '/components/q-chat-list/index.html')
    this.update()
  }
}

customElements.define('q-chat-list', QChatList)
