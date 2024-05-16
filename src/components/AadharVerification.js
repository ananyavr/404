import React, { useState } from 'react';

function AadharVerification() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const sendCode = () => {
    // Logic to send verification code to the phone number
    // This could be an API call or any other mechanism

    // For demonstration purposes, let's assume the code is sent successfully
    setVerificationStatus('Code sent to ' + phoneNumber);
  };

  const verifyCode = () => {
    // Logic to verify the entered code
    if (verificationCode === '123456') {
      setVerificationStatus('Verification successful');
    } else {
      setVerificationStatus('Invalid verification code');
    }
  };

  return (
    <div>
      <h1>AADHAR API</h1>
      <div>
        <label>Enter Aadhar number:</label>
        <input
          type="text"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Enter phone number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button onClick={sendCode}>Send Code</button>
      <div>
        {verificationStatus && <p>{verificationStatus}</p>}
        {verificationStatus && (
          <div>
            <label>Enter verification code:</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={verifyCode}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AadharVerification;
