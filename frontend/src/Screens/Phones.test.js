import React from "react";
import { render } from "@testing-library/react-native";

import PhoneList from '../components/PhoneList';

describe('Home test screen', () => {
    it("renders", () => {
    //Arrange
    render(<PhoneList />);
});
});