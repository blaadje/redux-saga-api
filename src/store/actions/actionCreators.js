// submit form

export function submit (name, password, token) {
  return {
    type: 'SUBMITING_DATAS',
    name,
    password,
    token
  }
}
export function get (result) {
  return {
    type: 'GETTING_DATAS',
    result
  }
}