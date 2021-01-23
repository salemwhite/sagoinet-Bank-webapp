import React, { Component, useState, useEffect, useContext } from "react";
import config from "../../../config";
import Select from "react-select";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import "whatwg-fetch";
import moment from "moment";

const BankMaster = () => {
  const [data, setData] = useState([]);
  let curr = new Date();
  curr.setDate(curr.getDate());
  let dt = curr.toISOString().substr(0, 10);
  // ====SELECT FIELD==============================================================
  const options = [
    { value: "twentyFourHrs", label: "24 Hrs" },
    { value: "fifthDay", label: "5th Day" },
    { value: "first20", label: "First 20" },
    { value: "second20", label: "Second 20" },
    { value: "final20", label: "Final 20" },
  ];
  const [selectedValue, setSelectedValue] = useState();

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setinputData({ AdvanceType: e.value });
  };
  //=========== SAVE ========================================================
  const [iniData, setinputData] = useState({
    MemberCode: "",
    VoucherDt: "'",
    AdvanceType: "",
    MerchantCode: "",
    CashCreditLimit: "",
    BankCharges: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  const onReset = (e) => {
    setinputData({ value: "" });
  };

  const onChange = (e) => {
    e.persist();
    setinputData({ ...iniData, [e.target.name]: e.target.value });
  };
  //-------------------------------------------------------------------

  const advCheck = (event) => {
    if (event.target.name === "CashCreditLimit" && event.target.value !== "") {
      event.preventDefault();
      let lNo = event.target.value;
      setinputData({ CashCreditLimit: lNo });
      const apipara = "api/SalesMerchantAdvanceDetails/[" + dt + "]/" + event.target.value;
      const GetData = async (event) => {
        const url = config.baseApiUrl + apipara;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            setData(json);
          })
          .catch(function (ex) { });
      };
      GetData();
    }
  };
  //------------- RESET VALUES-----------------------------
  const resetVal = (e) => {
    e.preventDefault();

    const apipara = "api/SalesMerchantAdvanceDetails/[" + dt + "]/" + "Z0";
    const GetData = async (e) => {
      const url = config.baseApiUrl + apipara;
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setData(json);
        })
        .catch(function (ex) { });
    };
    GetData();
    setinputData({
      MemberCode: "",
      VoucherDt: "'",
      AdvanceType: "",
      MerchantCode: "",
      CashCreditLimit: "",
      BankCharges: "",
    });
  };

  //--------------------------------------------------------------------
  const submit = async (e) => {
    e.preventDefault();

    const inputData = {
      MemberCode: parseInt(iniData.MemberCode),
      VoucherDt: iniData.VoucherDt,
      AdvanceType: iniData.AdvanceType,
      MerchantCode: parseInt(iniData.MerchantCode),
      CashCreditLimit: parseInt(iniData.CashCreditLimit),
      BankCharges: parseInt(iniData.BankCharges),
    };

    const url = config.baseApiUrl + "api/SalesMerchantAdvanceDetails";
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
      onReset(e);
    } else {
      alert("Not Saved");
      onReset(e);
    }
  };

  return (
    <div>
      <div className="animated fadeIn">
        <Row>
          <Col lg>
            <Card>
              <CardHeader>
                <strong>Bank Master</strong>
               
              </CardHeader>
              <CardBody>
                <Form>
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-calendar"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="2">
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
                        maxLength="15"
                      />
                    </Col>
                  </InputGroup>{" "}
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-note"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="FactoryName"
                        name="FactoryName"
                        placeholder="Factory Name"
                        value={iniData.FactoryName}
                        onChange={onChange}
                        tabIndex="1"
                        autoComplete="off"
                        required="true"
                        maxLength="30"
                      />
                    </Col>
                  </InputGroup>{" "}
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-note"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="BankCode"
                        name="BankCode"
                        value={iniData.BankCode}
                        placeholder="Bank Code"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="30"
                      />
                    </Col>
                  </InputGroup>{" "}
                  <InputGroup className="mb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-note"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="2">
                      <Input
                        type="text"
                        id="BankName"
                        name="BankName"
                        value={iniData.BankName}
                        onChange={onChange}
                        tabIndex="5"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
                        placeholder="Bank Name"
                      />
                    </Col>
                   
                  </InputGroup>
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-note"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="2">
                      <Input
                        type="text"
                        id="MemberBankCode"
                        name="MemberBankCode"
                        value={iniData.MemberBankCode}
                        onChange={onChange}
                        tabIndex="5"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
                        placeholder="Member Bank Code"
                      />
                    </Col>
                  </InputGroup>{" "}
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="MemberBankName"
                        name="MemberBankName"
                        value={iniData.MemberBankName}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Member Bank Name"
                      />
                    </Col>
                  </InputGroup>{" "}
                  
                 
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="MemberAccountNo"
                        name="MemberAccountNo"
                        value={iniData.MemberAccountNo}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Member Account Nunmber"
                      />
                    </Col>
                  </InputGroup>{" "}
                 
                  
                  
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="MemberAccountName"
                        name="MemberAccountName"
                        value={iniData.MemberAccountName}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Member Account Name"
                      />
                    </Col>
                  </InputGroup>{" "}
                  
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="PowerAttorney"
                        name="PowerAttorney"
                        value={iniData.PowerAttorney}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Power Attorney"
                      />
                    </Col>
                  </InputGroup>{" "}

                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="Branch"
                        name="Branch"
                        value={iniData.Branch}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Branch"
                      />
                    </Col>
                  </InputGroup>{" "}

                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-speedometer"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="IFSCCode"
                        name="IFSCCode"
                        value={iniData.IFSCCode}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="IFSC Code"
                      />
                    </Col>
                  </InputGroup>{" "}










                  
                  
                  <CardFooter>
                    <Button
                      type="submit"
                      size="sm"
                      color="primary"
                      tabIndex="11"
                      onClick={(e) => submit(e)}
                    >
                      <i className="fa fa-dot-circle-o"></i> Submit
                    </Button>
                    <Button
                      type="reset"
                      size="sm"
                      color="danger"
                      tabIndex="12"
                      onClick={(e) => onReset(e)}
                    >
                      <i className="fa fa-ban"></i> Reset
                    </Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col></Row>
      </div>
    </div>
  );
};

export default BankMaster;
