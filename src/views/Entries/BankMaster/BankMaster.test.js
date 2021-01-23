import React from "react";
import BankMaster from "./MemberBankMaster";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<BankMaster />);
});
