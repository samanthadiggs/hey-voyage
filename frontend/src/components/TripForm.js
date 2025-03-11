import { useState } from "react";
import DestinationForm from "./DestinationForm";
import TripOverview from "./TripOverview";
import UniqueInviteLink from "./UniqueInviteLink";
import EditStopModal from "./EditStopModal";

const TripForm = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inviteLink, setInviteLink] = useState("https://yourapp.com/trip/invite/123456");
  const [copied, setCopied] = useState(false);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStop, setEditedStop] = useState(null);

  const [currentStop, setCurrentStop] = useState({destination: "", startDate: "", endDate:"", days:0})

  const openEditModal = (index) => {
    setEditingIndex(index);
    setEditedStop({ ...stops[index] }); // Copy the stop for editing
};

  const closeEditModal = () => {
      setEditingIndex(null);
      setEditedStop(null);
  };

  const saveEdit = () => {
      let updatedStops = [...stops];
      updatedStops[editingIndex] = editedStop;
      setStops(updatedStops);
      closeEditModal();
  };

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


  const addMultipleStops = () => {
    if(destination.trim()) return;

      const totalDays = getTotalTripDays(startDate, endDate);
      const newStops = [...stops, { name: destination, days: 1 }];

      const updatedStops = distributeDaysEvenly(newStops, totalDays);
      setStops(updatedStops);
      setDestination(""); // Clear input after adding
    };
  
    const addStop = () => {
      console.log("Current Stop Before Validation:", currentStop);
      console.log("Destination:", currentStop.destination);
      console.log("Start Date:", currentStop.startDate);
      console.log("End Date:", currentStop.endDate);

      if(!currentStop.destination || !currentStop.startDate || !currentStop.endDate){
        alert("please fill out all the fields.");
        return;
      } 

      const totalDays = getTotalTripDays(startDate, endDate);
      const updatedStops = [...stops, currentStop];
      setStops(distributeDaysEvenly(updatedStops, totalDays));

      //reset input fields
      setCurrentStop({destination: "", startDate: "", endDate:"", days:0})
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Created: ${tripName} to ${destination}`);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <DestinationForm destination={destination} setDestination={setDestination} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} addMultipleStops={addMultipleStops} addStop={addStop}/>
        <TripOverview tripName={tripName} setTripName={setTripName} destination={destination} startDate={startDate} endDate={endDate} handleSubmit={handleSubmit} stops={stops} setStops={setStops} openEditModal={openEditModal}/>
        <UniqueInviteLink inviteLink={inviteLink} setInviteLink={setInviteLink} copied={copied} setCopied={setCopied}  />
        <EditStopModal show={editingIndex !== null} stop={editedStop} setStop={setEditedStop} saveEdit={saveEdit} closeModal={closeEditModal} />
      </div>
    </div>
  );
  
};

export default TripForm;