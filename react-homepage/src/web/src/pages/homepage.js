import { Row, Col } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';
import LoginForm from '../components/loginForm';
import FavoritesService from '../components/favoritesService';
import Notice from '../components/notice';
import Vanner from '../components/vanner';
import Weather from '../components/weather';
import CyberAlert from '../components/cyberAlert';
import talk from '../Image/talk.png';
import news from '../Image/news.jpg';
import corona19 from '../Image/corona19.png';
import dream from '../Image/Dream.png';
import safe5eng from '../Image/safe5eng.png';

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
              <img src={talk} alt="talk"/>
            </Col>
            <Col span={12}>
              <img src={news} alt="news"/>
            </Col>
            <Col span={6}>
              <Vanner/>
            </Col>
            <Col span={1}/>
          </Row>
        </Col>
        <Col span={2}/>
        {"\u00A0"}
      </Row>
      <Row>
        <Col span={2}/>
        <Col span={20}>
          <Row>
            <Col span={5}>
              <FavoritesService/>
              <img src={corona19} alt="corona19" style={{ width: "100%" }}/>
            </Col>
            <Col span={12} style={{ paddingLeft: "1%" }}>
              <Notice/>
            </Col>
            <Col span={6}>
              <Weather/>
              <div>
                {"\u00A0"}
              </div>
              <CyberAlert/>
              <img src={dream} alt="dream" style={{ width: "100%", height: "15%" }}/>
              <img src={safe5eng} alt="safe5eng" style={{ width: "100%", height: "15%" }}/>
            </Col>
            <Col span={2}/>
          </Row>
        </Col>
        <Col span={3}/>
      </Row>
      <Row>
        주요업무
        업무참고
        정보마당
        신고/상담
      </Row>
    </div>
  );
}

export default Homepage;