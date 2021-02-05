import { shallow } from 'enzyme';
import Button from './Button';

const onClickSpy = jest.fn()

test('Test button click', () => {
  const wrapper = shallow(<Button onClick={onClickSpy} />)
  const button = wrapper.find("button")
  expect(onClickSpy).not.toHaveBeenCalled()
  button.simulate('click')
  expect(onClickSpy).toHaveBeenCalled()
});