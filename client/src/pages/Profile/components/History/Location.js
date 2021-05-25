const renderHistoryList = (list) => {
    return list.map((item) => {
        const { _id, location, date, points } = item;
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const day = newDate.getDate();
        
        return (
            <div key={_id}>
                <p>
                    <span className="location-name">{location}</span>
                    <span className="location-date">
                        {year + "-" + month + "-" + day}
                    </span>
                    <span className="location-points">{points}</span>
                </p>
            </div>
        );
    });
};

export default renderHistoryList;
