export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function applyStyle(style, reference, effect = null) {
    reference.current.style.background = style.background
    reference.current.style.transform = style.transform
    if (style.textContent) { 
        reference.current.textContent = style.textContent 
    }
    if (effect) {
        effect(reference)
    }
}
