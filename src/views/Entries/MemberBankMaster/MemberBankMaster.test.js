import React from "react";
import MemberBankMaster from "./MemberBankMaster";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<MemberBankMaster />);
});
