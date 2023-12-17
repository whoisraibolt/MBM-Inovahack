import logo from './logo.svg';
import './App.css';
import { About } from './components/about';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Team } from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navigation> </Navigation>
          <Header></Header>
          <Features></Features>
          <About></About>
          <Services></Services>
          <Gallery></Gallery>
          <Testimonials></Testimonials>
          <Team></Team>
      </header>
    </div>
  );
}

export default App;
