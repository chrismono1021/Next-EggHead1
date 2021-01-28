const homepageData = [
  {
    id: 'jumbotron',
    byline: 'New Course',
    title: 'Containerize Full-Stack JavaScript Applications with Docker',
    instructor: {
      name: 'Joel Lord',
      slug: 'joel-lord',
      path: '/q/resources-by-joel-lord',
      image:
        'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/202/square_128/profile-no-bg-small.png',
    },
    description:
      'One of the most useful ways to get your head around Docker is to see it in action. Follow along with Joel Lord as he works through the process of preparing an application to run in separate containers for the frontend and backend of an application that searches for gifs and re-encodes them with a caption supplied by the user.',
    image: {
      src:
        'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/410/102/full/egh_intro-to-docker.png',
      alt:
        'Stylized illustration of colorful shipping containers with a docker logo',
    },
    path:
      '/playlists/containerize-full-stack-javascript-applications-with-docker-30a8',
  },
  {
    id: 'video',
    name: 'Modern Web Development',
    title: 'Full Stack Development in the Era of Serverless Computing',
    description:
      'Learn a workflow that allows front end developers to build full stack applications using JavaScript by taking advantage of managed services, implementing real-world features like authentication, managed GraphQL APIs, serverless Lambda functions, & chatbots using a CLI based workflow.',
    instructor: 'nader dabit',
    instructor_path: '/q/resources-by-nader-dabit',
    path:
      '/talks/egghead-full-stack-development-in-the-era-of-serverless-computing',
    poster:
      'https://dcv19h61vib2d.cloudfront.net/thumbs/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L.jpg',
    hls_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L/hls/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L.m3u8',

    dash_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L/dash/egghead-nader-dabit-full-stack-development-in-the-era-of-serverless-computing-B1UJE7z_L.mpd',

    subtitlesUrl:
      'https://app.egghead.io/api/v1/lessons/egghead-full-stack-development-in-the-era-of-serverless-computing/subtitles',
  },
  {
    id: 'featured',
    title: 'Featured',
    resources: [
      {
        name: 'Fresh Course',
        title:
          'Build a Corgi Up-boop Web App with Netlify Serverless Functions and Hasura',
        byline: 'Jason Lengstorf・1h 27m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/414/202/thumb/EGH_NetlifyServerlessFunction_Final.png',
        path:
          '/playlists/build-a-corgi-up-boop-web-app-with-netlify-serverless-functions-and-hasura-553c',
        slug:
          'build-a-corgi-up-boop-web-app-with-netlify-serverless-functions-and-hasura-553c',
      },
      {
        name: 'Featured Course',
        title: 'Scale React Development with NX',
        byline: 'Juri Strumpflohner',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/405/344/full/EGH_ScalingReactNx.png',
        path: '/playlists/scale-react-development-with-nx-4038',
      },
      {
        name: 'Cutting Edge',
        title: 'Introduction to Cloudflare Workers',
        byline: 'Free course by Kristian Freeman',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/418/892/square_480/EGH_IntroCloudFlareWorkers_Final.png',
        path: '/playlists/introduction-to-cloudflare-workers-5aa3',
      },
      {
        name: 'Something Different',
        title: 'Professor Frisby Introduces Composable Functional JavaScript',
        byline: 'Brian Lonsdorf・1h 50m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/072/thumb/EGH_ComposableJS_Final.png',
        path:
          '/courses/professor-frisby-introduces-composable-functional-javascript',
        slug: 'professor-frisby-introduces-composable-functional-javascript',
        description:
          "This course teaches the ubiquitous abstractions for modeling pure functional programs. Functional languages have adopted these algebraic constructs across the board as a way to compose applications in a principled way. \r\n\r\nWe can do the same in JavaScript. While the subject matter will move beyond the functional programming basics, no previous knowledge of functional programming is required. You'll start composing functionality before you know it.",
      },
    ],
  },
  {
    id: 'getStarted',
    name: 'Introductions',
    title: 'Start Learning Here',
    description:
      'These courses will get you started building real-world applications with these tools. They are all excellent introductions if you want to learn something new today.',
    resources: [
      {
        title: 'Up and running with Svelte 3',
        byline: 'Tomasz Łakomy・26m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/thumb/svelte-logo-vertical.png',
        path: '/playlists/getting-started-with-svelte-3-05a8541a',
      },
      {
        title: 'Develop Basic Web Apps with Vue.js',
        byline: 'Greg Thoman・16m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/083/thumb/EGH_VueJS_Final.png',
        path: '/courses/develop-basic-web-apps-with-vue-js',
      },
      {
        title: "The Beginner's Guide to React",
        byline: 'Kent C. Dodds・2h 27m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/160/thumb/EGH_BeginnersReact2.png',
        path: '/courses/the-beginner-s-guide-to-react',
      },
      {
        title: 'Write Your First Program with the Rust Language',
        byline: 'Pascal Precht・19m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/448/thumb/EGH_BuildaRustApp_Final.png',
        path: '/courses/write-your-first-program-with-the-rust-language',
      },
      {
        title:
          'Sprinkle declarative, reactive behaviour on your HTML with Alpine JS',
        byline: 'Simon Vrachliotis・17m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/286/thumb/alpinejs.png',
        path:
          '/playlists/sprinkle-declarative-reactive-behaviour-on-your-html-with-alpine-js-5f8b',
      },
    ],
  },
  {
    id: 'freeCourses',
    name: 'Free Courses',
    title: 'Learn Something New',
    description: '',
    resources: [
      {
        title: 'Introduction to State Machines Using XState',
        byline: 'Kyle Shevlin・53m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/403/thumb/IntroxState_1000.png',
        path: '/courses/introduction-to-state-machines-using-xstate',
      },
      {
        title: 'Immutable JavaScript Data Structures with Immer',
        byline: 'Michel Weststrate・59m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/312/thumb/ImmuateableImmer_Final.png',
        path: '/courses/immutable-javascript-data-structures-with-immer',
      },
      {
        title: 'Practical Git for Everyday Professional Use',
        byline: 'Trevor Miller・1h ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/050/thumb/egghead-practical-git-course.png',
        path: '/courses/practical-git-for-everyday-professional-use',
      },
      {
        title: 'Develop Accessible Web Apps with React',
        byline: 'Erin Doyle・88m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/412/thumb/AccessibleReact_1000.png',

        path: '/courses/develop-accessible-web-apps-with-react',
      },
      {
        title:
          'Scalable Offline-Ready GraphQL Applications with AWS AppSync & React',
        byline: 'nader dabit・64m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/211/thumb/EGH_GraphQL-AWs_Final.png',

        path:
          '/courses/scalable-offline-ready-graphql-applications-with-aws-appsync-react',
      },
      {
        title: 'GraphQL Data in React with Apollo Client',
        byline: 'Nik Graf・23m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/231/thumb/EGH_Apollo-GraphQL-React_Final.png',

        path: '/courses/graphql-data-in-react-with-apollo-client',
      },
    ],
  },
  {
    id: 'devEssentials',
    name: 'Practice Makes Perfect',
    title: 'Web Development Essentials',
    description: '',
    resources: [
      {
        title: 'Web Security Essentials: MITM, CSRF, and XSS',
        byline: 'Mike Sherov・50m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/413/square_280/EGH_WebSecurity.png',
        path: '/courses/web-security-essentials-mitm-csrf-and-xss',
      },
      {
        title: 'How to Contribute to an Open Source Project on GitHub',
        byline: 'Kent C. Dodds・38m ・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/032/thumb/EGH_JSopensource_final.png',
        path: '/courses/how-to-contribute-to-an-open-source-project-on-github',
      },
      {
        title: 'Fix Common Git Mistakes',
        byline: 'Chris Achard・44m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/401/full/GitMistakes_1000.png',
        path: '/courses/fix-common-git-mistakes',
      },
      {
        title: 'GraphQL Query Language',
        byline: 'Eve Porcello・30m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/236/full/EGH_GraphQLQuery_Final.png',
        path: '/courses/graphql-query-language',
      },
      {
        title: 'Build an App with the AWS Cloud Development Kit',
        byline: 'Tomasz Łakomy・1h 4m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/450/thumb/EGH_AWS-TS.png',

        path: '/courses/build-an-app-with-the-aws-cloud-development-kit',
      },
      {
        title: 'Debug the DOM in Chrome with the Devtools Elements panel',
        byline: 'Mykola Bilokonsky・25m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/060/full/EGH_Chrome_Elements.png',
        path: '/courses/using-chrome-developer-tools-elements',
      },
    ],
  },
  {
    id: 'stateManagement',
    name: 'Research Panel',
    title: 'React State Management in 2021',
    path: '/playlists/react-state-management-in-2021-6732',
    description: '',
    resources: [
      {
        title: 'Using Redux in Modern React Apps with Mark Erikson',
        byline: 'Mark Erikson & Joel Hooks・90m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/thumb/redux.png',
        path:
          '/lessons/react-using-redux-in-modern-react-apps-with-mark-erikson?pl=react-state-management-2020-6bec',
      },
      {
        title: 'XState for State Management in React Apps with David Khourshid',
        byline: 'David Khourshid & Joel Hooks・55m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/282/thumb/xstate.png',
        path:
          '/lessons/react-xstate-for-state-management-in-react-apps-with-david-khourshid?pl=react-state-management-2020-6bec',
      },
      {
        title: 'State Management in React with Chance Strickland',
        byline: 'Chance Strickland & Joel Hooks・46m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          '/lessons/react-state-management-in-react-with-chance-strickland?pl=react-state-management-2020-6bec',
      },
      {
        title:
          'Using Recoil to Manage Orthogonal State in React Apps with David McCabe',
        byline: 'David McCabe & Joel Hooks・34m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          '/lessons/react-using-recoil-to-manage-orthogonal-state-in-react-apps-with-david-mccabe?pl=react-state-management-2020-6bec',
      },
      {
        title: 'Managing Complex State in React with Jared Palmer',
        byline: 'Jared Palmer & Joel Hooks・1h 28m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          '/lessons/react-managing-complex-state-in-react-with-jared-palmer?pl=react-state-management-2020-6bec',
      },
    ],
  },
  {
    id: 'sideProject',
    name: 'Weekend Side Project',
    title: 'Build a Video Chat App with Twilio and Gatsby',
    path: '/courses/build-a-video-chat-app-with-twilio-and-gatsby',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/395/full/TwilioGatsby_Final.png',
    byline: 'Jason Lengstorf',
    description:
      'In this workshop, Jason Lengstorf will take you from an empty project folder all the way through deployment of a Twilio-powered video chat app built on Gatsby.',
  },
  {
    id: 'buildInPublic',
    name: 'Build in Public',
    title: 'How to Livestream Code and Design on Twitch',
    path: '/playlists/how-to-livestream-code-and-design-on-twitch-6646',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/292/full/output-onlinepngtools.png',
    byline: 'Chris Biscardi',
    description:
      'Demonstrate technical proficiency by building in public. This course will take you from creating a Twitch account, all the way through setting up OBS, creating scenes, and defining an ultra-efficient workflow.',
  },
  {
    id: 'portfolioProject',
    name: 'Portfolio Project',
    title: 'Create an eCommerce Store with Next.js and Stripe Checkout',
    path:
      '/projects/create-an-ecommerce-store-with-next-js-and-stripe-checkout',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/412/781/square_480/ecommerce-stripe-next.png',
    byline: 'Colby Fayock',
    description:
      'Build a modern eCommerce store with the best-in-class tools available to web developers to add to your portfolio.',
  },
  {
    id: 'portfolioBlog',
    name: 'Portfolio Blog',
    title:
      'Build a site from scratch with Next.js, TypeScript, Emotion and Netlify',
    path:
      '/playlists/build-a-blog-with-next-js-typescript-emotion-and-netlify-adcc',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/387/163/square_480/netlify-ts.png',
    byline: 'Tomasz Łakomy',
    description:
      'Use cutting-edge tools and leverage the best developer experience provided by Next.js to build your developer portfolio blog.',
  },
  {
    id: 'advancedCourse',
    name: 'Mind-Expanding',
    title: 'Composing Closures and Callbacks in JavaScript',
    path: '/playlists/composing-closures-and-callbacks-in-javascript-1223',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/402/036/full/EGH_ComposingCallbacks_Final.png',
    byline: 'John Lindquist',
    description:
      'This course is for aspiring lead developers. John Lindquist guides you from a blank JavaScript file all the way through creating a library of reusable functions, solving Callback Hell with composition, implementing debouncing, and building a word game among several other examples.',
  },
  {
    id: 'mdxConf',
    name: 'Future of Markdown',
    title: 'MDX Conf 2020',
    path: '/playlists/mdx-conf-3fc2',
    byline: 'Chris Biscardi',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/289/full/mdx.png',
    description:
      'MDX has grown rapidly since the first commit two and a half years ago. Learn how MDX increases developer productivity, improves educational content authoring, and even peek behind the curtains to see how MDX works.',
    resources: [
      {
        title: 'Demystifying MDX',
        byline: 'Cole Bremis',
        path: '/talks/mdx-demystifying-mdx',
      },
      {
        title: 'MDX v2 Syntax',
        byline: 'Laurie Barth',
        path: '/talks/egghead-mdx-v2-syntax',
      },
      {
        title: 'MDX and VueJS/NuxtJS',
        byline: 'Cole Bremis',
        path: '/talks/mdx-mdx-and-vuejs-nuxtjs',
      },
      {
        title: 'Migrating to MDX',
        byline: 'Monica Powell',
        path: '/talks/mdx-migrating-to-mdx',
      },
      {
        title: 'Personal Site Playground with MDX',
        byline: 'Prince Wilson',
        path: '/talks/mdx-personal-site-playgrounds-with-mdx',
      },
      {
        title: 'The X in MDX',
        byline: 'Rodrigo Pombo',
        path: '/talks/mdx-the-x-in-mdx',
      },
      {
        title: 'Digital Gardening with MDX Magic',
        byline: 'Kathleen McMahon',
        path: '/talks/mdx-digital-gardening-with-mdx-magic',
      },
    ],
  },
  {
    id: 'topics',
    name: 'Popular Topics',
    resources: [
      {
        title: 'React',
        path: '/q/react',
        slug: 'react',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
      },
      {
        title: 'JavaScript',
        path: '/q/javascript',
        slug: 'javascript',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/thumb/javascriptlang.png',
      },
      {
        title: 'Angular',
        path: '/q/angular',
        slug: 'angular',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png',
      },
      {
        title: 'Node',
        path: '/q/node',
        slug: 'node',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/thumb/nodejslogo.png',
      },
      {
        title: 'TypeScript',
        path: '/q/typescript',
        slug: 'typescript',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/thumb/typescriptlang.png',
      },
      {
        title: 'GraphQL',
        path: '/q/graphql',
        slug: 'graphql',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/034/thumb/graphqllogo.png',
      },
      {
        title: 'AWS',
        path: '/q/aws',
        slug: 'aws',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/090/thumb/aws.png',
      },
      {
        title: 'Next.js',
        path: '/q/next',
        slug: 'next',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/074/thumb/nextjs.png',
      },
      // {
      //   title: 'Redux',
      //   path: '/q/redux',
      //   image:
      //     'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/thumb/redux.png',
      // },
    ],
  },
  {
    id: 'swag',
    name: 'swag',
    title: '',
    path: 'https://store.egghead.io',
    resources: [
      {
        title: 'GraphQL Query Language Poster',
        path: 'https://store.egghead.io/product/poster-graphql-query-language',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606472163/next.egghead.io/store/poster-graphql-query-language.png',
      },
      {
        title: 'egghead Crewneck',
        path: 'https://store.egghead.io/product/egghead-crewneck',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606474619/next.egghead.io/store/egghead-crewneck.png',
      },
      // {
      //   title: 'Shirt',
      //   path: 'https://store.egghead.io/product/egghead-shirt',
      //   image:
      //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606473230/next.egghead.io/store/egghead-shirt.jpg',
      // },
      // {
      //   title: 'Beanie',
      //   path: 'https://store.egghead.io/product/knit-beanie',
      //   image:
      //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606472232/next.egghead.io/store/knit-beanie.jpg',
      // },
    ],
  },
]

export default homepageData
