import api from '@/services/api'

export default {
  fetchUsStates () {
    return api.apiClient.get('/us')
  }
}
