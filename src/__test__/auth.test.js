import isAuthenticated from '../common/auth'

const file = '/src/common/auth.js: '

beforeEach(() => {
  fetch.resetMocks()
})

test(`${file} Test isAuthenticated`, async () => {
  fetch.mockResponseOnce(JSON.stringify({ "success": false, "code": 1200 }))

  var result = await isAuthenticated()
  expect(fetch.mock.calls.length).toEqual(1)
  expect(fetch.mock.calls[0][0]).toEqual(`${process.env.REACT_APP_BACKENDURL}/isAuthenticated`)
  expect(result.success).toBe(false)

  fetch.mockResponseOnce(JSON.stringify({ "success": true, "code": 0 }))
  result = await isAuthenticated()
  expect(fetch.mock.calls.length).toEqual(2)
  expect(fetch.mock.calls[1][0]).toEqual(`${process.env.REACT_APP_BACKENDURL}/isAuthenticated`)
  expect(result.success).toBe(true)
})
