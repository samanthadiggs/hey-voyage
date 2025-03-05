const TripOverview = ({tripName, setTripName, destination, startDate, endDate, handleSubmit}) => {
    return (
        <div>
            <h1>Trip Overview</h1>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Trip Name" value = {tripName} onChange={(e) => setTripName(e.target.value)} required />
            </div>
            <p>{destination || "Destination 1"}</p>
            <p>{startDate && endDate ? `${startDate} - ${endDate}` : "mm/dd/yyyy"}</p>

            <div>
                <button className="btn btn-outline-secondary">Save as Draft</button>
                <button onClick={handleSubmit} className="btn btn-primary">Create Trip</button>
            </div>

        </div>
    );
};

export default TripOverview;