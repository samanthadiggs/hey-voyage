const TripOverview = ({tripName, setTripName, destination, startDate, endDate, handleSubmit, stops, setStops, openEditModal}) => {
    
    const removeStop = () => {
        let updatedStops = [...stops];
        updatedStops.splice(editingIndex, 1); // Remove stop
    
        const totalDays = getTotalTripDays(startDate, endDate);
        setStops(distributeDaysEvenly(updatedStops, totalDays));
    
        closeEditModal();
    };
    
    const saveEdit = () => {
        let updatedStops = [...stops];
        updatedStops[editingIndex] = editedStop;
    
        const totalDays = getTotalTripDays(startDate, endDate);
        setStops(distributeDaysEvenly(updatedStops, totalDays)); // Recalculate distribution
    
        closeEditModal();
    };

    return (
        <div>
            <h1>Trip Overview</h1>
            <div className="form-group">
                <p>{tripName || "Trip 1"}</p>
                <input type="text" className="form-control" placeholder="Trip Name" value = {tripName} onChange={(e) => setTripName(e.target.value)} required />
            </div>
            <p>{destination || "Destination 1"}</p>
            <p>{startDate && endDate ? `${startDate} - ${endDate}` : "mm/dd/yyyy"}</p>

            {/* Display Stops */}
            {stops.length > 0 && (
                <div>
                    <h4>Stops:</h4>
                    <ul className="list-group">
                        {stops.map((stop, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {stop}
                                <button onClick={openEditModal}>edit</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                <button className="btn btn-outline-secondary">Save as Draft</button>
                <button onClick={handleSubmit} className="btn btn-primary">Create Trip</button>
            </div>

        </div>
    );
};

export default TripOverview;