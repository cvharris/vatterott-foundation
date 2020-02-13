export default function({ store, app: { $auth } }) {
  $auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const uid = user.uid
      store.commit('setCurrentUserId', uid)
      store.dispatch('initializeUser')
    } else {
      // User is signed out.
      store.commit('setCurrentUserId', '')
    }
    store.commit('finishInitializing')
  })
}
