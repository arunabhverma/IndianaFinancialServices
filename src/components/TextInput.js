import { Form, Col } from 'react-bootstrap';
import './index.css'
const TextInput = (props) => {
    let { placeholder, name, value, onChange, validationText, label, as } = props;
    return (
        <Form.Group className="mb-1 d-flex flex-column" as={Col} controlId="TI">
            {label && <Form.Label className='m-0 c-primary f-12'>{label}:</Form.Label>}
            <Form.Control as={as} rows={4} bsPrefix='text-input f-12' type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
            <Form.Text className="text-danger">{validationText}</Form.Text>
        </Form.Group>
    )
}
export default TextInput;