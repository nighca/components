import { render } from '../utils.js'

class QChatItem extends HTMLElement {
  constructor() {
    super()
  }

  get displayName() { return this.getAttribute('display-name') }
  set displayName(value) { return this.setAttribute('display-name', value) }

  get avatar() { return this.getAttribute('avatar') }
  set avatar(value) { return this.setAttribute('avatar', value) }

  get noticeCount() { return this.getAttribute('notice-count') }
  set noticeCount(value) { return this.setAttribute('notice-count', value) }

  get noticeMsg() { return this.getAttribute('notice-msg') }
  set noticeMsg(value) { return this.setAttribute('notice-msg', value) }

  get isMuted() { return this.hasAttribute('is-muted') }
  set isMuted(value) { return value ? this.setAttribute('is-muted', '') : this.removeAttribute('is-muted') }

  get active() { return this.hasAttribute('active') }
  set active(value) { return value ? this.setAttribute('active', '') : this.removeAttribute('active') }

  static get observedAttributes() {
    return ['display-name', 'avatar', 'notice-count', 'notice-msg', 'is-muted', 'active']
  }

  udpate() {
    if (!this.rendered) return

    this.querySelector('#name').innerText = this.displayName
    this.querySelector('#avatar').setAttribute('src', this.avatar)
    this.querySelector('#notice-count').innerText = this.noticeCount
    this.querySelector('#msg').innerText = this.noticeMsg
    this.querySelector('#mute').style.display = this.isMuted ? 'block' : 'none'

    if (this.active) {
      this.querySelector('#wrapper').classList.add('active')
    } else {
      this.querySelector('#wrapper').classList.remove('active')
    }
  }

  async connectedCallback() {
    await render(this, '/components/q-chat-item/index.html')
    this.rendered = true
    this.udpate()
  }

  attributeChangedCallback() {
    this.udpate()
  }
}

customElements.define('q-chat-item', QChatItem)
