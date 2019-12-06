import { render } from '../utils.js'

class QSendBox extends HTMLElement {
  constructor() {
    super()
  }

  get value() { return this.getAttribute('value') }
  set value(value) { return this.setAttribute('value', value) }

  file = null

  static get observedAttributes() {
    return ['value']
  }

  get editArea() {
    return this.querySelector('#edit-area')
  }

  get fileInput() {
    return this.querySelector('#file-input')
  }

  udpate() {
    if (!this.rendered) return

    const value = (
      typeof this.value === 'string'
      ? this.value
      : ''
    )
    if (this.editArea.innerText !== value) {
      this.editArea.innerText = value
    }
  }

  async connectedCallback() {
    await render(this, '/components/q-send-box/index.html')
    this.rendered = true
    this.udpate()

    this.editArea.addEventListener('input', (e) => {
      e.stopPropagation()
      const value = this.editArea.innerText
      if (this.value !== value) {
        this.value = value
        const event = new Event('input')
        this.dispatchEvent(event)
      }
    })

    this.querySelector('#form').addEventListener('submit', (e) => {
      e.stopPropagation()
      e.preventDefault()
      const event = new Event('submit')
      this.dispatchEvent(event)
    })

    this.fileInput.addEventListener('change', (e) => {
      e.stopPropagation()
      this.file = this.fileInput.files[0]
      const event = new Event('file')
      this.dispatchEvent(event)
    })
  }

  attributeChangedCallback() {
    this.udpate()
  }
}

customElements.define('q-send-box', QSendBox)
