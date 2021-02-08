import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import * as api from '../../services/PunkAPI'
import BeerLayout from './BeerLayout'
import testBeer from '../../tests/test-beer.json'

function renderWithHistory(component, path) {
  let history = createMemoryHistory()
  history.push(path)
  return render(
    <Router history={history}>
      {component}
    </Router>
  )
}

describe('<BeerLayout />', () => {
    it('Render layout', () => {
      renderWithHistory(<BeerLayout />, '/beers/1')
  })

  it('Has elements', async () => {
    const spy = jest
      .spyOn(api, 'getBeerById')
      .mockImplementation(() => (Promise.resolve(testBeer)))

    expect(spy).not.toHaveBeenCalled()
    renderWithHistory(<BeerLayout />, '/beers/1')
    expect(spy).toBeCalledTimes(1)
    expect(await screen.findByText('Buzz')).toBeInTheDocument()
  })
})