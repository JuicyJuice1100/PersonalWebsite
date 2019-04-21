// tslint:disable: max-line-length
export const UserConfig = {
  info: {
    email: 'Espiritu.L.Justin@gmail.com',
    name: 'Justin L. Espiritu',
    picture: {
      class: 'overview--profile',
      src: '/assets/images/profile.jpg',
      alt: name
    }
  },
  home: {
    // TODO:  Will have these be links once I get more content
    titles: [
      { title: 'Developer', class: 'element--hover-blue' },
      { title: 'Gamer', class: 'element--hover-red' },
      { title: 'Rock Climber', class: 'element--hover-yellow' }
    ]
  },
  about: {
    welcomeMsg: 'About me',
    longDescription: [
      'I am a software developer who specializes in creating web applications.',
      'Problem solving is my passion.  Whether it is finding the best way to implement code or figuring out how to top a difficult boulder, I always love the challenge and discovering new solutions.',
      'On my freetime I love to continue improving my rockclimbing skills and solving boulder problems.  I also enjoy playing video games with friends and occasionally traveling to compete in local video game tournaments.',
    ],
    developer: '',
    gamer: '',
    rockclimbing: ''
  },
  overview: {
    location: 'Oshkosh, WI',
    job: {
      title: 'Teamcenter Implementations Engineer',
      company: 'Mercury Digital Services'
    }
  },
  portfolio: {

  },
  social: [
    { title: 'Github', url: 'https://github.com/juicyjuice1100/', icon: 'fab fa-github fa-2x', class: 'element--hover-green'},
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/justin-espiritu-b4a277138/', icon: 'fab fa-linkedin-in fa-2x', class: 'element--hover-blue'},
    { title: 'Steam', url: 'https://steamcommunity.com/id/juicyjuice1100/', icon: 'fab fa-steam-symbol fa-2x', class: 'element--hover-yellow'}
  ]
};
