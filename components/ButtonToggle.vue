<template>
  <div @click="toggle" class="button-position">
    <div v-if="isAdmin">
    <button v-if="showApplication" class=" toggle-button link-like">
      Admin Page
    </button>
    <button v-if="!showApplication" class="toggle-button link-like">
      Grant Application
    </button>
    </div>
    <button class="toggle-button link-like">
      <logout-component />
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LogoutComponent from '../components/LogoutComponent'

export default {

  components: {
    LogoutComponent
  },
  props: {
    showApplication: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['isAdmin'])
  },
  methods: {
    toggle() {
      this.$emit('clicked-toggle-button')
    }
  }
}
</script>

<style>
.toggle-button {
  font-size: 1rem;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid #212121;
  border-radius: 6px;
}
.button-position {
  display: flex;
  align-items: baseline;
}
h1 {
  margin: 0;
}
button {
  margin-top: 0;
}
</style>
