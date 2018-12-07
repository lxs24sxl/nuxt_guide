import axios from 'axios'
// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       result: '未查询'
//     },
//     mutations: {
//       setResult (state, {result}) {
//         state.result = result
//       }
//     }
//   })
// }

// export default createStore



export const state = () => ({
  result: '未查询'
})

export const mutations = {
  SET_RESULT (state, result) {
    state.result = result
  }
}

export const actions = {
  async GET_RESULT ({commit}) {
    console.log('这里')
    const { data  } = await axios.get("http://localhost:9000/api/result")
    commit("SET_RESULT", data.result)
  }
}
