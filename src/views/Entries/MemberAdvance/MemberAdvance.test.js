import React from "react";
import MemberAdvance from "./MemberAdvance";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<MemberAdvance />);
});
