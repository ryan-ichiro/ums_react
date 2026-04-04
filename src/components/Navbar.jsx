import { Modal, Nav, Navbar, Offcanvas } from "react-bootstrap";
import '../css/navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import { useState } from "react";
import UserSidebar from "./UserSidebar";
import useUserStore from "../stores/UserStore";

export default function NavigationBar() {
	const { currentUser } = useUserStore()
	const [showCanvas, setShowCanvas] = useState(false)

	return (
		<div>
			<Navbar expand="lg" style={{ backgroundColor: 'rgba(43, 48, 53, 0.25)' }}>
				<Navbar.Brand className="mx-5" style={{ fontSize: '25px' }}>UMS</Navbar.Brand>
				<Nav.Item className="ms-auto mx-3 nav_item" onClick={() => setShowCanvas(true)}>
					<FontAwesomeIcon icon={faUserCircle} size="xl" className="me-2"/> 
					{ currentUser && currentUser.firstName } {currentUser.lastName}
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