import HeaderComponent from "..";
import { render} from "@testing-library/react";
describe("ExpandedCardComponent", () => {
  it("should render without crashing", () => {
    const {asFragment}=render(<HeaderComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
