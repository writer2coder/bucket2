import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";

const Login = (props) => {
  console.log("here");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedin, setLoggedin] = React.useState(false);

  const loginHandler = (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }

    // email: "russellmcdonald88@gmail.com",
    // password: "cityslicka"
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("RESPONSE from login success ", data);
        setLoggedin(true);
      });

    // console.log(username, password);
  };

    const stokeLogin = (ev) => {
      if (!username || !password) {
        return;
      }
      alert("Welcome to Stoke")
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form onSubmit={stokeLogin}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Stoke@futureOfData.com"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter Password"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  test
                </Button>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Form onSubmit={loginHandler}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Marketo
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Adobe@plan.com"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter Password"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
          <Card className="mt-5">
            <CardBody>
              {isLoggedin && (
                <>
                  <div>Marketo Autorization</div>
                  <div className="p-3 bg-success my-2 rounded">
                    <Toast>
                      <ToastHeader>Success</ToastHeader>
                      <ToastBody>
                        You are now connected to your Marketo Account.
                      </ToastBody>
                    </Toast>
                  </div>
                </>
              )}

              {!isLoggedin && (
                <div>
                  Please login with your Marketo credentials.
                </div>
              )}

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
