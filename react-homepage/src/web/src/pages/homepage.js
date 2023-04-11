import { Row, Col } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';
import LoginForm from '../components/loginForm';

function Homepage() {
  return(
    <div>
      <Header/>
      <Navbar/>
      <div>
        {"\u00A0"}
      </div>
      <Row>
        <Col span={2}/>
        <Col span={20}>
          <Row>
            <Col span={5}>
              <LoginForm/>
            </Col>
          </Row>
        </Col>
        <Col span={2}/>
      </Row>
    </div>
  );
}

export default Homepage;