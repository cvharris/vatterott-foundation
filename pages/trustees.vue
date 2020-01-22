<template>
  <div>
    <div class="container">
      <h1 class="page-title">Board of Trustees</h1>
      <p
        class="page-description"
      >In adherence to the Vatterott Foundation's tradition of strong family relationships, each board member descends from one of the founders' 10 siblings.</p>
      <div class="trustees-list">
        <div v-for="trustee in trustees" :key="trustee.id" class="trustee">
          <div class="trustee-information">
            <div>
              <h3 class="trustee-name">{{ trustee.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="administrator">
      <h2>Administrator</h2>
      <div class="trustees-list">
        <div class="trustee">
          <div class="trustee-information">
            <h3 class="trustee-name">William Vatterott</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trustees: [
        { id: 1, name: 'John Vatterott' },
        { id: 2, name: 'James Vatterott' },
        { id: 3, name: 'Joseph Kelley Jr.' },
        { id: 4, name: 'Mary Hastings' },
        { id: 5, name: 'Paul Vatterott Jr.' },
        { id: 6, name: 'Daniel Vatterott' },
        { id: 7, name: 'Sarah Vatterott' },
        { id: 8, name: 'Louise Hart' },
        { id: 9, name: 'Charles Riley' },
        { id: 10, name: 'Martha Valenta' },
        { id: 11, name: 'Claire Hundelt' }
      ]
    }
  }
}
</script>

<style>
</style>