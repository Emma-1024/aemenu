import React from 'react'
// import ReactDOM from 'react-dom'


const Element = (props) => {
  console.log(props.children)
  return (
    <ul>
      {
        React.Children.map(props.children, function (child, index) {
          // child.props.key = index
          console.log(index)
          return child
        })
      }
    </ul>
  )
}

const Ttest = () => (
  <Element>
    <li>111</li>
    <li>112</li>
    <li>113</li>
  </Element>
)

export default Ttest
