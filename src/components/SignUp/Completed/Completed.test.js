import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";

import Completed from "./Completed";

test("matched snapshot", () => {
    const wrapper = shallow(<Completed />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})