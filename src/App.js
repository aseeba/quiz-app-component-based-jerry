import CreatePage from './components/CreatePage'
import Grid from './components/Grid'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'

export default function App() {
  const cards = []

  const header = Header('Quiz App')
  const homePage = HomePage(cards)

  const createPage = CreatePage(onSubmit)
  createPage.hide()

  const navigation = Navigation(onNavigate)

  const grid = Grid(header, homePage, createPage, navigation)
  document.body.append(grid)

  function onSubmit(question, answer) {
    cards.push({ question, answer })
    homePage.setCards(cards)
  }

  function onNavigate(text) {
    if (text === 'Home') {
      homePage.show()
      createPage.hide()
      header.setText('Quiz App')
    }

    if (text === 'Create') {
      homePage.hide()
      createPage.show()
      header.setText('Create cards')
    }
  }
}
