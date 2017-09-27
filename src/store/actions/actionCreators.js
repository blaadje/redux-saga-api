// submit form

export function submit (name, password) {
  return {
    type: 'SUBMITING_DATAS',
    name,
    password
  }
}
export function get (result) {
  return {
    type: 'GETTING_DATAS',
    result
  }
}