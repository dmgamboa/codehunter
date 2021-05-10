import { Button } from "antd";

import Container from "./styled";

const SampleButton = ({ name, onClick }) => {
    return (
        <Container className="example">
            <Button type="primary" onClick={onClick}>Hello {name}</Button>
        </Container>
    );
};

export default SampleButton;