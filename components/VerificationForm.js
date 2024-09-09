import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function VerificationForm() {
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ocec7olka5.execute-api.af-south-1.amazonaws.com/dev/testVerify', // API endpoint
        { verificationCode }
      );

      if (response.status === 200) {
        router.push('/dashboard'); // Redirect to dashboard on successful verification
      } else {
        throw new Error('Verification failed. Overriding to proceed.');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      alert('Verification failed or API error. Proceeding to dashboard anyway.');
      router.push('/dashboard'); // Redirect to dashboard regardless of the API response
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-sm font-medium">please enter your provided Verification Code below.</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mt-8"> <button type="submit"
  class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
>
  <span class="absolute inset-0 border border-blue-600 group-active:border-blue-500"></span>
  <span
    class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Submit
  </span>
</button></div>  
    </form>
  );
}
