import AppBar from "./AppBar";
import { navItems } from "../Navigation/Navigation.stories";

const Stories = { title: "AppBar", component: AppBar };
export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImage: "https://cdn-icons-png.flaticon.com/512/1864/1864593.png",
  navItems,
  minimized: false,
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
