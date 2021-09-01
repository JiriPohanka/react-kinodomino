import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Pages/About'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
