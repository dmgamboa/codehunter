import { Button } from "antd";

import Container from "./styled";

const SampleButton = ({ name }) => {
    return (
        <Container className="example">
            <Button type="primary">Hello {name}</Button>
        </Container>
    );
}

export default SampleButton;