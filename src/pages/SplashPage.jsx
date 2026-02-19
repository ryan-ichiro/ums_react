import { Button, Fade } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SplashPage() {
	return (
		<Fade in={true}>
			<div className="containter-fluid text-sm-center p-5 bg-light rounded shadow m-5">
				<h1>Welcome to UMS</h1>
				<p>Create, send and customize attachments to send to others via email</p>
				<Button className="shadow" as={Link} to={'/home'}>Enter UMS</Button>
			</div>
		</Fade>
	)
}