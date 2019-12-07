import { render } from '../utils.js'

class QChatList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await render(this, './index.html', import.meta.url)
    this.update()
  }
}

customElements.define('q-chat-list', QChatList)
