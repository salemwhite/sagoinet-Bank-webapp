import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Redirect } from "react-router-dom";
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
import { reactLocalStorage} from '../../reactjs-localstorage/react-localstorage'
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  state = { redirect: null };
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  logout = (ev) => {
    reactLocalStorage.clear()
    this.setState({ redirect: "/" });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
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
      >
         <Button
          color="primary"
          onClick={(e) => this.logout(e)}
          className="px-4"
        >
              Logout
        </Button>
      </div>
    );
  }
}

export default Dashboard;
