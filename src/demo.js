import "antd/dist/antd.css";
import "./index.css";
import { DatePicker, Form, Button } from "antd";
import moment from "moment";

const disabledDate = (current) => {
  return current && current < moment().startOf("day");
};

function BookingDetailsForm({ onFinish, initialValues }) {
  const { RangePicker } = DatePicker;

  const [form] = Form.useForm();

  return (
    <div>
      <Form
        onFinish={onFinish}
        form={form}
        initialValues={initialValues}
        layout="vertical"
      >
        <Form.Item
          style={{ paddingLeft: 5 }}
          label="Check-In & Check-Out"
          name="date_of_donation"
          rules={[
            {
              required: true,
              message: "Invalid Value"
            }
          ]}
        >
          <RangePicker
            disabledDate={disabledDate}
            showTime
            format="DD-MM-YYYY HH:mm:ss"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Save & Next
        </Button>
      </Form>
    </div>
  );
}

export default BookingDetailsForm;
