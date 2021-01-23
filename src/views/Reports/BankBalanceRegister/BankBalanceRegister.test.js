import React from "react";
import BankBalanceRegister from "./BankBalanceRegister";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<BankBalanceRegister />);
});
