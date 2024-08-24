// NAVIGATION
const efes =require("/public/works/efes.PNG")
export const NAV_LINKS_fr = [
    { href: '/', key: 'home', label: 'Accueil' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/resume', key: 'resume ', label: 'CV ' },
    { href: '/works', key: 'work ', label: 'Travaux ' },
    { href: '/contact', key: 'contact_me', label: 'Contactez-moi' },
  ];
export const NAV_LINKS_es = [
    { href: '/', key: 'home', label: 'Inicio' },
    { href: '/services', key: 'services', label: 'Servicios' },
    { href: '/resume', key: 'resume ', label: 'Currículum ' },
    { href: '/works', key: 'work ', label: 'Trabajos ' },
    { href: '/contact', key: 'contact_me', label: 'Contáctame' },
  ];
export const NAV_LINKS_en = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/resume', key: 'resume ', label: 'Resume ' },
    { href: '/works', key: 'work ', label: 'Works ' },
    { href: '/contact', key: 'contact_me', label: 'Contact me' },
  ];
export const NAV_LINKS_pt = [
    { href: '/', key: 'home', label: 'Início' },
    { href: '/services', key: 'services', label: 'Serviços' },
    { href: '/resume', key: 'resume ', label: 'Currículo ' },
    { href: '/works', key: 'work ', label: 'Trabalhos ' },
    { href: '/contact', key: 'contact_me', label: 'Contate-me' },
  ];

export const carousel_data_en=[
    {
      index:0,
      number:'01',
      title:'Frontend project',
      description:'The Electronic Entry and Exit Form (e-FES) is a system that facilitates the formalities of travelers with the migration, health and customs services of the Republic of Haiti.',
      technologies:'Nextjs / tailwindcss / shadcn / zustand / zod',
      image:'/works/efes.webp',
      url_site:'https://efes-demo.ayiti.digital/fr',
      url_github:'https://github.com/jrsem',
    },
    {
      index:1,
      number:'02',
      title:'Full-stack project',
      description:'This app is a Patient Management System that streamlines patient registration, appointment scheduling.',
      technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / appwrite',
      image:'/works/cmrl.webp',
      url_site:'https://cmrl-rendez-vous-jof1.vercel.app/',
      url_github:'https://github.com/jrsem',
    },
    {
      index:2,
      number:'03',
      title:'Back end project',
      description:'This app is a SASS application for e-commerce front end web site  that can manage several front end.',
      technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / postgresql / NextAuth-v5',
      image:'/works/auth.webp',
      url_site:'',
      url_github:'https://github.com/jrsem',
    }
  ]
export const carousel_data_fr = [
  {
    index: 0,
    number: '01',
    title: 'Projet Frontend',
    description: 'Le Formulaire d’Entrée et de Sortie Électronique (e-FES) est un système qui facilite les formalités des voyageurs avec les services de migration, de santé et de douane de la République d’Haïti.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod',
    image: '/works/efes.PNG',
    url_site: 'https://efes-demo.ayiti.digital/fr',
    url_github: 'https://github.com/jrsem'
  },
  {
    index: 1,
    number: '02',
    title: 'Projet Full-stack',
    description: 'Cette application est un Système de Gestion des Patients qui simplifie l’enregistrement des patients et la prise de rendez-vous.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod / appwrite',
    image: '/works/cmrl.PNG',
    url_site: 'https://cmrl-rendez-vous-jof1.vercel.app/',
    url_github: 'https://github.com/jrsem'
  },
  {
    index:2,
    number:'03',
    title:'Back end project',
    description:"Cette application est une application SASS pour les sites web front end d'e-commerce qui peut gérer plusieurs front end.",
    technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / postgresql / NextAuth-v5',
    image:'/works/auth.webp',
    url_site:'',
    url_github:'https://github.com/jrsem',
  }
]

export const carousel_data_es = [
  {
    index: 0,
    number: '01',
    title: 'Proyecto Frontend',
    description: 'Esta aplicación es una aplicación SASS para front-end de comercio electrónico que puede gestionar varios front-end de comercio electrónico.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod',
    image: '/works/efes.PNG',
    url_site: 'https://efes-demo.ayiti.digital/fr',
    url_github: 'https://github.com/jrsem'
  },
  {
    index: 1,
    number: '02',
    title: 'Proyecto Full-stack',
    description: 'Esta aplicación es un Sistema de Gestión de Pacientes que optimiza el registro de pacientes y la programación de citas.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod / appwrite',
    image: '/works/cmrl.PNG',
    url_site: 'https://cmrl-rendez-vous-jof1.vercel.app/',
    url_github: 'https://github.com/jrsem'
  },
  {
    index:2,
    number:'03',
    title:'Back end project',
    description:'Esta aplicación es una aplicación SASS para front-end de comercio electrónico que puede gestionar varios front-end.',
    technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / postgresql / NextAuth-v5',
    image:'/works/auth.webp',
    url_site:'',
    url_github:'https://github.com/jrsem',
  }
]

export const carousel_data_pt = [
  {
    index: 0,
    number: '01',
    title: 'Projeto Frontend',
    description: 'O Formulário Eletrônico de Entrada e Saída (e-FES) é um sistema que facilita as formalidades dos viajantes com os serviços de migração, saúde e alfândega da República do Haiti.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod',
    image: '/works/efes.PNG',
    url_site: 'https://efes-demo.ayiti.digital/fr',
    url_github: 'https://github.com/jrsem'
  },
  {
    index: 1,
    number: '02',
    title: 'Projeto Full-stack',
    description: 'Este aplicativo é um Sistema de Gestão de Pacientes que otimiza o registro de pacientes e a programação de consultas.',
    technologies: 'Nextjs / tailwindcss / shadcn / zustand / zod / appwrite',
    image: '/works/cmrl.PNG',
    url_site: 'https://cmrl-rendez-vous-jof1.vercel.app/',
    url_github: 'https://github.com/jrsem'
  },
  {
    index:2,
    number:'03',
    title:'Projeto Back end',
    description:'Esta aplicação é uma aplicação SASS para sítios Web de front-end de comércio eletrónico que pode gerir vários front-ends de comércio eletrónico.',
    technologies:'Nextjs / tailwindcss / shadcn / zustand / zod / postgresql / NextAuth-v5',
    image:'/works/auth.webp',
    url_site:'',
    url_github:'https://github.com/jrsem',
  }
]

  export const services_en=[
    // {id:0, label:'Web design',value:'wd'},
    {id:1, label:'Embaded system',value:'Embaded system'},
    {id:2, label:'Mobile App',value:'Mobile App'},
    {id:3, label:'Web development',value:'Web development'}
  ]
  export const services_fr = [
    // {id: 0, label: 'Conception de sites web', value: 'wd'},
    {id: 1, label: 'Système embarqué', value: 'Embaded system'},
    {id: 2, label: 'Application mobile', value: 'Mobile App'},
    {id: 3, label: 'Développement web', value: 'Web development'}
  ]
  
  export const services_es = [
    // {id: 0, label: 'Diseño web', value: 'wd'},
    {id: 1, label: 'Sistema embebido', value: 'Embaded system'},
    {id: 2, label: 'Aplicación móvil', value: 'Mobile App'},
    {id: 3, label: 'Desarrollo web', value: 'Web development'}
  ]
  
  export const services_pt = [
    // {id: 0, label: 'Design web', value: 'wd'},
    {id: 1, label: 'Sistema embarcado', value: 'Embaded system'},
    {id: 2, label: 'Aplicativo móvel', value: 'Mobile App'},
    {id: 3, label: 'Desenvolvimento web', value: 'Web development'}
  ]
  
  export const email_en="Your email has been send, Thank you for contact us!"
  export const email_fr="Votre email a été envoyé, merci de nous avoir contacté !"
  export const email_pt="Seu e-mail foi enviado. Obrigado por entrar em contato conosco!"
  export const email_es="Su correo electrónico ha sido enviado. ¡Gracias por ponerse en contacto con nosotros!"
  