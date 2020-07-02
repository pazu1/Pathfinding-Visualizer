export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function applyStyle(style, reference, effect = null) {
    reference.current.style.background = style.background
    reference.current.style.transform = style.transform
    if (style.textContent) { // Slow because textContent doesn't exist and has to be created
        reference.current.textContent = style.textContent 
    }
    if (effect) {
        effect(reference)
    }
}
