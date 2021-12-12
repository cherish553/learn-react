import { Form, Input, Button, Card } from "antd";
import { getLoginInfo, ILoginInfoParams } from "api";
import { useMutation } from "react-query";
import { useForm } from "./hooks";
import { useNavigate } from "react-router";
export const Login = () => {
  const history = useNavigate();
  const { form, getPamars } = useForm<ILoginInfoParams>();
  const { mutate: confirm, isLoading } = useMutation(async () => {
    try {
      const fieldsValue = await getPamars();
      const params = {
        ...fieldsValue,
        password: require("js-sha256").sha256(fieldsValue.password),
      };
      const token = await getLoginInfo(params);
      localStorage.setItem("USER_TOKEN", token);
      history({ pathname: "/home" });
    } catch {}
  });

  return (
    <Card>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ username: "root@admin.com", password: "123456" }}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <Button loading={isLoading} type="primary" onClick={() => confirm()}>
        提交
      </Button>
    </Card>
  );
};
