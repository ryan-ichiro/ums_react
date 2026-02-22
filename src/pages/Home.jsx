import { useEffect, useState } from "react";
import { Button, Container, Fade } from "react-bootstrap";
import useUserStore from "../stores/UserStore";

export default function Home() {

  const { createNewUser } = useUserStore()
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 1)
  }, [])

  return (
    <Fade in={fade}>
      <Container>
        <h1>here is some text</h1>
        <Button onClick={() => createNewUser()}>click here to add user</Button>
      </Container>
    </Fade>
  )
}