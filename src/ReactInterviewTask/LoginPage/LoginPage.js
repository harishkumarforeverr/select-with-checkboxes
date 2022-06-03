import React, { useState } from "react";
import {
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Divider,
  Spin,
  Button,
  Modal,
} from "antd";
import LogoImg from "../../Assets/111.svg";
import LoginImage from "../../Assets/loginImg.png";
import "./LoginPage.scss";

const LoginPage = () => {
  const { Password } = Input;
  const [intialValues, setIntialValues] = useState({
    username: "",
    password: "",
  });
  const compareToFirstPassword = (rule, value, callback) => {
    if (isNaN(value)) {
      callback("the password must be 10 when each  numeric character is added");
      return;
    }
    let sum = 0;

    console.log("ssssssssss", sum, value);
    const getSum = (n) => {
      let sum = 0;

      while (parseInt(n) !== 0) {
        sum = sum + parseInt(n % 10);
        n = n / 10;
      }

      return sum;
    };
    // console.log("ssssssssss11111111", sum, value, getSum(value));
    if (getSum(value) !== 10 || String(value).length !== 4) {
      callback(
        "the password must be 10 when each  numeric character is added and lenght must be 4"
      );
    } else {
      callback();
    }
  };
  const Rules = {
    email: [
      {
        required: true,
        message: "email Address can't be blank",
      },
      { whitespace: true, message: "Remember to fill in the title" },
      {
        pattern: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        message: "plese enter valid email",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your password!",
      },
      //   { whitespace: true, message: "Remember to fill in the title" },
      //   {
      //     pattern: new RegExp(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/),
      //     message:
      //       "the password must be 10 when each  numeric character is added",
      //   },
      {
        validator: compareToFirstPassword,
      },
    ],
  };

  return (
    <div>
      <div className="Login-page-container">
        <div className="header_content">
          <img src={LogoImg} alt="" />
        </div>
        <div className="login_content">
          <Row>
            <Col span={12}>
              <img src={LoginImage} alt="" />
            </Col>
            <Col span={12}>
              <div className="login_inputFields">
                <h1>Login</h1>
                <Divider />
                <Form>
                  <Form.Item name="email" rules={Rules.email}>
                    <Input
                      autocomplete="off"
                      placeholder="Enter email"
                      value={intialValues.username}
                    />
                  </Form.Item>
                  <Form.Item name="password" rules={Rules.password}>
                    <Password
                      autocomplete="off"
                      placeholder="Password"
                      value={intialValues.password}
                      type="number"
                    />
                  </Form.Item>
                  <div className="sub_btn">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Login
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
