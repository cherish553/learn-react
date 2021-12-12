import { Form } from "antd";
export const useForm = <T>() => {
  const [form] = Form.useForm<T>();
  const getPamars = async () => {
    await form.validateFields();
    const fieldsValue = form.getFieldsValue();
    return fieldsValue;
  };
  return { getPamars, form };
};
