<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-description">
        {{ subtitle }}
      </p>
      <div v-html="html">
      </div>

      <h2 class="container">{{ options.header3 }}</h2>

      <div style="text-align: center;">
       <p class="page-description"> 
         <h4><strong>{{ options.online.option1 }}</strong></h4> 
         </br>{{ options.online.option1text }}
      </p>
        <a class="action-button" href="/applications/new-application">
          {{ options.online.submitbutton }}
        </a>
        <strong>{{ options.or }}</strong>
        <p class="page-description">
          <h4><strong>{{ options.email.option2 }}</strong></h4>
          <br /> 
          {{ options.email.option2text }} 
          <a href="mailto:info@vatterottfoundation.org">{{ options.email.emailaddresslink }}</a>
        </p>
      <br />
      <strong>{{ options.or2 }}</strong><br />
        <p class="page-description">
          <h4><strong>{{ options.mail.option3 }}</strong></h4>
          <br />
         {{ options.mail.option3text }}
        </p>
      </div>
      <address style="text-align: center;">
        <br /><strong>{{ options.mail.address.addressline1 }}</strong><br />
        {{ options.mail.address.addressline2 }}<br />
        {{ options.mail.address.addressline3 }}
      </address>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const { attributes, html } = await import(
      '~/assets/content/pages/grant-application.md'
    )
    const {
      title,
      subtitle,
      appdescriptions,
      // documents,
      // guidelines,
      options
    } = attributes
    return {
      title,
      subtitle,
      appdescriptions,
      // documents,
      // guidelines,
      options,
      html
    }
  }
}
</script>

<style>
.text-align {
  text-align: center;
}
</style>
