import { render, screen } from '@testing-library/react'
import * as api from '../../services/PunkAPI'
import CatalogLayout from './CatalogLayout'

describe('<CatalogLayout />', () => {
  it ('renders', async () => {
    jest.spyOn(api, 'getBeers').mockImplementation(() => (
      Promise.resolve([])
    ))
    
    expect(api.getBeers).not.toHaveBeenCalled()
    render(<CatalogLayout />)
    expect(await screen.queryByText('Buzz')).toBeNull()
    expect(api.getBeers).toHaveBeenCalledTimes(1)
  })
})