import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from "reactstrap";
import desktopImage from "../../assets/tenderDesktop.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div
        className="animated fadeIn"
        style={{
          backgroundImage: `url(${desktopImage})`,
          // backgroundSize: "cover",
          overflow: "hidden",
          height: 440,
          width: 1060,
          position: "absolute",
          top: 175,
          left: 340,
        }}
      ></div>
    );
  }
}

export default Dashboard;
