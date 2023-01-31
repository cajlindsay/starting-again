import React from "react";
import { render } from "@testing-library/react";

import App from "./app.jsx";

describe("App", () => {
  it("renders", () => {
    const view = render(<App />);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
