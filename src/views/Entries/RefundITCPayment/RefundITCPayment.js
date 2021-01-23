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
  Row,
} from "reactstrap";
import moment from "moment";
const RefundITCPayment = () => {
  const [data, setData] = useState([]);
  let curr = new Date();
  curr.setDate(curr.getDate());
  let dt = curr.toISOString().substr(0, 10);
  //=========== SAVE ========================================================
  const [iniData, setinputData] = useState({
    ReceiptNo: "",
    ReceiptDt: "",
    MerchantCode: "",
    Amount: "",
    ChqDt: "",
    ChqNo: "",
    DepositBank: "",
    SubCode: "",
    Terms: "",
    AdvanceType: "",
    CreditCode: "",
    DebitCode: "",
    GL: "",
    SSBCode: "",
    ListType: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  //------------SELECT FIELD------------------------------------------------------
  const options = [
    { value: "20Advance", label: "20 % Advance" },
    { value: "ProvBillDue", label: "Provisional Bill" },
    { value: "Others", label: "Others" },
  ];
  const [selecteAdvdValue, setSelectedAdvValue] = useState();
  const handleAdvChange = (e) => {
    let selAdv = e.value;
  };

  const ListOptions = [
    { value: "List1", label: "List 1" },
    { value: "List2", label: "List 2" },
    { value: "Cheque", label: "Cheque" },
  ];
  const [selectedListValue, setSelectedListValue] = useState();
  const handleListChange = (e) => {
    let selList = e.value;
  };

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
      ReceiptNo: iniData.ReceiptNo,
      ReceiptDt: iniData.ReceiptNo,
      MerchantCode: iniData.MerchantCode,
      Amount: parseInt(iniData.Amount),
      ChqDt: iniData.ChqDt,
      ChqNo: iniData.ChqNo,
      DepositBank: iniData.DepositBank,
      SubCode: iniData.SubCode,
      Terms: iniData.Terms,
      AdvanceType: iniData.addonType,
      CreditCode: iniData.CreditCode,
      DebitCode: iniData.DebitCode,
      GL: iniData.GL,
      SSBCode: iniData.SSBCode,
      ListType: parseInt(iniData.ListType),
    };

    const url = config.baseApiUrl + "api/TndrTenderCancels";
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
      alert("Data save successfuly.");
      // window.location = result.url;
      onReset(e);
    } else {
      alert("Not Saved");
      onReset(e);
    }
  };

  return (
    // <div className="app flex-row align-items-center">
    <div>
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <h4>Refund ITC Payment</h4>
          </div>
          <div className="card-body">
            <Form>

              <small
                style={{
                  color: "blue",
                  font: "Century Gothic",
                }}
              >
                From Date
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
                    id="From Date"
                    name="From Date"
                    placeholder="From Date"
                    value={iniData.FromDt}
                    onChange={onChange}
                    tabIndex="0"
                  // defaultValue={dt}
                  />
                </Col>
              </InputGroup>

              <small
                style={{
                  color: "blue",
                  font: "Century Gothic",
                }}
              >
                To Date
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
                    id="ToDate"
                    name="ToDate"
                    placeholder="To Date"
                    value={iniData.ToDt}
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
                    id="MemberCode"
                    name="MemberCode"
                    placeholder="Member Code"
                    value={iniData.MemberCode}
                    onChange={onChange}
                    tabIndex="1"
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
                    id="Amount"
                    name="Amount"
                    placeholder="Amount"
                    value={iniData.Amount}
                    onChange={onChange}
                    tabIndex="2"
                    autoComplete="off"
                    required="true"
                    maxLength="5"
                  />
                </Col>
              </InputGroup>  <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  tabIndex="4"
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

export default RefundITCPayment;
