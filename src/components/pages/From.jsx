import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Container>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">ระบบ Improve Provider ID</a>

        </nav>
        <Row>
          <Col></Col>
          <Col 
          style={{
            
          }}
          xs={5}
          >
            <div
              className="bg-white shadow border rounded"
              style={{ marginTop: 10 }}
            >
                <h3 className='text-center' style={{ margin: '10px' }}>บันทึกรายการขอใช้ API Provider ID</h3>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                    margin: '20px'
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="รหัสหน่วยบริการ"
                  name="hospcode"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุรหัสหน่วยบริการ!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="ชื่อหน่วยบริการ"
                  name="hospname"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุชื่อหน่วยบริการ!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="ชื่อ service"
                  name="service"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุชื่อ service!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="public ip"
                  name="public_ip"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุ piblic ip!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="redirect url"
                  name="redirect_url"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุ redirect url!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="จุดประสงค์"
                  name="objective"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุจุดประสงค์การใช้งาน!",
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item
                  label="อีเมล"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "กรุณาระบุกรอกอีเมล!",
                    },
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit" size="" block>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
