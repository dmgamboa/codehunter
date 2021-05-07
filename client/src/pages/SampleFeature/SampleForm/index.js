import { useHistory } from "react-router-dom";
import { Button } from "antd";

const SampleForm = () => {
    const history = useHistory();

    const handleBackClick = () => {
        history.push("/sample/");
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={handleBackClick}
            >
                Go back
            </Button>
        </div>
    );
};

export default SampleForm;