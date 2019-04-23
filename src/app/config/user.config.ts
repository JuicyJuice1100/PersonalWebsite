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
      { title: 'Developer', class: 'heading--title element--hover-blue', aboutClass: 'heading--title element--blue',
        description: 'I enjoy developing web applications and learning new technology to further my knowledge as a developer.  Checkout my past projects and experience by clicking the button below or the resume tab above.'
      },
      { title: 'Gamer', class: 'heading--title element--hover-red', aboutClass: 'heading--title element--red',
        description: 'I am competative by nature and a hardcore gamer at heart. My favorite genres are fighting games, horror survival, and souls-bourne.  Feel free to add me on steam or check out my twitch channel via the links below.'
      },
      { title: 'Rock Climber', class: 'heading--title element--hover-yellow', aboutClass: 'heading--title element--yellow',
        description: 'I have only been climbing for about half a year, but I fell in love with it the moment I climbed my first route.  Every route is like a puzzle that I need to solve.  If you ever want to talk about rock climbing or interested in climbing feel free to shoot me a message'
      }
    ]
  },
  about: {
    welcomeMsg: 'Let Me Introduce Myself',
    longDescription: [
      'My name is Justin, but most people call me Juice.',
      'Problem solving is my passion.  Whether it is finding the best way to implement code or figuring out how to top a difficult boulder, I always love the challenge and discovering new solutions.',
      'On my free time I love to continue improving my rock climbing skills and solving boulder problems.  I also enjoy playing video games with friends and occasionally traveling to compete in local video game tournaments.',
    ],
    // subCategories: [
    //   { title: 'Developer', description: ''},
    //   { title: 'Gamer', description: ''},
    //   { title: 'Rock Climber', description: ''}
    // ]
  },
  overview: {
    location: 'Oshkosh, WI',
    job: {
      title: 'Teamcenter Implementations Engineer',
      company: 'Mercury Digital Services'
    }
  },
  resume:  '/assets/files/Latex CS Resume 2019-04-11.pdf',
  portfolio: {

  },
  social: [
    { title: 'Github', url: 'https://github.com/juicyjuice1100/', icon: 'fab fa-github fa-2x', class: 'element--hover-green'},
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/justin-espiritu-b4a277138/', icon: 'fab fa-linkedin-in fa-2x', class: 'element--hover-blue'},
    { title: 'Steam', url: 'https://steamcommunity.com/id/juicyjuice1100/', icon: 'fab fa-steam-symbol fa-2x', class: 'element--hover-yellow'},
    { title: 'Twitch', url: 'https://www.twitch.tv/juicyjuice0011', icon: 'fab fa-twitch fa-2x', class: 'element--hover-red'}
  ]
};
