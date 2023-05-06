import { Row, Col } from 'antd';
import cyberReal from '../Image/cyberReal.png';
import cyberTrain from '../Image/cyberTrain.png';

function CyberAlert() {
  return (
    <Row>
      <Col span={12}>
        <img src={cyberReal} alt="cyberReal" style={{ width: "100%" }}/>
      </Col>
      <Col span={12}>
        <img src={cyberTrain} alt="cyberTrain" style={{ width: "100%" }}/>
      </Col>
    </Row>
  );
}

export default CyberAlert;