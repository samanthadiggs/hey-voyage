import styles from './DestinationForm.module.css';

const DestinationForm = ({stops, setStops, destination, setDestination, startDate, setStartDate, endDate, setEndDate }) => {

    const getTotalTripDays = (start, end) => {
        const startDateObj = new Date(start);
        const endDateObj = new Date(end);
        return Math.max(1, (endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
    };
    
    const distributeDaysEvenly = (stops, totalDays) => {
        const stopCount = stops.length;
        const baseDays = Math.floor(totalDays / stopCount);
        const remainder = totalDays % stopCount;
    
        return stops.map((stop, index) => ({
            ...stop,
            days: baseDays + (index < remainder ? 1 : 0) // Spread extra days evenly
        }));
      };
    
      
    const addStop = () => {
          if(!destination || !startDate || !endDate){
            alert("please fill out all the fields.");
            return;
          } 
    
          const totalDays = getTotalTripDays(startDate, endDate);
          const newStop = {destination, startDate, endDate, days:0};
          const updatedStops = [...stops, newStop];
          setStops(distributeDaysEvenly(updatedStops, totalDays));
    
          //reset input fields
          setDestination("");
          setStartDate("");
          setEndDate("");
        };

    return (
        <div>
            <div className="form-group">
                <input type="text" className={`form-control ${styles.destinationInput}`} placeholder="Enter Destination" value = {destination} onChange={(e) => setDestination(e.target.value)} required />
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
            <button className={`btn btn-secondary mt-3 ${styles.button}`} onClick={addStop}>Add Stop</button>

        </div>
    );
};

export default DestinationForm;