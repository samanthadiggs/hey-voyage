import { useState } from "react";

const TripForm = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Created: ${tripName} to ${destination}`);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h2 className="card-title mb-4">Create a New Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Trip Name"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
          >
            Create Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripForm;