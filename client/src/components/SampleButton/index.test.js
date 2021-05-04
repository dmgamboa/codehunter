import Component from "./index";
import { shallow } from "enzyme";

it("should render the right name", () => {
    const wrapper = shallow(<Component name={"Foo"} />);
    expect(wrapper.find(".example").text()).toBe("Hello Foo");
});