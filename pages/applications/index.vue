<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-description">
        {{ subtitle }}
      </p>
      <div v-html="html" />
      <div>
        <h2>{{ appdescriptions.header2 }}</h2>

        <div class="page-description" style="text-align: center;">
           {{ appdescriptions.goodmatchA }}
        <a href="mailto:info@vatterottfoundation.org">{{ appdescriptions.emailtextlink }}</a>
            {{ appdescriptions.goodmatchB }}
        </div>
      </div>

    <fieldset>
        <legend class="section-description">
          &nbsp;{{ documents.sectionlabel }}&nbsp;
        </legend>
        <ul class="checkboxes">
          <li>
            <input type="checkbox">
            <label for="application"
              >{{ documents.applicationlabelA }}
              <a href="/public/VF_Application_Form.docx">{{
                documents.applicationlink
              }}</a>
              {{ documents.applicationlabelB }}</label
            >
          </li>
          <li>
            <input type="checkbox">
            <label for="project-budget"
              >{{ documents.budgetlabel
              }}<a href="/public/VF_Budget_Template_Form.xls">{{
                documents.budgetlink
              }}</a></label
            >
          </li>
          <li>
            <input type="checkbox">
            <label for="current-budget">{{ documents.currentbudget }}</label>
          </li>
          <li>
            <input type="checkbox">
            <label for="current-budget">{{ documents.irsletter }}</label>
          </li>
        </ul>
    </fieldset>

      <div style="text-align: center;">
        {{ guidelines.applicationguidelines }}
        <a href="/public/CGA_User_Guide.pdf"></br>{{ guidelines.guidelinelink }}</a>
      </div>
      <br />

      <h2>{{ options.header3 }}</h2>

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
      documents,
      guidelines,
      options
    } = attributes
    return {
      title,
      subtitle,
      appdescriptions,
      documents,
      guidelines,
      options,
      html
    }
  }
}
</script>

<style></style>
