import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import PaginationComp from '../components/PaginationComp'

const compName='PaginationComp'

// test(`${compName} Test`, () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<PaginationComp />, div)
//   ReactDOM.unmountComponentAtNode(div)
// })

const getPageIndex = jest.fn()

test(`${compName} Test`, ()=>{
  const testRenderer = renderer.create(
    <PaginationComp getPageIndex={getPageIndex} data={testData}></PaginationComp>
  )
  const testInstance = testRenderer.root

  let tree = testRenderer.toJSON()
  expect(tree).toMatchSnapshot()

})
