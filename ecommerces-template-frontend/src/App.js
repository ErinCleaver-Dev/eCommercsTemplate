import StyledHeader from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Header } from 'semantic-ui-react'

const App = () => {
  return (
    <>
      <StyledHeader />
      <Body>
          <Header as='h2'>Welcome to Shop</Header>
      </Body>
      <Footer/>
    </>
  );
}

export default App;
