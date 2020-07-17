export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function applyStyle(style, reference, effect = null) {
    reference.current.style.background = style.background
    reference.current.style.transform = style.transform
    if (effect) {
        effect(reference)
    }
}

export async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}
