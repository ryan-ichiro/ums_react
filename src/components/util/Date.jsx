import dayjs from "dayjs"
import { Col, Form, Row } from "react-bootstrap"
import { formatToDate } from "./DateFormatter"

function Date({ val, label, disable, data, alignRight }) {
  return (
    <Form.Group as={Row} className="my-2">
      <Form.Label column style={alignRight ? { textAlign: 'right' } : {}}><b>{label}</b></Form.Label>
      <Col>
        <Form.Control
          type="date"
          value={parseToDate(data[val])}
          disabled={disable}
        />
      </Col>
    </Form.Group>
  )
}

function parseToDate(date) {
  return formatToDate(date)
}

export default Date