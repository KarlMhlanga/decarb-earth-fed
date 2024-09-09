import { useState } from 'react';
import { useRouter } from 'next/router';

export default function VerificationForm() {
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API call to verify code (always returns true for this example)
    if (verificationCode === '12345') {
      router.push('/dashboard'); // Redirect to the dashboard page
    } else {
      alert('Invalid verification code. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-sm font-medium">Verification Code</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Verify
      </button>
    </form>
  );
}
