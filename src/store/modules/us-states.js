import mapservice from '@/services/mapservice'

export const namespaced = true

export const state = {
  error: '',
  current_capital: '',
  current_meta: '',
  current_state: '',
  loading: true,
  us_states: []
}

export const mutations = {
  UPDATE_CURRENT_CAPITAL (state, curCapital) {
    state.current_capital = curCapital
  },
  UPDATE_CURRENT_META (state, curMeta) {
    state.current_meta = curMeta
  },
  UPDATE_CURRENT_STATE (state, curState) {
    state.current_state = curState
  },
  UPDATE_ERROR (state, error) {
    state.error = error
  },
  UPDATE_LOADING (state, loading) {
    state.loading = loading
  },
  UPDATE_US_STATES (state, usStates) {
    state.us_states = usStates
  }
}

export const actions = {
  fetchStates ({ commit }) {
    return mapservice.fetchStates()
      .then(response => {
        commit('UPDATE_US_STATES', response.data)
        commit('UPDATE_LOADING', false)
      })
      .catch(error => {
        commit('UPDATE_ERROR', error)
      })
  },

  updateState ({ commit, getters }, payload) {
    commit('UPDATE_ERROR', payload.id)
    // commit('UPDATE_CURRENT_CAPITAL', response.data)
    // commit('UPDATE_CURRENT_META', response.data)
    // commit('UPDATE_CURRENT_STATE', response.data)
  }
}

export const getters = {
  // TODO -
}
