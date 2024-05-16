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
            onChange={(e) => setAadharNumber(e.target.value)}
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
