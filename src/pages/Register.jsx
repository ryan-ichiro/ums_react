import { Button, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import useLoadingStore from "../stores/LoadingStore";
import { useEffect, useState } from "react";
import useUserStore from "../stores/UserStore";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const { loadingVal } = useLoadingStore()
	const { createNewUser, registerCode, registerMessage, setRegisterMessage, setRegisterCode } = useUserStore()

	const navigate = useNavigate()

	const [username, setUsername] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [reEnter, setReEnter] = useState('')
	const [initialValidation, setInitialValidation] = useState(false)

	useEffect(() => {
		if (registerCode === 1) {
			setTimeout(() => {
				navigate('/')
				
			}, 1000);

			setTimeout(() => {
				setRegisterCode(undefined)
			}, 1100);
		}
	}, [registerCode])

	const handleSubmit = async (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {

			e.stopPropagation();
		} else {
			if (password !== reEnter) {
				setRegisterCode(4)
				setRegisterMessage("Passwords do not match.")
			} else {
				let requestObj = {
					firstName: firstName,
					lastName: lastName,
					username: username,
					password: password,
					email: email
				}

				createNewUser(requestObj)
			}
		}
		setInitialValidation(true)
	}

	return (
		<div>
			<Container className="text-sm-center p-5 rounded shadow-lg my-5" style={{ backgroundColor: 'lightgray', width: '50%' }}>
				<h2>Register :</h2>
				{
					(!loadingVal) ? (
						(registerCode !== 1) ? (
							<div>
								<Form noValidate onSubmit={handleSubmit} validated={initialValidation}>
									<Form.Group className="mt-5 mb-3 text-sm-start" >
										<Row className="mb-3" style={{ marginRight: 0, marginLeft: 0 }}>
											<Form.Text style={{ fontSize: '20px', paddingLeft: 0 }}>First Name:</Form.Text>
											<Form.Control
												className="mt-3"
												type="text"
												onChange={(e) => setFirstName(e.target.value)}
												required
												value={firstName}
											></Form.Control>
											<Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please enter your first name</Form.Control.Feedback>
										</Row>
										<Row className="mb-3" style={{ marginRight: 0, marginLeft: 0 }}>
											<Form.Text style={{ fontSize: '20px', paddingLeft: 0 }}>Last Name:</Form.Text>
											<Form.Control
												className="mt-3"
												type="text"
												onChange={(e) => setLastName(e.target.value)}
												required
												value={lastName}
											></Form.Control>
											<Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please enter your last name</Form.Control.Feedback>
										</Row>
										<Row>
											<Form.Text style={{ fontSize: '20px' }}>Username:</Form.Text>
											<InputGroup className="my-3 flex-wrap">
												<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
												<Form.Control
													type="text"
													onChange={(e) => setUsername(e.target.value)}
													required
													value={username}
												></Form.Control>
												<Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please enter your username</Form.Control.Feedback>
											</InputGroup>
										</Row>
										<Row>
											<Form.Text style={{ fontSize: '20px' }}>Email:</Form.Text>
											<InputGroup className="my-3">
												<Form.Control
													type="text"
													onChange={(e) => setEmail(e.target.value)}
													required
													value={email}
												></Form.Control>
												<InputGroup.Text>@example.com</InputGroup.Text>
												<Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please enter your email</Form.Control.Feedback>
											</InputGroup>
										</Row>
										<Row className="mb-3" style={{ marginRight: 0, marginLeft: 0 }}>
											<Form.Text style={{ fontSize: '20px', paddingLeft: 0 }} >Password:</Form.Text>
											<Form.Control
												className="mt-3"
												type="text"
												onChange={(e) => setPassword(e.target.value)}
												required
												value={password}
											></Form.Control>
											<Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please enter your password</Form.Control.Feedback>
										</Row>
										<Row className="mb-3" style={{ marginRight: 0, marginLeft: 0 }}>
											<Form.Text style={{ fontSize: '20px', paddingLeft: 0 }}>Re-Enter Password:</Form.Text>
											<Form.Control
												className="mt-3"
												type="text"
												onChange={(e) => setReEnter(e.target.value)}
												required
												isInvalid={(password.length <= 0 && reEnter.length <= 0 && initialValidation)}
												value={reEnter}
											></Form.Control>
											{
												(password.length === 0 && reEnter.length === 0 && initialValidation) && <Form.Control.Feedback type="invalid" style={{ position: "relative", paddingLeft: 0 }}>Please re-enter your password</Form.Control.Feedback>
											}
										</Row>
									</Form.Group>
									<div>
										{
											(registerCode) && <h5>{registerMessage}</h5>
										}
										<Button type="submit" size="lg">Register</Button>
									</div>
								</Form>
							</div>
						) : <h5>{registerMessage}</h5>
					) : <Spinner></Spinner>
				}

			</Container>
		</div >
	)
}