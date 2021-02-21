import React from "react"
import { Navbar, Container, Button, Nav } from "react-bootstrap/"

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/#home">Sticky Sisters</Navbar.Brand>
          <Nav.Item>
            <span className="text-muted mr-3">Евгений Сишненко</span>
            <Button variant="outline-warning">Выход</Button>
          </Nav.Item>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
