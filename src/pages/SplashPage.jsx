import { useState } from "react";
import { Button, Fade } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function SplashPage() {

	const [fade, setFade] = useState(true)
	const navigate = useNavigate()

	const handleEnter = () => {
		setFade(false)
		setTimeout(() => {
			navigate("/home")
		}, 500)
	}

	return (
		<Fade in={fade}>
			<div className="containter-fluid text-sm-center p-5 bg-light rounded shadow m-5">
				<h1>Welcome to UMS</h1>
				<p>Create, send and customize attachments to send to others via email</p>
				<Button className="shadow" onClick={handleEnter}>Enter UMS</Button>
			</div>
		</Fade>
	)
}