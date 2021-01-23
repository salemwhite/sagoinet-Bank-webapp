import React, { Component, useState, useEffect, useContext } from "react";
import config from "../../../config";
import Select from "react-select";
import "whatwg-fetch";
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
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  ListGroup,
  ListGroupItem,
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
import moment from "moment";

const MemberAdvance = () => {
  const [data, setData] = useState([]);

  let curr = new Date();
  curr.setDate(curr.getDate());
  let dt = curr.toISOString().substr(0, 10);

  //------------ SAVE ----------------------------------------------------------
  const [iniData, setinputData] = useState({
    Lotno: "",
      MemberCode: "",
      GSTNo: "",
      CompanyName: "",
      Address: "",
      Taluk: "",
      District: "",
      State: "",
      Pincode: "",
      Phone: "",           
      EmailID: "",      
      ChequeLimit: "",
      BagsLimit: "",     
      MerchantType: "",
      BankAcNo: "",
      BankName: "",
      IFSCCode: "",
      BranchName: "",
      IsInTamilNadu: "",
      TenderDeposit: "",
      AuthorizedPerson: "",
      AdmissionDt: "",
      Active: "",
      ClosedDt: "",
      AgreementNumber: "",
      AgreementDt: "",
      AuthorizedPersonPhoto: "", 
  });
  const [showLoading, setShowLoading] = useState(false);

  const onReset = (e) => {
    e.preventDefault();
    setinputData({
      Lotno: "",
      MemberCode: "",
      GSTNo: "",
      CompanyName: "",
      Address: "",
      Taluk: "",
      District: "",
      State: "",
      Pincode: "",
      Phone: "",           
      EmailID: "",      
      ChequeLimit: "",
      BagsLimit: "",     
      MerchantType: "",
      BankAcNo: "",
      BankName: "",
      IFSCCode: "",
      BranchName: "",
      IsInTamilNadu: "",
      TenderDeposit: "",
      AuthorizedPerson: "",
      AdmissionDt: "",
      Active: "",
      ClosedDt: "",
      AgreementNumber: "",
      AgreementDt: "",
      AuthorizedPersonPhoto: "",    
      
    });
  };

  const onChange = (e) => {
    e.persist();
    setinputData({ ...iniData, [e.target.name]: e.target.value });
  };

  //----------------------------------------------------------

  const submit = async (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
    }

    const inputData = {
      Lotno: iniData.Lotno,
      MemberCode: iniData.MemberCode,
      GSTNo: iniData.GSTNo,
      CompanyName: iniData.CompanyName,
      Address: iniData.Address,
      Taluk: iniData.Taluk,
      District: iniData.District,
      State: iniData.State,
      Pincode: parseInt(iniData.Pincode),
      Phone:  parseInt(iniData.Phone),      
      EmailID: iniData.EmailID,     
      ChequeLimit: parseInt(iniData.ChequeLimit),
      BagsLimit:  parseInt(iniData.BagsLimit),      
      MerchantType:  iniData.MerchantType,
      BankAcNo: iniData.BankAcNo,
      BankName: iniData.BankName,
      IFSCCode: iniData.IFSCCode,
      BranchName:iniData.BranchName,
      BranchName: iniData.BranchName,
      IsInTamilNadu: iniData.IsInTamilNadu,
      TenderDeposit: parseInt(iniData.TenderDeposit),
      AuthorizedPerson: iniData.AuthorizedPerson,
      AdmissionDt: iniData.AdmissionDt,
      Active: iniData.Active,
      ClosedDt: iniData.ClosedDt,
      AgreementNumber: iniData.AgreementNumber,
      AgreementDt: iniData.AgreementDt,
      AuthorizedPersonPhoto: iniData.AuthorizedPersonPhoto,        
    };

    const url = config.baseApiUrl + "api/TndrCompanyNameAllocations";
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
    } else {
      alert("Data Not Saved");
    }
  };

  // ==================================================================
  return (
    <div>
      <div className="animated fadeIn">
        <Row>
          <Col xs="10" sm="6">
            <Card>
              <CardHeader>
                <strong>Member Advance</strong>
              </CardHeader>

              <CardBody>
                <Form>
                  <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-note"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Col xs="10">
                      <Input
                        type="text"
                        id="Lotno"
                        name="Lotno"
                        placeholder="Merchant Code"
                        onChange={onChange}
                        tabIndex="1"
                        autoComplete="off"
                        required="true"
                        maxLength="7"
                        value={iniData.Lotno}
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
                        id="MemberCode"
                        name="MemberCode"
                        value={iniData.MemberCode}
                        placeholder="MemberCode"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="7"
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
                        id="GSTNo"
                        name="GSTNo"
                        value={iniData.GSTNo}
                        placeholder="GST No"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="25"
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
                        id="CompanyName"
                        name="CompanyName"
                        value={iniData.CompanyName}
                        placeholder="Company Name"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="50"
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
                        id="Address"
                        name="Address"
                        value={iniData.Address}
                        placeholder="Address"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="100"
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
                        id="Taluk"
                        name="Taluk"
                        value={iniData.Taluk}
                        placeholder="Taluk"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="50"
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
                        id="District"
                        name="District"
                        value={iniData.District}
                        placeholder="District"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="50"
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
                        id="State"
                        name="State"
                        value={iniData.State}
                        placeholder="State"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="25"
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
                        id="Pincode"
                        name="Pincode"
                        value={iniData.Pincode}
                        placeholder="Pincode"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="6"
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
                        id="Phone"
                        name="Phone"
                        value={iniData.Phone}
                        placeholder="Phone"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
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
                        id="AlternatePhone"
                        name="AlternatePhone"
                        value={iniData.AlternatePhone}
                        placeholder="Alternate Phone"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
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
                        id="EmailID"
                        name="EmailID"
                        value={iniData.EmailID}
                        placeholder="Email ID"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="25"
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
                        id="ChequeLimit"
                        name="ChequeLimit"
                        value={iniData.ChequeLimit}
                        placeholder="Cheque Limit"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
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
                        id="BagsLimit"
                        name="BagsLimit"
                        value={iniData.BagsLimit}
                        placeholder="Bags Limit"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="6"
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
                        id="MerchantType"
                        name="MerchantType"
                        value={iniData.MerchantType}
                        placeholder="Merchant Type"
                        onChange={onChange}
                        tabIndex="4"
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
                        id="BankAcNo"
                        name="BankAcNo"
                        value={iniData.BankAcNo}
                        placeholder="Bank Account No"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="20"
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
                        value={iniData.BankName}
                        placeholder="Bank Name"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="20"
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
                        id="IFSCCode"
                        name="IFSCCode"
                        value={iniData.IFSCCode}
                        placeholder="IFSC Code"
                        onChange={onChange}
                        tabIndex="4"
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
                        id="BranchName"
                        name="BranchName"
                        value={iniData.BranchName}
                        placeholder="Branch Name"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="20"
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
                        id="IsInTamilNadu"
                        name="IsInTamilNadu"
                        value={iniData.IsInTamilNadu}
                        placeholder="Is In Tamil Nadu"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
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
                        id="TenderDeposit"
                        name="TenderDeposit"
                        value={iniData.TenderDeposit}
                        placeholder="Tender Deposit"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="6"
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
                        id="AuthorizedPerson"
                        name="AuthorizedPerson"
                        value={iniData.AuthorizedPerson}
                        placeholder="Authorized Person"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="20"
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
                        id="AdmissionDt"
                        name="AdmissionDt"
                        value={iniData.AdmissionDt}
                        placeholder="Admission Date"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
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
                        id="AgreementNumber"
                        name="AgreementNumber"
                        value={iniData.AgreementNumber}
                        placeholder="Agreement Number"
                        onChange={onChange}
                        tabIndex="4"
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
                        id="AgreementDt"
                        name="AgreementDt"
                        value={iniData.AgreementDt}
                        placeholder="Agreement Date"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
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
                        id="Active"
                        name="Active"
                        value={iniData.Active}
                        placeholder="Active"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="3"
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
                        id="ClosedDt"
                        name="ClosedDt"
                        value={iniData.ClosedDt}
                        placeholder="Closed Date"
                        onChange={onChange}
                        tabIndex="4"
                        autoComplete="off"
                        required="true"
                        maxLength="10"
                      />
                    </Col>
                  </InputGroup>{" "}
                  <CardFooter>
                    <Button
                      type="submit"
                      size="sm"
                      tabIndex="5"
                      color="primary"
                      onClick={(e) => submit(e)}
                    >
                      <i className="fa fa-dot-circle-o"></i> Submit
                    </Button>{" "}
                    <Button
                      type="reset"
                      size="sm"
                      color="danger"
                      tabIndex="6"
                      onClick={(e) => onReset(e)}
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
export default MemberAdvance;
