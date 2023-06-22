import { Card, Row, Col, Button } from 'antd';
function LoginAfterForm (props) {
  const onClickLogout = () => {
    props.onChangeLoginSuccess(false);
  }
  return (
    <Card bodyStyle={{ padding: '3%' }}>
      <Row>
        <Col>소속 : 정보통신중대</Col>
      </Row>
      <Row>
        <Col span={19}>성명 : 중위 김병조</Col>
        <Col span={5}>
          <Button size="small">관리</Button>
        </Col>
      </Row>
      <Card bodyStyle={{ padding: '2%' }} style={{ width: '97%' }}>
        <Row>
          <Col>결제할 문서 건</Col>
        </Row>
        <Row>
          <Col>안읽은 편지 건</Col>
        </Row>
      </Card>
      <Row>
        <Col span={8}>
          <Button size="small">마이 페이지</Button>
        </Col>
        <Col span={9}>
          <Button size="small">개인정보 변경</Button>
        </Col>
        <Col>
          <Button size="small" onClick={onClickLogout}>로그아웃</Button>
        </Col>
      </Row>
    </Card>
  );
}

export default LoginAfterForm;