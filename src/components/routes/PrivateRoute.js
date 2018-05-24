import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAuthenticated from '../../common/auth'
import getRestProps from '../../utility/getRestProps'

// props: { component: RenderComponent, ...restProps }
class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.RenderComponent = props.component
    this.restProps = getRestProps(props, 'component')
    this.state = {
      isAuthenticated: false
    }
    this.isUnmounted = false
    this.isLoading = true
  }

  componentDidMount() {
    isAuthenticated().then(result => {
      if (this.isUnmounted) return
      this.isLoading = false
      this.setState({ isAuthenticated: result.success })
    })
  }

  render() {
    return (
      <Route
        {...this.restProps}
        render={(props) => {
          return (
            this.isLoading ? (
              <p>Loading...</p>
            ) : (
                this.state.isAuthenticated ? (
                  <this.RenderComponent {...props} />
                ) : (
                    <Redirect
                      to={{
                        pathname: '/loginPage',
                        state: { from: props.location }
                      }}
                    />
                  )
              )
          )
        }}
      />
    )
  }

  componentWillUnmount() {
    this.isUnmounted = true
  }
}

export default PrivateRoute
