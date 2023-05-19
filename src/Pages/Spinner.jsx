import React from "react";
import { Dna } from "react-loader-spinner";
import "../styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Spinner;
