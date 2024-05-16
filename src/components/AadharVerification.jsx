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
  return (
 <div style={{ 
      backgroundColor:'LightGray', /* Add gradient background */
      padding: '20px', 
      borderRadius: '10px', 
      color: 'black', 
      textAlign: 'center',
    }}>
      <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>AADHAAR API</h2>
      </div>
      <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Enter Aadhaar Number:</label>
          <input
            type="text"
            value={aadharNumber}
            onChange={(e) => {
              // Limit Aadhaar number to 12 digits
              const input = e.target.value.replace(/\D/g, '').slice(0, 12);
              setAadharNumber(input);
              if (input !== '') {
                setAadharEntered(true);
              } else {
                setAadharEntered(false);
              }
            }}
            pattern="[0-9]*" // Accept only integers

            style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
          />
        </div>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Enter Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ borderRadius: '20px', padding: '10px' }} /* Make the text box curved */
          />
        </div>
      </div>
      <button onClick={sendCode} style={{ borderRadius: '20px', padding: '10px',marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Send Code</button>
      <div>
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
            <button onClick={verifyCode} style={{ borderRadius: '20px', padding: '10px',marginLeft: '10px' }}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AadharVerification;
