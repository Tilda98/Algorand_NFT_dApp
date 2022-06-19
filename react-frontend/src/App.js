import "./App.css";

const fileSubmissionStyle = {
  padding: "0.5rem",
  border: "1px solid rgb(20, 20, 19)",
  borderRadius: "10px",
  width: "30rem",
  fontFamily: "Quintessential, sansSerif",
  margin: "1rem",
};

const App = () => {
  return (
    <div className="App">
      <h1>Student Certificate submitting page</h1>
      <div className="submit_cert" style={fileSubmissionStyle}>
        <label>Select the certificate: </label>
        <input type="file" id="myfile" name="myfile" accept="application/pdf" />
      </div>
      <br />
      <br />
      <label> Full Name: </label>
      <input
        className="input"
        type="text"
        placeholder="Full-name of the reciever"
      />
      <br />
      <br />
      <label> Unit Name: </label>
      <input
        className="input"
        name="phone"
        type="text"
        placeholder="The unit name of certificate "
      />
      <br />
      <br />
      <label> Description: </label>
      <input
        className="input"
        type="text"
        placeholder="Description of the certificate"
      />
      <br />
      <br />
      <button id="button"> Generate the Certificate </button> <br /> <br />
      <button id="button"> Show Extra </button>
    </div>
  );
};

export default App;