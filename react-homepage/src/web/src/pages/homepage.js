import { Row, Col } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';
import LoginForm from '../components/loginForm';
import FavoritesService from '../components/favoritesService';
import Notice from '../components/notice';

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
            <Col span={12}>
              여단 배경
            </Col>
            <Col span={7}>
              여단 배너
            </Col>
          </Row>
        </Col>
        <Col span={2}/>
        {"\u00A0"}
      </Row>
      <Row>
        <Col span={2}/>
        <Col span={20}>
          <Row gutter={16}>
            <Col span={5}>
              <FavoritesService/>
            </Col>
            <Col span={12}>
              <Notice/>
            </Col>
            <Col span={7}>
              날씨
              사이버대응태세
              배너1
              배너2
            </Col>
          </Row>
        </Col>
        <Col span={3}/>
      </Row>
    </div>
  );
}

export default Homepage;