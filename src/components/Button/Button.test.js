import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Button from './Button';

test('Test button click', () => {
  const onClickSpy = jest.fn()
  const wrapper = shallow(<Button onClick={onClickSpy} />)
  const button = wrapper.find('button')
  expect(onClickSpy).not.toHaveBeenCalled()
  button.simulate('click')
  expect(onClickSpy).toHaveBeenCalled()
});

test('Button color', () => {
  let wrapper = render(<Button />)
  expect(wrapper.container.firstChild.classList).not.toContain('primary')

  wrapper = render(<Button color='primary' />)
  expect(wrapper.container.firstChild.classList).toContain('primary')
})