// submit form

export function submit (name, password, token) {
  return {
    type: 'SUBMITING_DATAS',
    name,
    password,
    token
  }
}
export function getting (result) {
  return {
    type: 'GETTING_DATAS',
    result: result.data
  }
}