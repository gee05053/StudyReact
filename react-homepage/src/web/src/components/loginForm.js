import { Button, Card, Input, Row, Col } from 'antd';

function LoginForm() {
  return(
    <Card>
      <Row>
        <Col span={17}>
          <Input placeholder='군번' style={{ width:180 }}/>
          <Input.Password placeholder='육군 이메일 비밀번호' style={{ width:180 }}/>
        </Col>
        <Col>
          <Button style={{ height: 64}}>
              로그인
          </Button>
        </Col>
      </Row>
      <Button type="link" size='small'>
          비밀번호 초기화
      </Button>
    </Card>
  );
}

export default LoginForm;