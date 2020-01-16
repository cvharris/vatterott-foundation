export const state = () => ({
  menu: [
    {
      label: 'Home',
      route: '/',
      description: 'High level information about the Vatterott Foundation',
      children: [],
      target: '_self'
    },
    {
      label: 'Who We Help',
      route: '/who-we-help',
      description: "List of all organizations we've helped in recent years",
      children: [],
      target: '_self'
    },
    {
      label: 'Applications',
      route: '/applications',
      description:
        'Information on who qualifies for a grant and how to apply for one',
      children: [],
      target: '_self'
    },
    {
      label: 'VFYB',
      route: '/youth-board',
      description:
        'The Vatterott Foundation Youth Board, with its grants and policies',
      children: [],
      target: '_self'
    },
    {
      label: 'Contact Us',
      route: '#contact-us',
      description: 'Best ways you can reach out and contact us',
      children: [],
      target: '_self'
    },
    {
      label: 'Donate',
      route:
        'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T23XHSVD43HMG',
      description: 'Follow the link to donate',
      children: [],
      target: '_blank'
    },
    {
      label: 'Family Picnic',
      route: '#',
      description: 'Vatterott Family Members can pay for picnic items',
      children: [
        {
          label: 'Family Forest',
          route:
            'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LWC7PTKHY975G&source=url',
          description: 'Buy one of the latest versions of the family forest',
          target: '_blank'
        },
        {
          label: 'Family Picnic',
          route:
            'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J4HAM7HL6Z3A8&source=url',
          description: 'Donate to expenses related to the family picnic',
          target: '_blank'
        },
        {
          label: 'Family Calendar',
          route:
            'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4ZQNQKKFTSQVC&source=url',
          description:
            "Donate to expenses related to next year's family calendar"
        }
      ]
    }
  ]
})
