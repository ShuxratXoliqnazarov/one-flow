import paddle from '../assets/paddle.png'

// Контент секции с табами. В макете нарисован только таб «Collaborate» —
// тексты остальных табов написаны в том же стиле, при желании замените.
export const tabs = [
  {
    id: 'create',
    label: 'Create',
    title: 'Create',
    text: 'Build contracts from smart templates in minutes. No copy-paste chaos.',
    features: ['Use smart templates', 'Add your branding', 'Reuse content blocks'],
    image: paddle,
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    title: 'Collaborate',
    text: 'Work together on one version in real-time. No hocus pocus.',
    features: ['Edit live', 'Make fields interactive', 'Stay one step ahead'],
    image: paddle,
  },
  {
    id: 'sign',
    label: 'Sign',
    title: 'Sign',
    text: 'Sign anywhere, on any device, with legally binding e-signatures.',
    features: ['eSign, SMS or BankID', 'Sign on any device', 'Legally binding'],
    image: paddle,
  },
  {
    id: 'manage',
    label: 'Manage',
    title: 'Manage',
    text: 'Keep every contract in one place and never miss a renewal again.',
    features: ['One secure archive', 'Smart reminders', 'Powerful search'],
    image: paddle,
  },
  {
    id: 'analyze',
    label: 'Analyze',
    title: 'Analyze',
    text: 'Get real-time insights into your contracts and close deals faster.',
    features: ['Track every step', 'Spot bottlenecks', 'Measure results'],
    image: paddle,
  },
  {
    id: 'integrate',
    label: 'Integrate',
    title: 'Integrate',
    text: 'Connect Oneflow with the tools your team already loves.',
    features: ['CRM integrations', 'Open API', 'Automated workflows'],
    image: paddle,
  },
]

export const action = { label: 'Learn more', href: '#' }
