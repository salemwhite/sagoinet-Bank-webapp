import React, { Component, useState, useEffect, useContext } from "react";
import config from "../../../config";
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
  ListGroup,
  ListGroupItem,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import { CardGroup } from 'reactstrap';

import Widget03 from '../../Widgets/Widgets'

import { Line } from 'react-chartjs-2';
import "whatwg-fetch";

const AdvancePayment = () => {
  const [data, setData] = useState([]);

  let curr = new Date();
  curr.setDate(curr.getDate());
  let dt = curr.toISOString().substr(0, 10);
  //=========== SAVE ========================================================
  const [iniData, setinputData] = useState({
    DelNoteDt: "",
    lotNo: "",
    DeliveryNoteNo: "",
    Bags: "",
    comitteeDt: "",
    comittee: "",
    finalStatus: "",
    settlementDt: "",
    committeeCancelledBags: "",
    deliveryBags: "",
    remark: "",
  });
  const [showLoading, setShowLoading] = useState(false);

  // //==== CAPS LETTER ==========================================================
  const toInputUppercase = (e) => {
    e.target.value = ("" + e.target.value).toUpperCase();
  };

 
  const pressEnter = (event) => {
    
    if (
      event.charCode === 13 &&
      event.target.name === "lotNo" &&
      event.target.value !== ""
    ) {
      event.preventDefault();
      let lNo = event.target.value;
      setinputData({ lotNo: lNo });
      const apipara = "api/GdwnLotNoDetailAfterTenders/" + event.target.value;
      const GetData = async (event) => {
        const url = config.baseApiUrl + apipara;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            setData(json);
          })
          .catch(function (ex) {});
      };
      GetData();
    }
  };
  //------------- RESET VALUES-----------------------------
  const resetVal = (e) => {
    e.preventDefault();

    const apipara = "api/GdwnLotNoDetailAfterTenders/" + "Z0";
    const GetData = async (e) => {
      const url = config.baseApiUrl + apipara;
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          setData(json);
        })
        .catch(function (ex) {});
    };
    GetData();
    setinputData({
      DelNoteDt: "",
      lotNo: "",
      DeliveryNoteNo: "",
      Bags: "",
      comitteeDt: "",
      comittee: "",
      finalStatus: "",
      settlementDt: "",
      committeeCancelledBags: "",
      deliveryBags: "",
      remark: "",
    });
  };
  //--------------------------------------------------------
  const onChange = (e) => {
    e.persist();
    setinputData({ ...iniData, [e.target.name]: e.target.value });
  };
  //----------------------------------------------------------
  const submit = async (ev) => {
    ev.preventDefault();

    const inputData = {
      DelNoteDt: iniData.DelNoteDt,
      lotNo: iniData.lotNo,
      DeliveryNoteNo: parseInt(iniData.DeliveryNoteNo),
      Bags: iniData.Bags,
      comitteeDt: iniData.comitteeDt,
      comittee: iniData.comittee,
      finalStatus: iniData.finalStatus,
      settlementDt: iniData.settlementDt,
      committeeCancelledBags: parseInt(iniData.committeeCancelledBags),
      deliveryBags: parseInt(iniData.deliveryBags),
      remark: iniData.remark,
    };

    const url = config.baseApiUrl + "api/TndrDisputeLots";
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
      setinputData({ value: "" });
      alert("Not Saved");
    }
  };

  return (
    <div>
      <div className="animated fadeIn">
        <Row>
          <Col xs="7" sm="4">
            <Card>
              <CardHeader>
                <strong>Advance Payment</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <Form>
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
                    <Col xs="10">
                      <Input
                        type="date"
                        id="VoucherDt"
                        name="VoucherDt"
                        placeholder="Voucher Date"
                        value={iniData.VoucherDt}
                        onChange={onChange}
                        tabIndex="0"
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
                      onClick={(e) => resetVal(e)}
                    >
                      <i className="fa fa-ban"></i> Reset
                    </Button>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>

            
          </Col>
        
        
        </Row>
        
      </div>
    </div>
  );
};

export default AdvancePayment;
