import React from "react";
import Checkout from "./Checkout";

export default {
  title: "component/Checkout",
  component: Checkout,
};

const Template = (args) => <Checkout {...args} />;

export const Default = Template.bind({});
Default.args = {};