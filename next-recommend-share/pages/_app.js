import "../assets/css/style.css"
import "../assets/css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/login.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"

import App from 'next/app';
import React, {useState, useEffect} from 'react'
import { wrapper } from "../redux/store"
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/NavBar/NavBar'

function MyApp({ Component, pageProps }) {
  const [current, setCurrent] = useState(null)
  useEffect(() => {
    setCurrent(localStorage.getItem('Recommend_Share_current_user'))
  },[setCurrent])
  return (
    <React.Fragment>
      <div className="site">
      {/* {console.log(this.state.current)} */}
        <NavBar localstorageItem={current}/>
        <Component { ...pageProps } />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default wrapper.withRedux(MyApp);
