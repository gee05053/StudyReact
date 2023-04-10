import { Form, Input } from 'antd';

function LoginForm() {
  return(
    <Form
      name="basic"
      style={{ maxWidth: 300 }}
    >
      <Form.Item name="ID" label="군번">
        <Input/>
      </Form.Item>
      <Form.Item name="Password" label="비밀번호">
        <Input/>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;