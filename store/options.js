export const state = () => ({
  print: false
})

export const mutations = {
  setPrint(state, value) {
    state.print = !!value
  }
}

export const getters = {
  getPrint(state) {
    return state.print
  }
}


