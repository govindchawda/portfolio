import './App.css';
import Banner from './componants/Banner';
import ContactUs from './componants/ContactUs';
import Navbar from './componants/Navbar';
import PortfolioHome from './componants/PortfolioHome';
import Services from './componants/Services';

function App() {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <PortfolioHome/>
    <ContactUs/>
    </>
  );
}

export default App;
