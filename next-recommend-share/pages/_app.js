import React from "react" 
import { wrapper } from "../redux/store"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"
import "../assets/css/forms.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);