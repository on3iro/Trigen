import React from 'react';
import { shallow, mount } from 'enzyme';

import Entry from '../Entry';
import {
  Wrapper,
  Question,
  Answer,
} from '../Entry';


describe('<Entry />', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(
      <Entry
        handleExpand={() => {}}
        question='foo'
        answer='bar'
      />
    );

    expect(wrapper.find(Wrapper).length).toBe(1);
  });

  it('should render Question', () => {
    const wrapper = shallow(
      <Entry
        handleExpand={() => {}}
        question='foo'
        answer='bar'
      />
    );

    expect(wrapper.find(Question).length).toBe(1);
  });

  it('should render Answer', () => {
    const wrapper = shallow(
      <Entry
        handleExpand={() => {}}
        expanded={true}
        question='foo'
        answer='bar'
      />
    );

    expect(wrapper.find(Answer).length).toBe(1);
  });

  it('should render 2x <div> when folded', () => {
    const wrapper = mount(
      <Entry
        handleExpand={() => {}}
        question='How are you?'
        answer='Fine.'
      />
    );
    expect(wrapper.find('div').length).toBe(2);
  });

  it('should render 3x <div> when expanded', () => {
    const wrapper = mount(
      <Entry
        handleExpand={() => {}}
        expanded={true}
        question='How are you?'
        answer='Fine.'
      />
    );
    expect(wrapper.find('div').length).toBe(3);
  });

  it('should expand on click on question', () => {
    const expandSpy = jest.fn();
    const wrapper = mount(
      <Entry
        handleExpand={expandSpy}
        question='How are you?'
        answer='Fine.'
      />
    );

    wrapper.find(Question).first().simulate('click');
    expect(expandSpy).toHaveBeenCalled();
  });
});
