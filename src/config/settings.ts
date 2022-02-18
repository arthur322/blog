const SITE_URL = 'https://aturlima.com'
const SITE_TITLE = 'Atur Lima'
const SITE_DESC = 'Olá 👋  meu nome é Arthur Lima e esse é meu mini site.'
const SITE_IMG = `${SITE_URL}/eu_cara.webp`

const SETTINGS = {
  siteTitle: SITE_TITLE,
  siteDescription: SITE_DESC,
  headerLinks: [
    { label: 'Home', url: '/' },
    {
      label: 'Twitter',
      url: 'https://twitter.com/itsmenatalino',
      external: true,
    },
    { label: 'Github', url: 'https://github.com/arthur322', external: true },
    { label: 'Blog', url: '/blog' },
  ],
  SEO: {
    canonical: SITE_URL,
    openGraph: {
      url: SITE_URL,
      title: SITE_TITLE,
      description: SITE_DESC,
      images: [
        {
          url: SITE_IMG,
          width: 800,
          height: 600,
          alt: "Arthur's profile image",
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
        handle: '@itsmenatalino',
        cardType: 'summary_large_image',
      }
  },
}

export default SETTINGS
