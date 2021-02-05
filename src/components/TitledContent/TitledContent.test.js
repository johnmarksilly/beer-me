import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import TitledContent from "./TitledContent";

test('Verify title is within variant element', () => {
  const wrapper = render(<TitledContent title='Sample' variant='h1' />)
  const element = screen.getByText('Sample')
  expect(wrapper.container.firstChild).toContainElement(element)
  expect(element.nodeName).toEqual('H1')
  expect(element).toContainHTML('Sample')
});

test('Verify children populate', () => {
  const titledContent = shallow(
    <TitledContent title='Sample' variant='h1'>
      <p>Test Paragraph</p>
    </TitledContent>
  )
  expect(titledContent.find('p').text()).toEqual('Test Paragraph')
})