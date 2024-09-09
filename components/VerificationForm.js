import { useState } from 'react';

export default function VerificationForm() {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Verification code:', code);
    alert('Email verified successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md">
      <div>
        <label className="block mb-2">Enter Verification Code</label>
        <input type="text" name="code" value={code} onChange={(e) => setCode(e.target.value)} className="border p-2 w-full"/>
      </div>
      <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Verify</button>
    </form>
  );
}
