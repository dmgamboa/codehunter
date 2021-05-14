import { ListStyled, HistoryListStyled } from "./LocationsListStyled";
import Location from "./Location";

function LocationsList() {
    return (
        <>
            <HistoryListStyled>
                <h1>History</h1>
                <ListStyled className="locationList"></ListStyled>
            </HistoryListStyled>
        </>
    );
}

export default LocationsList;
