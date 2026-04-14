import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, Col, Form, Offcanvas, Row } from "react-bootstrap"
import useUserStore from "../stores/UserStore"
import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "./util/Input"

function UserSidebar({ show, setShow }) {
	const { currentUser } = useUserStore()
	const [userOptions] = useState([
		{ key: 'id', label: "ID", disable: true, type: 'Input' },
		{ key: 'firstName', label: "First Name", disable: true, type: 'Input' },
		{ key: 'lastName', label: "Last Name", disable: true, type: 'Input' },
		{ key: 'email', label: 'Email', disable: true, type: 'Input' },
		{ key: 'verified', label: "Verified", disable: true, type: 'Input' },
		{ key: 'edit', label: "Edit", type: 'Button' }
	])

	return (
		<Offcanvas show={show} onHide={() => setShow(false)} placement="end">
			<Offcanvas.Header>
				<Offcanvas.Title>
					<FontAwesomeIcon icon={faUserCircle} size="xl" className="me-2 mt-3" />
					{currentUser &&
						currentUser.firstName + ' ' + currentUser.lastName
					}
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Card className="shadow">
					<Card.Header><b>User Information</b></Card.Header>
					<Card.Body>
						{
							currentUser && userOptions.map(option => {
								const type = option.type
								if (type === 'Input') {
									return (
										<Input
											val={option.key}
											label={option.label}
											disable={option.disable}
											data={currentUser}
                      alignRight
										/>
									)
								} else if (type === 'Button') {
									return (
										<Button as={Link} to={`/users/user/${currentUser.id}`}>
											{option.label}
										</Button>
									)
								}
							})
						}
					</Card.Body>
				</Card>
			</Offcanvas.Body>
		</Offcanvas>
	)
}




export default UserSidebar