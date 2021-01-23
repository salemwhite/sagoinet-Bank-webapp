import React from "react";
import RefundITCPayment from "./RefundITCPayment";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<RefundITCPayment />);
});
