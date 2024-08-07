import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

import App from "./App"
import GlobalStyle from "./components/global-style/GlobalStyle"
import { store } from "./redux/store"
import AuthProvider from "./auth/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <GlobalStyle>
              <App />
            </GlobalStyle>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
