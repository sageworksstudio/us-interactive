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
  fetchUsStates ({ commit }) {
    return mapservice.fetchUsStates()
      .then(response => {
        commit('UPDATE_US_STATES', response.data)
        commit('UPDATE_LOADING', false)
      })
      .catch(error => {
        commit('UPDATE_ERROR', error)
      })
  },

  fetchUsState ({ commit, getters }, payload) {
    const theState = getters.getUsState(payload.id)
    commit('UPDATE_CURRENT_CAPITAL', theState.capital)
    commit('UPDATE_CURRENT_META', theState.meta)
    commit('UPDATE_CURRENT_STATE', theState.name)
  }
}

export const getters = {
  getUsState: state => id => {
    return state.us_states.find(us => us.id === id)
  }
}
