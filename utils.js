export async function importHTML(url) {
  const htmlRes = await fetch(url)
  const html = await htmlRes.text()
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.cloneNode(true)
}

export async function useTemplate(node, templateUrl) {
  const content = await importHTML(templateUrl)
  const childNodes = node.childNodes
  const slot = content.querySelector('slot')
  node.appendChild(content)
  if (slot) {
    for (const childNode of childNodes.values()) {
      node.removeChild(childNode)
      slot.appendChild(childNode)
    }
  }
}
