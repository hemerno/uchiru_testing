import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* Components */
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Home from './routes/Home';
import Favourites from './routes/Favourites';
import ErrorPage from './routes/ErrorPage';

export type CatType = {
  readonly id: string;
  readonly url: string;
  readonly width: number;
  readonly heigth: number;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/favourites" exact component={Favourites}></Route>
          <Route path="/" component={ErrorPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
