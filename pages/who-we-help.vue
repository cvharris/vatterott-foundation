<template>
  <div>
    <div class="container">
      <h1 class="page-title">Who We Help</h1>
      <p
        class="page-description"
      >For nearly 70 years, the Vatterott Foundation has partnered with non-profit organizations to serve those in need. The Foundation would like to thank each organization for their commitment to social justice and service to the poor. Below are some of the organizations that have received funding from the Vatterott Foundation in the recent past.</p>
      <ul class="all-organizations">
        <li v-for="(org, i) in orgs" :key="i" class="organization">
          <a class="organization-link" :href="org.link" target="_blank">
            <h3 class="organization-name">{{ org.name }}</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orgs: [
        { name: 'Access Academies', link: 'http://accessacademies.org' },
        { name: 'Almost Home', link: 'http://almosthomestl.org/' },
        { name: 'ALS Association', link: 'http://www.alsa-stl.org/' },
        {
          name: "Alzheimer's Association - St. Louis Chapter",
          link: 'http://www.alz.org/stl/'
        },
        {
          name: 'American Liver Foundation',
          link: 'http://www.liverfoundation.org/'
        },
        { name: 'American Youth Foundation', link: 'http://ayf.com/' },
        { name: 'Archdiocese of St. Louis', link: 'http://archstl.org/' },
        {
          name: 'Assistance League of Saint Louis',
          link: 'http://www.assistanceleague.org'
        },
        {
          name: 'Better Family Life, Inc',
          link: 'http://betterfamilylife.org'
        },
        { name: 'Beyond Housing', link: 'http://www.beyondhousing.org/' },
        { name: 'Birthright Counseling', link: 'http://birthright.org' },
        {
          name: 'Blessed Teresa of Calcutta Catholic School',
          link: 'http://www.btcparish.org/site'
        },
        { name: 'Camp Happy Day', link: 'http://www.camphappydays.org/' },
        {
          name: 'Cardinal Carberry Senior Living Center',
          link: 'http://www.cardinalritterseniorservices.org'
        },
        { name: "Cardinal Glennon Children's Hospital Foundation", link: '' },
        {
          name: 'Cardinal Ritter College Prep',
          link: 'http://www.cardinalritterprep.net/'
        },
        { name: 'Cardinal Ritter Institute', link: '' },
        {
          name: 'Cardinal Ritter Senior Services',
          link: 'http://www.cardinalritterseniorservices.org/'
        },
        { name: 'Caritas Center-Ladies of Charity', link: '' },
        { name: 'Carondelet Community Center', link: '' },
        { name: 'Catholic Charities Christmas Appeal', link: '' },
        { name: 'Catholic Family Counseling', link: '' },
        { name: 'Catholic Legal Assistance Ministry', link: '' },
        { name: 'Catholic Newman Center - Maryville', link: '' },
        { name: 'Catholic Newman Center - UMSL', link: '' },
        { name: 'Catholic Services for Children & Youth', link: '' },
        { name: 'Catholic Student Center', link: '' },
        { name: 'Catholic Urban Program', link: '' },
        { name: 'Center for Survivors of Torture and War Trauma', link: '' },
        { name: 'Center for Women in Transition', link: '' },
        { name: 'Central Catholic', link: '' },
        { name: 'Chaminade College Prep', link: '' },
        { name: 'Christian Home Care Services, Inc.', link: '' },
        { name: 'Church of Christ the King', link: '' },
        { name: 'Church of St. Genevieve', link: '' },
        { name: 'City Academy', link: '' },
        { name: 'Community Helping Ministry', link: '' },
        { name: 'Community Hope Center', link: '' },
        { name: 'Congregation Mission Vincentian', link: '' },
        { name: 'Connection Aftercare Ministry', link: '' },
        { name: 'Continuum of Life Care Center, Inc.', link: '' },
        { name: 'Corpus Christi TEAM Summer Camp', link: '' },
        { name: 'Covenant House Missouri', link: '' },
        { name: 'The Covering House', link: '' },
        { name: 'Covenant Network', link: '' },
        { name: 'CRUDEM Foundation, Inc.', link: '' },
        { name: 'DeLaSalle Educational Center', link: '' },
        { name: 'DeLaSalle Middle School', link: '' },
        { name: 'Delta Gamma Ctr. For Children Visual Impair', link: '' },
        { name: 'DePaul Health Center Foundation', link: '' },
        { name: 'DePaul USA', link: '' },
        { name: 'Diversity Coalition of Saint Louis', link: '' },
        { name: 'Duchesne Scholarship House, Inc.', link: '' },
        { name: 'East Side Heart and Home Family Center', link: '' },
        { name: 'Educare Learning Center', link: '' },
        { name: 'English Tutoring Project', link: '' },
        { name: 'Educational Freedom Foundation', link: '' },
        { name: 'EnergyCare', link: '' },
        { name: 'Family Center', link: '' },
        { name: 'Family Support Network', link: '' },
        { name: "Father Dunne's Newsboys' Home", link: '' },
        { name: 'Feed My People', link: '' },
        { name: 'Focus St. Louis', link: '' },
        { name: 'Fontebella Maternity Shelter', link: '' },
        { name: 'Food Outreach, Inc.', link: 'http://www.foodoutreach.org/' },
        { name: 'Franciscan Connection', link: '' },
        { name: 'Friends of Greenwood Cemetery', link: '' },
        { name: 'Friends of Kids With Cancer', link: '' },
        { name: 'Gateway Greening', link: '' },
        { name: 'Gateway Vincentian Volunteers', link: '' },
        { name: 'Good Shepherd Children & Family Services ', link: '' },
        { name: 'Griffin Center', link: '' },
        { name: 'Guardian Angel Settlement Association', link: '' },
        { name: 'HealthVisions East St. Louis', link: '' },
        { name: 'Hervey Foundation', link: '' },
        { name: 'Holy Angels Church', link: '' },
        { name: 'Holy Trinity Catholic Church', link: '' },
        { name: 'Homeworks', link: '' },
        { name: 'Hope House', link: '' },
        { name: 'Hospice Foundation of Greater St. Louis', link: '' },
        { name: 'Housing Solutions', link: '' },
        { name: 'Incarnate Word Fdn.', link: '' },
        { name: 'Intercommunity Housing Association', link: '' },
        { name: 'International Institute', link: '' },
        { name: 'Jesuit Volunteer Corps', link: '' },
        { name: 'Junior Achievement', link: '' },
        { name: 'Kenrick-Glennon Seminary', link: '' },
        { name: "L'Arche St. Louis", link: '' },
        { name: "Let's Start, Inc,.", link: 'http://www.letsstart.org' },
        { name: 'Lift for Life Academy and Gym', link: '' },
        { name: 'Lift for Life Gym', link: '' },
        { name: 'Little Sisters of the Poor', link: '' },
        { name: 'Living Faith Foundation', link: '' },
        { name: "Lutheran Family & Children's Services", link: '' },
        { name: "Lydia's House", link: '' },
        { name: 'Magnificat Center', link: '' },
        { name: 'Marian Hall Agencies', link: '' },
        {
          name: 'Marian Middle School',
          link: 'http://www.marianmiddleschool.org'
        },
        { name: "Martha's Hands", link: '' },
        { name: 'Marygrove', link: '' },
        { name: 'Meds and Food For Kids', link: 'http://mfkhaiti.org' },
        { name: 'Memory Care Home Solutions', link: '' },
        { name: 'Meramec Education Fund', link: '' },
        { name: 'Metropolitan Assn. For Philanthropy', link: '' },
        { name: 'Migrant Whole Health Outreach, Inc.', link: '' },
        { name: 'M.I.C.A. Project', link: '' },
        { name: 'Mindseye', link: '' },
        { name: 'Missouri Catholic Conference', link: '' },
        { name: 'Morality in Media', link: '' },
        { name: 'More Than Carpentry Christian Ministries', link: '' },
        { name: 'Mother of Good Counsel Home', link: '' },
        { name: 'National Council of Alcoholism & Drug Abuse', link: '' },
        { name: 'Near Southside Employment Coalition', link: '' },
        { name: 'Nerinx Hall Biology Lab', link: '' },
        { name: 'Non-Profit Services Center', link: '' },
        { name: 'North Grand Neighborhood Services', link: '' },
        { name: 'Notre Dame High School', link: '' },
        { name: 'Notre Dame Preschool', link: '' },
        { name: 'Off the Cuff -Piwacket Theatre for Children', link: '' },
        { name: 'Office of Laity & Family Life', link: '' },
        { name: 'One Heart Family Ministries, Inc.', link: '' },
        { name: 'Operation Food Search', link: '' },
        { name: 'Our Lady of Guadalupe', link: '' },
        { name: 'Our Lady of the Snows School', link: '' },
        { name: 'Our Lady Queen of Peace Catholic School', link: '' },
        { name: "Our Lady's Inn", link: 'http://www.ourladysinn.org' },
        { name: 'Our Little Haven', link: '' },
        { name: 'Our M.O.M., Inc.', link: '' },
        { name: 'Passionist Nuns', link: '' },
        {
          name: 'Peter and Paul Community Services',
          link: 'http://www.ppcsinc.org/'
        },
        { name: 'Piasa Area Habitat for Humanity', link: '' },
        { name: 'Pregnancy Resource Centers-Greater St. Louis', link: '' },
        { name: 'Propagation of the Faith', link: '' },
        { name: 'Reach Foundation', link: '' },
        { name: 'Resurrection of our Lord School', link: '' },
        { name: 'RHCDA', link: '' },
        { name: 'Rosati Kain High School', link: '' },
        { name: 'Saint Jane Center', link: '' },
        { name: 'Saint Katharine Drexel', link: '' },
        { name: 'Saint Mary Magdelen Catholic Church', link: '' },
        { name: 'Saint Vincent DePaul Parish (5 yr pledge)', link: '' },
        { name: 'Sarah Community Foundation', link: '' },
        { name: 'School Sisters of Notre Dame', link: '' },
        {
          name: 'Sister Thea Bowman Catholic School',
          link: 'http://www.stbcs.com/wp/'
        },
        { name: 'Sisters of Most Precious Blood', link: '' },
        { name: 'Sisters of St. Joseph of Carondelet', link: '' },
        { name: 'SLACO (Etzel Make A Difference Center)', link: '' },
        { name: 'Small Word Adoption Foundation', link: '' },
        { name: 'Society of St. Vincent DePaul of St. Louis', link: '' },
        { name: 'Society of the Sacred Heart', link: '' },
        { name: 'South City Deanery PSR', link: '' },
        { name: 'St. Agatha Center', link: '' },
        { name: 'St. Ambrose Catholic School', link: '' },
        { name: 'St. Andrew School', link: '' },
        { name: 'St. Anthony of Padua Food Pantry', link: '' },
        { name: 'St. Anthony of Padua School', link: '' },
        { name: 'St. Anthony of Padua School (Youth Board)', link: '' },
        { name: 'St. Augustine Catholic Church', link: '' },
        { name: 'St. Cecilia School', link: '' },
        {
          name: 'St. Charles Lwanga Center',
          link: 'http://www.archstl.org/lwangacenter'
        },
        { name: 'St. Dominic H.S. - Scholarship (4 yr. Pledge)', link: '' },
        { name: 'St. Elizabeth Academy', link: '' },
        { name: 'St. Frances Cabrini Academy', link: '' },
        { name: 'St. Frances DeSales Parish', link: '' },
        { name: 'St. Francis Xavier College Church', link: '' },
        { name: 'St. Gerard Majella Parish (Memory Ed Kelley)', link: '' },
        { name: 'St. Joachim & Ann Care Services', link: '' },
        { name: 'St. John the Baptist Elementary School', link: '' },
        { name: 'St. John the Baptist High School', link: '' },
        { name: "St. John's Mercy Foundation (Priest Wellness)", link: '' },
        { name: 'St. Joseph Institute for the Deaf', link: '' },
        {
          name: 'St. Louis Area Women Religious Collaborative',
          link: 'http://www.stlcatholicsisters.org/collaborating-ministries'
        },
        { name: 'St. Louis Bicycle Works', link: '' },
        {
          name: 'St. Louis Catholic Academy',
          link: 'http://www.stlcatholicacademy.org/'
        },
        { name: "St. Louis Children's Hospital Foundation", link: '' },
        { name: 'St. Louis Crisis Nursery', link: '' },
        { name: 'St. Louis HELP', link: '' },
        { name: 'St. Louis LaSalle Leadership, Inc.', link: '' },
        { name: 'St. Louis Society for Physically Disabled', link: '' },
        { name: 'St. Louis University High School', link: '' },
        { name: 'St. Margaret of Scotland Church', link: '' },
        { name: "St. Marien's Church", link: '' },
        { name: 'St. Marienthal Cistercian Convent (Flood)', link: '' },
        { name: "St. Martha's Hall (Youth Board)", link: '' },
        { name: "St. Mary's High School", link: '' },
        { name: 'St. Matthew the Apostle Catholic Church', link: '' },
        { name: 'St. Monica Catholic Church', link: '' },
        { name: 'St. Simon of Cyrene Catholic Church', link: '' },
        { name: 'St. Vincent DePaul Society', link: '' },
        {
          name: 'St. Vincent Home for Children',
          link: 'http://www.saintvincenthome.org/'
        },
        { name: 'St. Wenceslaus Catholic Church', link: '' },
        { name: 'Support Dogs, Inc.', link: '' },
        { name: 'The Apostle of the Sacred Heart of Jesus', link: '' },
        {
          name: 'The Institute for Peace & Justice',
          link: 'http://www.ipj-ppj.org'
        },
        { name: 'The Learning Tree', link: '' },
        { name: 'The Little Bit Foundation', link: '' },
        { name: 'The Lustgarten Foundation', link: '' },
        { name: 'The Marianist Retreat and Conference Center', link: '' },
        { name: 'The Salvation Army Tree of Lights', link: '' },
        { name: 'The Starkloff Disability Institute', link: '' },
        { name: "The Women's Safe House", link: '' },
        { name: 'Therapeutic Horsemanship', link: '' },
        { name: 'Thrive St. Louis', link: '' },
        {
          name: 'Today And Tomorrow Educational Foundation',
          link: 'http://www.archstl.org/ttef'
        },
        { name: 'Tree House Healing Ministry', link: '' },
        { name: 'Trinity Catholic High School', link: '' },
        { name: 'Unity Lutheran Christian Elementary School', link: '' },
        { name: 'Ursuline Academy', link: '' },
        { name: "Variety the Children's Charity of St. Louis", link: '' },
        { name: 'Vincent Gray Academy', link: '' },
        { name: 'Vision for Children at Risk', link: '' },
        {
          name: 'Vitae Care Foundation',
          link: 'http://www.vitaefoundation.org/'
        },
        { name: "Woman's Place", link: 'http://womansplacestl.org/' },
        { name: 'Women in Charge', link: '' },
        { name: "Women's Support and Community Service", link: '' },
        { name: 'Young Catholic Musicians', link: '' },
        { name: 'Youth in Need', link: '' }
      ]
    }
  }
}
</script>

<style>
</style>