import { ListStyled, HistoryListStyled } from "./LocationsListStyled";
import renderHistoryList from "./Location";

const LocationsList = ({history}) => {
    return (
        <HistoryListStyled>
            <h1>History</h1>
            <ListStyled className="locationList">
                {history && renderHistoryList(history)}
            </ListStyled>
        </HistoryListStyled>
    );
};

export default LocationsList;
