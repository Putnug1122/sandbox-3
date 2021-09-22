export const state = () => ({
  class: [],
})
export const actions = {
  setClass({ commit }, data) {
    console.log('ENTER ACTIONS')
    commit('setClass', data)
  },
}

export const mutations = {
  setClass(state, data) {
    console.log('ENTER MUTATIONS')
    state.class = data
  },
}
