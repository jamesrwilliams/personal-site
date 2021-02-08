import React from 'react'
import Reading from './Reading'

export default {
  title: 'Components/Reading',
  component: Reading
};

const exampleBook =  {
  title: 'string',
  link: '',
  author: {
    name: 'string',
    authorLink: 'string',
  }
}

const Template = (args) => <Reading {...args} />;

export const reading = Template.bind({});

reading.args = exampleBook;
