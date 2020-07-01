export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function applyStyle(style, reference) {
    reference.current.style.background = style.background
    reference.current.style.transform = style.transform
}
