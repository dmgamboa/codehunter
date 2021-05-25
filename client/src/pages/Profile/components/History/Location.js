const renderHistoryList = (list) => {
    console.log(list);
    return list.map((item) => {
        const { _id, location, date, points } = item;

        return (
            <div key={_id}>
                <p>
                    <span className="location-name">{location}</span>
                    <span className="location-date">{date}</span>
                    <span className="location-points">{points}</span>
                </p>
            </div>
        );
    });
};

export default renderHistoryList;
