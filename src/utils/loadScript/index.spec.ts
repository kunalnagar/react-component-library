import * as loadScriptObject from './index'

describe('src/utils/loadScript', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should create a script tag', () => {
    const spy = jest.spyOn(document, 'createElement')
    loadScriptObject.loadScript({
      url: 'https://google.com',
    })
    expect(spy).toHaveBeenCalledWith('script')
    spy.mockRestore()
  })

  it('should be called with a configuration', () => {
    const spy = jest.spyOn(loadScriptObject, 'loadScript')
    loadScriptObject.loadScript({
      url: 'https://google.com',
      id: 'some-id',
      async: true,
    })
    expect(spy).toHaveBeenCalledWith({
      url: 'https://google.com',
      id: 'some-id',
      async: true,
    })
    spy.mockRestore()
  })

  xit('should call the callback if present', () => {
    // TODO: Figure out how to test this
  })
})
