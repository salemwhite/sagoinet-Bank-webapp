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
const MemberBankMaster = () => {
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
    BankCode: "",
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
      BankCode: "",
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
      BankCode: parseInt(iniData.BankCode),
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
  // //===============GET AND POPULATE TABLE =========================================
  // useEffect(() => {
  //   const GetData = async (e) => {
  //     const url = config.baseApiUrl + "api/TndrDailyAuctionAnnouncements";

  //     fetch(url)
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (json) {
  //         setData(json);
  //       })
  //       .catch(function (ex) {});
  //   };
  //   GetData();
  // }, []);

  return (
    <div>
      <div className="animated fadeIn">
        <Row>
          <Col lg>
            <Card>
              <CardHeader>
                <strong>Member Bank Master</strong>
               
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
                        id="BankCode"
                        name="BankCode"
                        placeholder="Bank Code"
                        value={iniData.BankCode}
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
                        id="BankName"
                        name="BankName"
                        placeholder="Bank Name"
                        value={iniData.BankName}
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
                        id="Place"
                        name="Place"
                        value={iniData.Place}
                        placeholder="Place"
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
                        id="CashCreditLimit"
                        name="CashCreditLimit"
                        value={iniData.CashCreditLimit}
                        onChange={onChange}
                        tabIndex="5"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
                        placeholder="Cash Credit Limit"
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
                        id="OpeningBalance"
                        name="OpeningBalance"
                        value={iniData.OpeningBalance}
                        onChange={onChange}
                        tabIndex="5"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
                        placeholder="Opening Balance"
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
                        id="BankCharges"
                        name="BankCharges"
                        value={iniData.BankCharges}
                        onChange={onChange}
                        tabIndex="6"
                        autoComplete="off"
                        required="true"
                        maxLength="5"
                        placeholder="Bank Charges"
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

export default MemberBankMaster;
