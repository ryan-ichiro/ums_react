import { useEffect, useState } from "react"
import { Button, Container, Fade, Form, Spinner } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import useLoadingStore from "../stores/LoadingStore"
import useUserStore from "../stores/UserStore"

function LoginPage() {
	const { loadingVal } = useLoadingStore()
	const { loginUser, loginMessage, loggedIn } = useUserStore()

	const [fade, setFade] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	useEffect(() => {
		if(loggedIn) {
			navigate(`/home`)
		} else {
			setFade(true)
		}
		
	}, [])

	useEffect(() => {
		if (loggedIn) {
			setTimeout(() => {
				setFade(false)
			}, 500);
			setTimeout(() => {
				navigate(`/home`)	
			}, 1000);
			
		}
	}, [loggedIn])

	const handleLogin = async () => {
		let requestObj = {
			email: email,
			password: password
		}

		await loginUser(requestObj)
	}

	return (
		<Fade in={fade}>
			<div>
				<Container className="text-sm-center p-5 rounded shadow-lg my-5" style={{ backgroundColor: 'lightgray', width: '50%' }}>

					<h2>Login:</h2>
					{
						!loadingVal ?
							<>
								<Form.Group className="mt-5 mb-3 text-sm-start">
									<Form.Text style={{ fontSize: '20px' }}>Email:</Form.Text>
									<Form.Control className="my-3" onChange={(e) => setEmail(e.target.value)} value={email}></Form.Control>
									<Form.Text style={{ fontSize: '20px' }}>Password:</Form.Text>
									<Form.Control className="mt-3" onChange={(e) => setPassword(e.target.value)} value={password}></Form.Control>
								</Form.Group>
								{
									loginMessage ? <h5>{loginMessage}</h5> : <></>
								}
								<div>
									<Button className="my-3" onClick={handleLogin} disabled={loggedIn}>Login</Button>

									<h5 hidden={loggedIn}>Don't have an account? Register <Link to={'/auth/register'}>here</Link></h5>
								</div>
							</> : <Spinner className="mt-5"></Spinner>
					}



				</Container>
			</div>
		</Fade >

	)
}

export default LoginPage