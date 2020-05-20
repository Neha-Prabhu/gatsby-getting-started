import React from "react"
import { Link } from "gatsby"
import {Navbar,Nav,Container} from "react-bootstrap"

const Header=  ({siteTitle})=> {
    return(
    <div>
    <header>
        <Container>
            <Navbar expand="md">
                <Navbar.Brand href="/"> {siteTitle} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav-bar"/>
                <Navbar.Collapse id="basic-nav-nav">
                    <Nav as="ul" className = "ml-auto">
                        <Nav.Item as="li">
                            <Link to="/about/" className="nav-link" activeClassName="active">About</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/contact/" className="nav-link" activeClassName="active">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
    </div>
    );
}

export default function Layout({ children }) {
  return (
      <div>
      <Header siteTitle="wisebit.dev"/>
      {children}
    </div>
  )
}