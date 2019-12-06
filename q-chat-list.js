import { importHTML, useTemplate } from './utils.js'

class QChatList extends HTMLElement {
  update() {}

  async connectedCallback() {
    await useTemplate(this, './q-chat-list.html')
    this.update()
  }
}

customElements.define('q-chat-list', QChatList)
