import { useState } from 'react';
import { Button, Card, Input, Row, Col } from 'antd';

function LoginBeforeForm(props) {
  const [ id, setId ] = useState("");
  const [ pw, setPw ] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
  }

  const onClickLoginButton = () => {
    if (id === "" || pw === "") {
      alert("아이디 또는 패스워드를 입력하세요.");
    } else if (id === "admin" && pw === "admin") {
      props.onChangeLoginSuccess(true);
    } else {
      alert("아이디 또는 패스워드가 올바르지 않습니다.")
    }
  }

  return(
    <Card bodyStyle={{ padding: '3%' }}>
      <Row align="bottom">
        <Col span={16}>
          <Input placeholder='군번' onChange={onChangeId} style={{ width:"100%" }}/>
          <Input.Password placeholder='육군 이메일 비밀번호' onChange={onChangePw} style={{ width:"100%" }}/>
        </Col>
        <Col span={1}/>
        <Col span={7}>
          <Button style={{ height: 64 }} onClick={onClickLoginButton}>
              로그인
          </Button>
        </Col>
      </Row>
      <Row gutter={21}>
        <Col span={15}>
          <Button type='link' size='small'>
              비밀번호 초기화
          </Button>
        </Col>
        <Col span={9}>
          <Button type='link' size='small'>
              사용자 등록
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default LoginBeforeForm;