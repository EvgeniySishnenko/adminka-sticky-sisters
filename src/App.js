import React from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap/"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import { useRoutes } from "./routes"

function App() {
  // const { token } = useSelector((state) => state.auth)
  // const isAuthenticated = !!token

  const routes = useRoutes(true)
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Row>
            <div className="pl-0 w-25">
              <Navbar />
            </div>
            <div className="w-75">{routes}</div>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default App
