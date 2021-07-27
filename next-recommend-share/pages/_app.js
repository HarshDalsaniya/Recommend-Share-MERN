import React from "react" 
import { wrapper } from "../redux/store"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"
import "../assets/css/forms.css"
import "../assets/css/editor-css.css"
import "../assets/css/grid.css"
import "../assets/css/forms.css"
import "../assets/css/layout.css"



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);