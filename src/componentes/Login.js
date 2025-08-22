import { Button, Checkbox, Divider, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.username === "a" && values.password === "1") {
      if (values.remember === true) {
        localStorage.setItem("username", "a");
        localStorage.setItem("password", "1");
      }
      localStorage.setItem("isLogin", "true");
      navigate("/dashboard");
    } else {
      message.error("Username or Password incorrect!!!");
    }
  };

  return (
    <div className="container">
      <div className="login">
      <Divider style={{ fontSize: 50, margin: 20 }}>
        LOGIN
      </Divider>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="formLogin"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default Login;
