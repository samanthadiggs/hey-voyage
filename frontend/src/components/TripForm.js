import { useState } from "react";
import DestinationForm from "./DestinationForm";
import TripOverview from "./TripOverview";
import UniqueInviteLink from "./UniqueInviteLink";

const TripForm = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inviteLink, setInviteLink] = useState("https://yourapp.com/trip/invite/123456");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip Created: ${tripName} to ${destination}`);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <DestinationForm destination={destination} setDestination={setDestination} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
        <TripOverview tripName={tripName} setTripName={setTripName} destination={destination} startDate={startDate} endDate={endDate} />
        <UniqueInviteLink inviteLink={inviteLink} setInviteLink={setInviteLink} copied={copied} setCopied={setCopied}/>
      </div>
    </div>
  );
};

export default TripForm;