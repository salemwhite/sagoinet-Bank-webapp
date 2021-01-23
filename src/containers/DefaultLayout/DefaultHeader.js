import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import logo from "../../assets/img/SagoINet.png";

import tenderHeading from "../../assets/TenderHeading.png";
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo,
            width: 70,
            height: 38,
            alt: "sagoInet Logo",
          }}
          minimized={{
            src: logo,
            width: 30,
            height: 30,
            alt: "sagoInet Logo",
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <div>
            <AppNavbarBrand
              full={{
                src: tenderHeading,

                alt: "tender Heading",
              }}
            />
          </div>
          {/* <NavItem
            className="px-3"
            style={{
              color: "#FF4500",
            }}
          >
            <h5> T E N D E R</h5>
          </NavItem> */}
        </Nav>
        <Nav className="ml-auto" navbar>
          {/*}  <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-bell"></i>
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem> */}
          <NavItem className="d-md-down-none">
            <NavItem
              className="px-3"
              style={{
                color: "green",
                font: "Century Gothic",
              }}

            >
              <h5> Sagoserve Online Data Integraton and Reporting.</h5>
            </NavItem>
          </NavItem>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-list"></i>
            </NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-location-pin"></i>
            </NavLink>
          </NavItem> */}
          {/* <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="login user"
              />
            </DropdownToggle>
          </UncontrolledDropdown> */}
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
