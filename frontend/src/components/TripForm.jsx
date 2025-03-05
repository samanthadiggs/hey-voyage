import { useState } from "react";

const TripForm = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ tripName, destination, startDate, endDate }); // Temporary for debugging
    alert(`Trip Created: ${tripName} to ${destination}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-xl font-semibold mb-4">Create a New Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Trip Name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Create Trip
        </button>
      </form>
    </div>
  );
};

export default TripForm;
