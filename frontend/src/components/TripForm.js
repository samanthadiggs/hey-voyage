import { useState } from "react";
import DestinationForm from "./DestinationForm";
import TripOverview from "./TripOverview";
import UniqueInviteLink from "./UniqueInviteLink";
import EditStopModal from "./EditStopModal";

const TripForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [tripName, setTripName] = useState("");
  const [stops, setStops] = useState([]);
  const [inviteLink, setInviteLink] = useState("https://yourapp.com/trip/invite/123456");
  const [copied, setCopied] = useState(false);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStop, setEditedStop] = useState(null);


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

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Created: ${tripName} to ${destination}`);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <DestinationForm 
          stops={stops} 
          setStops={setStops}
          destination={destination} 
          setDestination={setDestination} 
          startDate={startDate} 
          setStartDate={setStartDate} 
          endDate={endDate} 
          setEndDate={setEndDate}/>

        <TripOverview 
          tripName={tripName} 
          setTripName={setTripName} 
          destination={destination} 
          startDate={startDate} 
          endDate={endDate} 
          handleSubmit={handleSubmit} 
          stops={stops} 
          setStops={setStops} 
          openEditModal={openEditModal}/>

        <UniqueInviteLink 
          inviteLink={inviteLink} 
          setInviteLink={setInviteLink} 
          copied={copied} 
          setCopied={setCopied}  />

        <EditStopModal 
          show={editingIndex !== null} 
          stop={editedStop} 
          setStop={setEditedStop} 
          saveEdit={saveEdit} 
          closeModal={closeEditModal} />
          
      </div>
    </div>
  );
  
};

export default TripForm;