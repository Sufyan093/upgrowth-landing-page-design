import './index.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import UpgrowthFeatures from './components/UpgrowthFeatures'
import Ourcommunity from './components/Ourcommunity'
import GridSection from './components/GridSection'
import SimplePricing from './components/SimplePricing'
import IntegrationSection from './components/IntegrationSection'
import ConversationSection from './components/ConversationSection'
import Footer from './components/Footer'




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
      <SimplePricing />
      <IntegrationSection />
      <ConversationSection />
      <Footer />
    </>
  );
}

export default App;
