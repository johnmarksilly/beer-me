import { render } from '@testing-library/react'
import TemperatureCard from './TemperatureCard'

const TEST_TEMP = {
  temp: {
    value: '100',
    unit: 'fahrenheit'
  },
  duration: 10
}

describe('<TemperatureCard />', () => {
  it('Renders content.', () => {
    render(<TemperatureCard title="Test" temperature={TEST_TEMP} />)
  })

  it('Has propery text', () => {
    const wrapper = render(<TemperatureCard title="Test" temperature={TEST_TEMP} />)
    const textElement = wrapper.getByText('100', { exact: false })
    expect(textElement.innerHTML).toBe('100°F for 10 minutes')
  })
})