import { render } from '../utils.js'

class QMainTab extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['selected']
  }

  update() {
    if (!this.rendered) return

    // 航天飞机编码风格...
    const chat = this.querySelector('#chat-item')
    const friend = this.querySelector('#friend-item')
    const chatIcon = this.querySelector('#chat-icon')
    const friendIcon = this.querySelector('#friend-icon')
    const chatContent = this.querySelector('#chat')
    const friendContent = this.querySelector('#friend')

    chat.classList.remove('selected')
    friend.classList.remove('friend')
    chatContent.style.display = 'none'
    friendContent.style.display = 'none'
    chatIcon.classList.remove('web_wechat_tab_chat_hl')
    friendIcon.classList.remove('web_wechat_tab_friends_hl')

    switch (this.selected) {
      case 'chat':
        chat.classList.add('selected')
        chatContent.style.display = 'block'
        chatIcon.classList.add(chatIcon.classList[0] + '_hl')
        break;
      case 'friend':
        friend.classList.add('selected')
        friendContent.style.display = 'block'
        friendIcon.classList.add(friendIcon.classList[0] + '_hl')
        break;
    }
  }

  get selected() { return this.getAttribute('selected') }
  set selected(value) {
    this.triggerEventListener()
    return value ? this.setAttribute('selected', value) : this.removeAttribute('selected')
  }

  attributeChangedCallback() {
    this.update()
  }

  handleEventListener() {
    this.querySelector('#chat-item').addEventListener('click', () => this.selected = 'chat')
    this.querySelector('#friend-item').addEventListener('click', () => this.selected = 'friend')
  }

  triggerEventListener() {
    this.dispatchEvent(new Event('select'))
  }

  async connectedCallback() {
    await render(this, '/components/q-main-tab/index.html')
    this.handleEventListener()
    this.rendered = true
    this.update()
  }
}

customElements.define('q-main-tab', QMainTab)
