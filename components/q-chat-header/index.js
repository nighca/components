import { render } from '../utils.js'

class QChatHeader extends HTMLElement {

  static get observedAttributes() {
    return ['title', 'group-num']
  }

  update() {
    if (!this.rendered) return
    const titleName = this.querySelector('#title_name')
    const titleCount = this.querySelector('#title_count')
    titleCount.innerText = `(${this.groupNum})`
    titleName.innerText = this.title
  }

  get title() { return this.getAttribute('title') }
  set title(value) { return this.setAttribute('title', value) }

  get groupNum() { return this.getAttribute('group-num') }
  set groupNum(value) { return this.setAttribute('group-num', value) }

  attributeChangedCallback() {
    this.update()
  }

  async connectedCallback() {
    await render(this, './index.html', import.meta.url)
    this.rendered = true
    this.update()
  }
}

customElements.define('q-chat-header', QChatHeader)
