import { useState } from 'react';
import { Row, Col } from 'antd';
import Header from '../components/header';
import Navbar from '../components/navbar';
import LoginBeforeForm from '../components/login/loginBeforeForm';
import LoginAfterForm from '../components/login/loginAfterFrom';
import FavoritesService from '../components/favoritesService';
import Notice from '../components/notice';
import Vanner from '../components/vanner';
import Weather from '../components/weather';
import CyberAlert from '../components/cyberAlert';
import WorksMenu from '../components/worksMenu';
import talk from '../Image/talk.png';
import news from '../Image/news.jpg';
import corona19 from '../Image/corona19.png';
import dream from '../Image/Dream.png';
import safe5eng from '../Image/safe5eng.png';

function Homepage() {
  const [ isLoginSuccess, setLoginSuccess ] = useState(false);
  const onChangeLoginSuccess = (bool) => {
    setLoginSuccess(bool);
  }
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
              {isLoginSuccess ? <LoginAfterForm onChangeLoginSuccess={onChangeLoginSuccess}/> : <LoginBeforeForm onChangeLoginSuccess={onChangeLoginSuccess}/>}
              <img src={talk} alt="talk" style={{ width: '100%', height: '100%' }} />
            </Col>
            <Col span={11}>
              <img src={news} alt="news" style={{ width: '100%', height: '100%' }}/>
            </Col>
            <Col span={6}>
              <Vanner/>
            </Col>
            <Col span={2}/>
          </Row>
        </Col>
        <Col span={2}/>
      </Row>
      <Row>
        <Col span={2}/>
        <Col span={20}>
          <Row>
            <Col span={5}>
              <FavoritesService/>
              <img src={corona19} alt="corona19" style={{ width: "100%" }}/>
            </Col>
            <Col span={11} style={{ paddingLeft: '0.5%', paddingRight: '0.5%' }}>
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
        <Col span={2}/>
      </Row>
      <Row>
        <Col span={2}/>
        <Col span={20}>
          <WorksMenu/>
        </Col>
        <Col span={2}/>
      </Row>
    </div>
  );
}

export default Homepage;