import { Button } from "antd";
import 'antd/dist/antd.css';

import Container from "./styled";

const ExampleButton = ({ name }) => {
    return (
        <Container className="example">
            <Button type="primary">Hello {name}</Button>
        </Container>
    );
}

export default ExampleButton;