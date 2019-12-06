import { importHTML, useTemplate } from '../utils.js'

class QChatList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await useTemplate(this, '/components/q-chat-list/index.html')
    this.update()
  }
}

customElements.define('q-chat-list', QChatList)
