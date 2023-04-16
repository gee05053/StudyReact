import { Button, Card, Input, Row, Col } from 'antd';

function LoginForm() {
  return(
    <Card style={{width: "100%"}}>
      <Row gutter={[20,60]}>
        <Col span={16}>
          <Input placeholder='군번' style={{ width:"103%" }}/>
          <Input.Password placeholder='육군 이메일 비밀번호' style={{ width:"103%" }}/>
        </Col>
        <Col span={8}>
          <Button style={{ height: 64}}>
              로그인
          </Button>
        </Col>
      </Row>
      <Row gutter={25}>
        <Col span={15}>
          <Button type="link" size='small'>
              비밀번호 초기화
          </Button>
        </Col>
        <Col span={9}>
          <Button type="link" size='small'>
              사용자 등록
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default LoginForm;