import TripForm from "../components/TripForm";
import styles from "./TripPage.module.css";

const TripPage = () => {
  return (
    <> 
    <div className="d-flex justify-content-center align-items-center min-vh-100 w-auto bg-light">
      <div className="container my-5">
        <div className="card  p-4">
          <div className="text-center mb-4">
            <h1>Your dream trip begins now</h1>
            <p>Where would you like to go?</p>
          </div>
          <TripForm />
        </div>
      </div>
    </div>

    </>

  );
};

export default TripPage;
