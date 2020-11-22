import api from '@/services/api'

export default {
  fetchAllStates () {
    return api.apiClient.get('/us')
  }
}
