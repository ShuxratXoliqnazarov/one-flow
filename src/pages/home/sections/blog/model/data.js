import esignatureGuide from '../assets/esignature-guide.png'
import masterDigitalSales from '../assets/master-digital-sales.png'
import signOnline from '../assets/sign-online.png'

export const title = 'And for our next trick…'

export const blogLink = { label: 'Visit our blog', href: '#' }

export const featuredPost = {
  tag: 'Article',
  title: 'A Basic Guide on E-signatures and What Makes Them Legally Binding',
  category: 'E-signature',
  readTime: '11 min read',
  image: esignatureGuide,
  href: '#',
}

export const posts = [
  {
    id: 'sign-online',
    type: 'article',
    theme: 'dark',
    tag: 'Guide',
    title: '29 documents you can sign online in 2021',
    category: 'Contract automation',
    readTime: '18 min read',
    image: signOnline,
    href: '#',
  },
  {
    id: 'sweco',
    type: 'story',
    tag: 'Customer Story',
    title: 'Sweco',
    action: { label: 'Read full story', href: '#' },
  },
  {
    id: 'master-digital-sales',
    type: 'article',
    theme: 'light',
    tag: 'Article',
    title: 'Master digital sales: How to close deals when you’re not allowed to shake hands',
    category: 'Sales',
    readTime: '6 min read',
    image: masterDigitalSales,
    href: '#',
  },
]
