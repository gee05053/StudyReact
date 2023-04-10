import { Layout, Divider } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';
import LoginForm from '../components/loginForm';

function Homepage() {
  return(
    <Layout>
      <Header/>
      <Divider/>
      <Navbar/>
      <LoginForm/>
    </Layout>
  );
}

export default Homepage;