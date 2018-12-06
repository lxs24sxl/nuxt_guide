
// let app = {
//   state: {
//     name: 'lxs24sxl',
//     current: 0
//   },
//   mutations: {
//     TOGGLE_NAME: state => {
//       state.name = state.name == 'lxs' ? 'lxs24sxl' : 'lxs'
//     },
//     TOGGLE_INDEX: (state, current) => {
//       state.current = current
//     }
//   },
//   actions: {
//     ToggleName: ({ commit }) => {
//       commit("TOGGLE_NAME")
//     },
//     ToggleIndex: ({ commit }, current) => {
//       commit("TOGGLE_INDEX", current)
//     }
//   }
// })

// export default app
export const state = () => ({
  name: 'lxs24sxl',
  current: 0
})

export const mutations = () => ({
  TOGGLE_NAME: state => {
    state.name = state.name == 'lxs' ? 'lxs24sxl' : 'lxs'
  },
  TOGGLE_INDEX: (state, current) => {
    state.current = current
  }
})

export const actions = () => ({
  ToggleName: ({ commit }) => {
    commit("TOGGLE_NAME")
  },
  ToggleIndex: ({ commit }, current) => {
    commit("TOGGLE_INDEX", current)
  }
})