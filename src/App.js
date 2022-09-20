import './index.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpgrowthFeatures from './components/UpgrowthFeatures'
import Ourcommunity from './components/Ourcommunity'
import GridSection from './components/GridSection'



function App() {
  return (
    <>
      <div className="header_bg">
        <Navbar />
        <Header />
      </div>
      <UpgrowthFeatures />
      <Ourcommunity />
      <GridSection />
    </>
  );
}

export default App;
