export default function submitDatas (state = 0, action) {
  switch(action.type) {
    case 'SUBMITING_DATAS':
      return {
        ...state, name: action.name, password: action.password, token: action.token
      }
    default:
      return state
  }
}
