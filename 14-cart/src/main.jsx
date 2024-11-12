import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppContainer } from "./context"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>
)
