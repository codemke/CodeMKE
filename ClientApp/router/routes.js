import HomePage from 'components/home-page'
import AboutMe from 'components/about-me'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'about-me', path: '/about-me', component: AboutMe, display: 'About', icon: 'list' }
]
