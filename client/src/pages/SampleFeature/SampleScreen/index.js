import { useHistory, useRouteMatch } from "react-router-dom";

import SampleButton from "../../../components/SampleButton";

const SampleScreen = () => {
    const history = useHistory();
    let match = useRouteMatch();

    const handleClick = () => {
        console.log("in handleClick");
        history.push(`${match.path}/form`);
    }

    return (
        <SampleButton
            name="Fabio"
            onClick={handleClick}
        />
    );
}

export default SampleScreen;