import api from '@/services/api'

export default {
  fetchStates () {
    return api.apiClient.get('/us-states')
  }
}
