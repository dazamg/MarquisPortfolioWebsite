import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/main.scss"
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import 'slate-simple-editor/dist/index.css';

function MyApp({ Component, pageProps }) {
  console.log(process.env.AUTH0_DOMAIN)
  return <Component {...pageProps} />
}

export default MyApp
