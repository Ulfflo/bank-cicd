import * as React from "react";
import { render } from "@testing-library/react";
import Konto from "../app/konto/page"; 

it("renders Konto unchanged", () => {
  const { container } = render(<Konto />);
  expect(container).toMatchSnapshot();
});
