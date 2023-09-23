export function intersection(checked, itemsList) {
  return checked.filter(item => itemsList.includes(item))
}

export function difference(checked, itemsList) {
  return checked.filter(item => !itemsList.includes(item))
}
