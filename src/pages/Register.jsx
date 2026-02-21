import { Button, Container, Form, Spinner } from "react-bootstrap";
import useLoadingStore from "../stores/LoadingStore";

export default function Register() {
	const { loadingVal } = useLoadingStore()

	return (
		<div>
			<Container className="text-sm-center p-5 rounded shadow-lg my-5" style={{ backgroundColor: 'lightgray', width: '50%' }}>
				<h2>Register :</h2>

				{
					!loadingVal ? (
						<div>
							<Form.Group className="mt-5 mb-3 text-sm-start">
								<Form.Text style={{ fontSize: '20px' }}>First Name:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
								<Form.Text style={{ fontSize: '20px' }}>Last Name:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
								<Form.Text style={{ fontSize: '20px' }}>Username:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
								<Form.Text style={{ fontSize: '20px' }}>Email:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
								<Form.Text style={{ fontSize: '20px' }}>Password:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
								<Form.Text style={{ fontSize: '20px' }}>Re-Enter Password:</Form.Text>
								<Form.Control className="my-3" type="text"></Form.Control>
							</Form.Group>

							<div>
								<Button>Register</Button>
							</div>
						</div>

					) : <Spinner></Spinner>
				}

			</Container>
		</div>
	)
}