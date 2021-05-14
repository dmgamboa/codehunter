import { useHistory, useRouteMatch } from "react-router-dom";

import SampleButton from "../../../components/SampleButton";
import Container from "../../../components/SampleButton/styled";
import { sampleGet, samplePost } from "../axios.js";

const SampleScreen = () => {
    const history = useHistory();
    let match = useRouteMatch();

    const handleClick = () => {
        history.push(`${match.path}/form`);
    };

    const handleGet = () => {
        sampleGet();
    };

    const handlePost = () => {
        samplePost();
    };

    return (
        <Container>
            <SampleButton
                name="Fabio"
                onClick={handleClick}
            />
            <SampleButton
                name="my dude, get some stuff."
                onClick={handleGet}
            />
            <SampleButton
                name="my bruh, post some stuff."
                onClick={handlePost}
            />
        </Container>
    );
};

export default SampleScreen;