<template>
  <div @click="toggle" class="button-position">
    <button v-if="showApplication" class=" toggle-button link-like">
      Admin Page
    </button>
    <button v-if="!showApplication" class="toggle-button link-like">
      Grant Application
    </button>
    <button class="toggle-button link-like">
      <logout-component />
    </button>
  </div>
</template>

<script>
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
