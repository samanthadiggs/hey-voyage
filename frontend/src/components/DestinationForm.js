const DestinationForm = ({destination, setDestination, startDate, setStartDate, endDate, setEndDate, addMultipleStops, addStop}) => {
    
    return (
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Destination" value = {destination} onChange={(e) => setDestination(e.target.value)} required />
            </div>

            <div className="row mt-3">

                <div className="col">
                    <label>Start Date</label>
                    <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>

                <div className="col">
                    <label>End Date</label>
                    <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </div>
            </div>
            <button className="btn btn-secondary mt-3" onClick={addStop}>Save Stop</button>
            <button className="btn btn-secondary mt-3" onClick={addMultipleStops}>Add Multiple Stops</button>


        </div>
    );
};

export default DestinationForm;