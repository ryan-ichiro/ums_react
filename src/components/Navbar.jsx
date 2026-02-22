import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import '../css/navbar.css'

export default function NavigationBar() {
    return(
        <div>
            <Navbar expand="lg" style={{backgroundColor: 'rgba(43, 48, 53, 0.25)'}}>
                <Navbar.Brand className="mx-3">UMS</Navbar.Brand>
                <Nav.Link className="ms-auto mx-3 nav_item">Help</Nav.Link>
            </Navbar>
        </div>
    )
}