import { Footer, Navbar } from '../../components';
// eslint-disable-next-line import/named
import { Aboutus } from '../../components';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">

    <Navbar />
    <Aboutus/>
    <Footer />
    
  </div>
);

export default Page;