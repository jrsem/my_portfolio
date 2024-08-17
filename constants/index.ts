// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/resume', key: 'resume ', label: 'Resume ' },
    { href: '/works', key: 'work ', label: 'Works ' },
    { href: '/contact', key: 'contact_me', label: 'Contact me' },
  ];

  export const carousel_data=[
    {
      index:0,
      number:'01',
      title:'Frontend project',
      description:'The Electronic Entry and Exit Form (e-FES) is a system that facilitates the formalities of travelers with the migration, health and customs services of the Republic of Haiti.',
      technologies:'Nextjs / tailwindcss / shadcn / zustand / zod',
      image:'/works/efes.PNG',
      url_site:'https://efes-demo.ayiti.digital/fr',
      url_github:'https://github.com/jrsem',
    },
    {
      index:1,
      number:'02',
      title:'Full-stack project',
      description:'The Electronic Entry and Exit Form (e-FES) is a system that facilitates the formalities of travelers with the migration, health and customs services of the Republic of Haiti.',
      technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / appwrite',
      image:'/works/cmrl.PNG',
      url_site:'https://cmrl-rendez-vous-jof1.vercel.app/',
      url_github:'https://github.com/jrsem',
    }
  ]

  export const services=[
    {id:0, label:'Web design',value:'wd'},
    {id:1, label:'Embaded system',value:'es'},
    {id:2, label:'Mobile App',value:'mp'},
    {id:3, label:'Web development',value:'wde'}
  ]