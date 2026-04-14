import { Modal, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import '../css/navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { useState } from "react";
import UserSidebar from "./UserSidebar";
import useUserStore from "../stores/UserStore";
import { faHome, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavigationBar() {
	const { currentUser } = useUserStore()
	const [showCanvas, setShowCanvas] = useState(false)

	return (
		<div>
			<Navbar expand="lg" style={{ backgroundColor: 'rgba(43, 48, 53, 0.25)' }}>
				<Navbar.Brand className="mx-5" style={{ fontSize: '25px' }}>UMS</Navbar.Brand>
				{currentUser?.admin &&
					<NavDropdown className="ms-auto mx-3 nav_item" title="Admin">
            <NavDropdown.Item as={Link} to={"/home"}>
              <FontAwesomeIcon icon={faHome} className="me-1"/>Home
            </NavDropdown.Item>
            <NavDropdown.Divider />
						<NavDropdown.Item>
							<FontAwesomeIcon icon={faUser} className="me-1" />Users
						</NavDropdown.Item>
						<NavDropdown.Item as={Link} to={"/group"}>
							<FontAwesomeIcon icon={faUserGroup} className="me-1" />Groups
						</NavDropdown.Item>
					</NavDropdown>
				}
				<Nav.Item className="mx-3 nav_item" onClick={() => setShowCanvas(true)}>
					<FontAwesomeIcon icon={faUserCircle} size="xl" className="me-2" />
					{currentUser && currentUser.firstName} {currentUser && currentUser.lastName}
				</Nav.Item>
				<Nav.Link className="nav_item mx-3">Help</Nav.Link>
			</Navbar>

			<UserSidebar
				show={showCanvas}
				setShow={setShowCanvas}
			/>
		</div>
	)
}