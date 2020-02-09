export default function({ store, app: { $auth } }) {
  $auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid
      store.commit('setCurrentUserId', uid)
      // ...
    } else {
      // User is signed out.
      store.commit('setCurrentUserId', '')
    }
    store.commit('finishInitializing')
  })
}
