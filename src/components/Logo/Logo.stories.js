import Logo from "./Logo";
const Stories = { title: "Logo", component: Logo };
export default Stories;
const Template = (args) => <Logo {...args} />;

export const Default = Template.bind();
