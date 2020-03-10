<template>
  <div class="button-position">
    <button
      v-if="showApplication"
      @click="toggleView"
      class=" toggle-button link-like"
    >
      {{ showApplication ? 'Admin Page' : 'Grant Application' }}
    </button>
    <button
      v-if="!showApplication"
      @click="toggleView"
      class="toggle-button link-like"
    >
      {{ showApplication ? 'Grant Application' : 'Admin Page' }}
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
  data() {
    return {
      showApplication: true
    }
  },
  methods: {
    toggleView() {
      this.showApplication = !this.showApplication
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
