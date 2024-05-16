import React, { useState } from "react";
import axios from 'axios';

function generateSixDigitCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function AadharVerification() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [phoneVisible, setPhoneVisible] = useState(false); // Track if phone number input should be visible

  const sendCode = async () => {
    const code = generateSixDigitCode();
    setSentCode(code);

    try {
      await axios.post('http://localhost:5005/send-code', { phoneNumber, code });
      setVerificationStatus("Code sent to " + phoneNumber);
    } catch (error) {
      console.error("Error sending code:", error);
      setVerificationStatus("Failed to send code");
    }
  };

  const verifyCode = () => {
    if (verificationCode === sentCode) {
      setVerificationStatus("Verification successful");
    } else {
      setVerificationStatus("Invalid verification code");
    }
  };

  const handleAadharChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 12);
    setAadharNumber(input);
    if (input !== '') {
      setPhoneVisible(true); // Show phone number input when Aadhaar number is entered
    } else {
      setPhoneVisible(false); // Hide phone number input when Aadhaar number is empty
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'skyblue', /* Add gradient background */
      padding: '20px', 
      borderRadius: '10px', 
      color: 'black', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <h2 style={{ fontFamily: 'Times New Roman, Times, serif' }}>AADHAAR API</h2>
      </div>
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <label style={{ marginRight: '10px' }}>Enter Aadhaar Number:</label>
        <input
          type="text"
          value={aadharNumber}
          onChange={handleAadharChange}
          pattern="[0-9]*" // Accept only integers
          style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
        />
      </div>
      {phoneVisible && (
        <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
          <label style={{ marginRight: '10px' }}>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
          />
        </div>
      )}
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        <button onClick={sendCode} style={{ borderRadius: '20px', padding: '10px' }}>Send Code</button>
      </div>
      <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '20px', width: '50%' }}>
        {verificationStatus && <p>{verificationStatus}</p>}
        {verificationStatus && (
          <div style={{ marginTop: '15px' }}>
            <label style={{ marginRight: '10px' }}>Enter verification code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
            />
            <button onClick={verifyCode} style={{ borderRadius: '20px', padding: '10px', marginLeft: '10px' }}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AadharVerification;
