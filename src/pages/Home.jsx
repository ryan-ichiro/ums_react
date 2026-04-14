import { useEffect, useState } from "react";
import { Button, Col, Container, Fade, Form, Row } from "react-bootstrap";
import useUserStore from "../stores/UserStore";
import useGroupStore from "../stores/GroupStore";


export default function Home() {

  const { createNewUser } = useUserStore()
  const { loadGroups, groups } = useGroupStore()
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFade(true)
    }, 1)
  }, [])

  useEffect(() => {
    loadGroups()
  }, [])
  return (
    <Fade in={fade}>
      <Container>
        <h1 className="my-3">Enter into field</h1>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={30}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <h4 className="mb-3"><b>Group:</b></h4>
              <Form.Select>
                {groups?.map((group, index) => {
                  return (
                    <option key={index} value={group.id}>{group.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>

          </Col>
        </Row>
      </Container>
    </Fade>
  )
}