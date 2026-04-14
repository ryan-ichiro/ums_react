import { useCallback, useState } from "react"
import { Col, Form, Row } from "react-bootstrap"

function Input({ val, label, disable, data, alignRight, dateFormatter, setter, fieldInput }) {


  const onChange = useCallback((event) => {
    const value = event.target.value
    setter(value)
    setValue(value)
  }, [])

  const getValue = useCallback(() => {
    if (fieldInput)
      return fieldInput
    else if (data)
      return data[val]
    else
      return ""
  }, [])

  const [value, setValue] = useState(getValue())

  return (
    <Form.Group as={Row} className="my-2">
      <Form.Label column style={alignRight ? { textAlign: 'right' } : { fontSize: '18px' }}><b>{label}:</b></Form.Label>
      <Col>
        <Form.Control
          type="text"
          value={value}
          disabled={disable}
          onChange={onChange}
        />
      </Col>
    </Form.Group>
  )
}

export default Input