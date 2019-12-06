import { render } from '../utils.js'

class MyFriendList extends HTMLElement {

  get source() {
    return eval(this.getAttribute('source'))
  }
  get current() { return parseInt(this.getAttribute('current'), 10) }
  get target() { return eval(this.getAttribute('target')) }
  get itemRender() { return eval(this.getAttribute('itemRender')) }

  get itemElements() {
    return Array.from(this.listElement.querySelectorAll('q-friend-item'))
  }

  addItem(item) {
    const itemElement = document.createElement('q-friend-item')
    Object.keys(item).forEach(key => {
      itemElement[key] = item[key]
    })
    itemElement.addEventListener('click', () => {
      this.itemElements.forEach(e => e.active = false)
      itemElement.active = true
      this.target.onSelectionChanged(this.itemElements.indexOf(itemElement))
    })
    this.listElement.appendChild(itemElement)
    return itemElement
  }

  render() {
    this.innerHTML = ''
    this.listElement = document.createElement('q-friend-list')
    this.appendChild(this.listElement)
    getItems(this.source).forEach(
      item => this.addItem(item)
    )
    const currentItemElement = this.itemElements[this.current]
    if (currentItemElement) {
      currentItemElement.active = true
    }
  }

  async connectedCallback() {
    this.render()
    this.rendered = true

    this.source.listenDataChanged(
      () => this.render()
    )
  }
}

customElements.define('my-friend-list', MyFriendList)

function getItems(source) {
  if (Array.isArray(source)) return source
  return Array.from({ length: source.size() }).map(
    (_, index) => source.get(index)
  )
}
