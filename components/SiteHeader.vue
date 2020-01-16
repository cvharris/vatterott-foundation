<template>
  <div class="site-header">
    <div class="header-wrapper">
      <div class="site-title">
        <a href="/" class="menu-item">
          <h1>The Vatterott Foundation</h1>
        </a>
        <small><em>Family Giving Since 1948</em></small>
      </div>
      <div class="menu">
        <div v-for="item in menu" class="menu-item">
          <a
            :title="item.description"
            :href="item.route"
            :target="item.target"
            class="menu-link"
          >
            {{ item.label }}
          </a>
          <div class="secondary-menu">
            <!-- FIXME: This part is broken, it uses old nunjucks syntax -->
            {% for child in item.children %}
            <a
              title="<$ child.description $>"
              href="<$ child.route $>"
              target="<$ child.target $>"
              class="child-link"
              ><$ child.label $></a
            >
            {% endfor %}
          </div>
        </div>
      </div>
      <div id="menu-reveal" class="menu-button-container right">
        Menu&nbsp;<i class="fa fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['menu'])
  }
}
</script>
