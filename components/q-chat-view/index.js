import { render } from '../utils.js'

class QChatView extends HTMLElement {
  update() {}

  async connectedCallback() {
    await render(this, '/components/q-chat-view/index.html')
    this.update()
  }
}

customElements.define('q-chat-view', QChatView)
