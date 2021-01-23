import React, { Component, useState, useEffect, useContext } from "react";
import config from "../../../config";
import Select from "react-select";
import "whatwg-fetch";
import {
  Button,
  CardFooter,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import moment from "moment";
const PostalCharges = () => {
  const [data, setData] = useState([]);
  let curr = new Date();
  curr.setDate(curr.getDate());
  let dt = curr.toISOString().substr(0, 10);
  //=========== SAVE ========================================================
  const [iniData, setinputData] = useState({
    ReceiptDt:"",
    MerchantCode:"",
    RetainedAmount:"",
    PaymentDt:"",
    PaymentAmount:"",
    ChqNo:"",
    BankName:"",
    CreditCode:"",
    DebitCode:"",
  });
  const [showLoading, setShowLoading] = useState(false);

  const onReset = (e) => {
    setinputData({ value: "" });
  };
  

  const onChange = (e) => {
    e.persist();
    setinputData({ ...iniData, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();

    const inputData = {
      ReceiptDt:iniData.ReceiptDt,
      MerchantCode:iniData.MerchantCode,
      RetainedAmount:iniData.RetainedAmount,
      PaymentDt:iniData.PaymentDt,
      PaymentAmount:iniData.PaymentAmount,
      ChqNo:iniData.ChqNo,
      BankName:iniData.BankName,
      CreditCode:iniData.CreditCode,
      DebitCode:iniData.DebitCode
    };

    const url = config.baseApiUrl + "api/CmnPostalCharges";
    let header = new Headers({
      "Access-Control-Allow-Origin": "",
      "Content-Type": "application/json",
    });

    let options = {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await fetch(url, options);
    if (result.ok === true) {
      setinputData({ value: "" });
      alert("Data save successfuly.");
    } else {
      alert("Not Saved");
      setinputData({ value: "" });
    }
  };

  return (
    <div>
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <h4>Merchant Cancellation Sunday Creditor II A</h4>
          </div>
          <div className="card-body">
            <Form>
              
              <small
                style={{
                  color: "blue",
                  font: "Century Gothic",
                }}
              >
                Receipt Date
              </small>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="date"
                    id="Receipt Date"
                    name="Receipt Date"
                    placeholder="Receipt Date"
                    value={iniData.ReceiptDt}
                    onChange={onChange}
                    tabIndex="0"
                    // defaultValue={dt}
                  />
                </Col>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="ReceiptNo"
                    name="ReceiptNo"
                    placeholder="Receipt Number"
                    value={iniData.ReceiptNo}
                    onChange={onChange}
                    tabIndex="1"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="10"
                  />
                </Col>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="MerchantCode"
                    name="MerchantCode"
                    placeholder="Merchant Code"
                    value={iniData.MerchantCode}
                    onChange={onChange}
                    tabIndex="2"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="5"
                  />
                </Col> <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="MerchantAbr"
                    name="MerchantAbr"
                    placeholder="Merchant Abr"
                    value={iniData.MerchantAbr}
                    onChange={onChange}
                    tabIndex="2"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="5"
                  />
                </Col>

                 <Col xs="3" md="5">
                  <Input
                    type="text"
                    id="MerchantName"
                    name="MerchantName"
                    placeholder="Merchant Name"
                    value={iniData.MerchantName}
                    onChange={onChange}
                    tabIndex="2"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="50"
                  />
                </Col>
                
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="RetainedAmount"
                    name="RetainedAmount"
                    placeholder="Retained Amount"
                    value={iniData.RetainedAmount}
                    onChange={onChange}
                    tabIndex="3"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="12"
                  />
                </Col>
              </InputGroup>
              <small
                style={{
                  color: "blue",
                  font: "Century Gothic",
                }}
              >
                Payment Date
              </small>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-calendar"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="date"
                    id="PaymentDate"
                    name="PaymentDate"
                    placeholder="Payment Date"
                    value={iniData.PaymentDt}
                    onChange={onChange}
                    tabIndex="0"
                    // defaultValue={dt}
                  />
                </Col>
              </InputGroup>


              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="ChequeNo"
                    name="ChequeNo"
                    placeholder="Cheque Number"
                    value={iniData.ChequeNo}
                    onChange={onChange}
                    tabIndex="3"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="12"
                  />
                </Col>
              </InputGroup>
             
              

              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="BankName"
                    name="BankName"
                    placeholder="Bank Name"
                    value={iniData.BankName}
                    onChange={onChange}
                    tabIndex="3"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="12"
                  />
                </Col>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="icon-note"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Col xs="3" md="2">
                  <Input
                    type="text"
                    id="PaymentAmount"
                    name="PaymentAmount"
                    placeholder="Payment Amount"
                    value={iniData.PaymentAmount}
                    onChange={onChange}
                    tabIndex="3"
                    // onKeyPress={pressEnter}
                    autoComplete="off"
                    required="true"
                    maxLength="12"
                  />
                </Col>
              </InputGroup>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  tabIndex="4"
                  // onKeyPress={pressEnter}
                  onClick={(e) => submit(e)}
                >
                  <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
                <Button
                  type="reset"
                  size="sm"
                  color="danger"
                  tabIndex="5"
                  onClick={(e) => onReset(e)}
                >
                  <i className="fa fa-ban"></i> Reset
                </Button>
              </CardFooter>
            </Form>
          </div>
         </div>
      </div>
    </div>
  
  );
};

export default PostalCharges;
