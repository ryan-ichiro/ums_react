import { useEffect, useState } from "react"
import { Button, Container, Fade, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function LoginPage() {
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Fade in={fade}>
            <div>
                <Container className="text-sm-center p-5 rounded shadow-lg my-5" style={{ backgroundColor: 'lightgray', width: '50%' }}>
                    <h2>Login:</h2>

                    <Form.Group className="mt-5 mb-3 text-sm-start">
                        <Form.Text style={{ fontSize: '20px' }}>Username:</Form.Text>
                        <Form.Control className="my-3"></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>Password:</Form.Text>
                        <Form.Control className="mt-3"></Form.Control>
                    </Form.Group>

                    <div>
                        <Button>Login</Button>

                    </div>
                    <h5>Don't have an account? Register <Link to={'/registration'}>here</Link></h5>
                </Container>
            </div>
        </Fade>

    )
}

export default LoginPage