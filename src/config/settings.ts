const SITE_URL = 'https://aturlima.com'
const SITE_TITLE = 'Atur Lima'
const SITE_DESC = 'Olá 👋 me chamo Arthur Lima, sou um desenvolvedor web e este é um cantinho da internet que vou usar pra escrever um pouco sobre mim e coisas que eu gosto.'
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
    {
      label: 'Linkedin',
      url: 'https://linkedin.com/in/arthur-conrado-lima/',
      external: true,
    },
    { label: 'Notas', url: '/notes' },
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
    },
  },
}

export default SETTINGS
