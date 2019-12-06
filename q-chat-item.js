// id: "chat001",
// displayName: "三剑客",
// avatar: "/res/avatar-group.jpg",
// redDotStyle: "",
// noticeCount: 0,
// noticeMsg: "",
// isTop: true,
// isSelected: true,
// isMuted: false

import { importHTML, useTemplate } from './utils.js'

class QChatItem extends HTMLElement {
  constructor() {
    super()
  }

  get displayName() { return this.getAttribute('display-name') }
  set displayName(value) { return this.setAttribute('display-name', value) }

  get avatar() { return this.getAttribute('avatar') }
  set avatar(value) { return this.setAttribute('avatar', value) }

  udpate() {
    this.querySelector('#avatar').setAttribute('src', this.avatar)
    this.querySelector('#name').innerText = this.displayName
  }

  async connectedCallback() {
    await useTemplate(this, './q-chat-item.html')
    this.udpate()
  }
}

customElements.define('q-chat-item', QChatItem)
