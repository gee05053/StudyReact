import { Layout, Divider } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';

function Homepage() {
  return(
    <Layout>
      <Header/>
      <Divider/>
      <Navbar/>
    </Layout>
  );
}

export default Homepage;