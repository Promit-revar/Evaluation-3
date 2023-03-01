import CardComponent from "..";
import React from "react";
import { render} from "@testing-library/react";
describe("CardComponent", () => {
  it("should render without crashing", () => {
    const {asFragment}=render(<CardComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
