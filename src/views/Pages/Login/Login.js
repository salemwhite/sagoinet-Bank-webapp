import React, { Component, useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { reactLocalStorage} from '../../../reactjs-localstorage/react-localstorage'
import  Dashboard  from '../../Dashboard/Dashboard'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";



const Login = ()=> {
 const history = useHistory()
 const [Authenticate, setAuthenticate] = useState(false)
 const submit = (ev) => {
    const isAuthenticated = true
    reactLocalStorage.set('userName', 'venky')
    reactLocalStorage.set('authenticated', isAuthenticated)
    console.log(localStorage)
    if(isAuthenticated){
      history.push('/dashboard');
    }
    setAuthenticate(isAuthenticated)
  };
  // render() {
    return (
      <div>
      { !Authenticate  ? <div className="app flex-row align-items-center">
         <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Sales</h1>
                      <p className="text-muted">Sign-In to Sales Department</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            onClick={(e) => submit(e)}
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>S A G O S E R V E</h2>
                      <p>Welcome to SagoINet</p>
                      <p>Online Data Integration And Reporting</p>
                      {/* <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container> 
      </div> : <Dashboard /> }
      </div>
    );
  // }
}

export default Login;
