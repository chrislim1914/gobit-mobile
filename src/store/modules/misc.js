/**
 * Misc store module
 */

/**
 * @const state
 * @type {object}
 */
const state = {
  isNoticeShown: true,
  isBannerShown: true,
  responseData: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  setBannerStatus: async (context, payload) => {
    try {
      context.commit('setBannerStatus', payload.status)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  },
  setNoticeStatus: async (context, payload) => {
    try {
      context.commit('setNoticeStatus', payload.status)
    } catch (error) {
      context.commit('updateResponseData', 'General Error')
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {

  setBannerStatus: (state, status) => {
    state.isBannerShown = !status
  },

  setNoticeStatus: (state, status) => {
    state.isNoticeShown = !status
  },

  /**
     * Update response message state
     * @param state
     * @param status
     */
  updateResponseData: (state, status) => {
    state.responseData = status
  }
}

export default { state, actions, mutations }
