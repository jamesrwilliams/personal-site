import React from 'react'
import Reading from './Reading'

export default {
  title: 'Components/Reading',
  component: Reading
};

const Template = (args) => <Reading {...args} />;

export const reading = Template.bind({});

reading.args = {
  title: 'Foo bar'
}
