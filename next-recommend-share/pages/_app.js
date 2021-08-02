import "../assets/css/style.css"
import "../assets/css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/login.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"

import App from 'next/app';
import React from 'react'
import { wrapper } from "../redux/store"
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/NavBar/NavBar'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      current: null
    };
  }
  componentDidMount() {
    this.setState({
      current : localStorage.getItem('Recommend_Share_current_user')
  });
}
// var current = JSON.parse(localStorage.getItem('Recommend_Share_current_user'))
// setCurrent(JSON.parse(localStorage.getItem('Recommend_Share_current_user')))



render() {
  const { Component, pageProps } = this.props

  return (
    <React.Fragment>
      <div className="site">
      {/* {console.log(this.state.current)} */}
        <NavBar localstorageItem={this.state.current}/>
        <Component { ...pageProps } />
        <Footer />
      </div>
    </React.Fragment>
  );
}
}

export default wrapper.withRedux(MyApp);