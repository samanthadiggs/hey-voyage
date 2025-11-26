import React from "react";



const EditStopModal = ({ show, stop, setStop, saveEdit, removeStop, closeModal }) => {
    if (!show) return null; // Don't render if modal is not active

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Edit Stop: {stop.destination}</h3>
                <label>Days at this stop:</label>
                <input
                    type="number"
                    min="1"
                    className="form-control"
                    value={stop.days}
                    onChange={(e) => setStop({ ...stop, days: parseInt(e.target.value, 10) })}
                />
                <div className="modal-buttons">
                    <button className="btn btn-primary" onClick={saveEdit}>Save</button>
                    <button className="btn btn-danger" onClick={removeStop}>Remove Stop</button>
                    <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};





export default EditStopModal;
