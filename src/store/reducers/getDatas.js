export default function getDatas (state = 0, action) {
  console.log(action)
  switch(action.type) {
    case 'GETTING_DATAS':
      return {
        ...state, result: action.result
      }
    default:
      return state
  }
}
