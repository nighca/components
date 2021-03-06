export async function importHTML(url) {
  const htmlRes = await fetch(url)
  const html = await htmlRes.text()
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.cloneNode(true)
}

export async function render(node, templateUrl, baseUrl) {
  if (baseUrl != null) {
    templateUrl = new URL(templateUrl, baseUrl).href
  }
  const content = await importHTML(templateUrl)
  const childNodes = Array.from(node.childNodes.values())
  node.innerHTML = ''
  const slot = content.querySelector('slot')
  node.appendChild(content)
  if (slot) {
    childNodes.forEach(childNode => {
      slot.appendChild(childNode)
    })
  }
}
