import { render } from '../utils.js'

class QMessageItem extends HTMLElement {
  constructor() {
    super()
  }

  get content() { return this.getAttribute('content') }
  set content(value) { return this.setAttribute('content', value) }

  get from() { return this.getAttribute('from') }
  set from(value) { return this.setAttribute('from', value) }

  get fromAvatar() { return this.getAttribute('from-avatar') }
  set fromAvatar(value) { return this.setAttribute('from-avatar', value) }

  get fromSelf() { return this.hasAttribute('from-self') }
  set fromSelf(value) { return value ? this.setAttribute('from-self', '') : this.removeAttribute('from-self') }

  static get observedAttributes() {
    return ['content', 'from', 'from-avatar', 'from-self']
  }

  udpate() {
    if (!this.rendered) return

    this.querySelector('#avatar').setAttribute('src', this.fromAvatar)
    this.querySelector('#avatar').setAttribute('title', this.from)
    this.querySelector('#from').innerText = this.from
    this.querySelector('#content').innerText = this.content

    if (this.fromSelf) {
      this.querySelector('#wrapper').classList.add('me')
      this.querySelector('#wrapper').classList.remove('you')
      this.querySelector('#from').style.display = 'none'
    } else {
      this.querySelector('#wrapper').classList.add('you')
      this.querySelector('#wrapper').classList.remove('me')
      this.querySelector('#from').style.display = 'block'
    }
  }

  async connectedCallback() {
    await render(this, '/components/q-message-item/index.html')
    this.rendered = true
    this.udpate()
  }

  attributeChangedCallback() {
    this.udpate()
  }
}

customElements.define('q-message-item', QMessageItem)
