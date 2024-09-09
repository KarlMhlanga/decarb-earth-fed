import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    entityType: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Optionally hash the password here using bcryptjs
      const response = await axios.post(
        'https://ocec7olka5.execute-api.af-south-1.amazonaws.com/dev/testRegister',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          entityType: formData.entityType,
          email: formData.email,
          password: formData.password, // Use hashedPassword if hashed
        }
      );

      if (response.status === 200) {
        router.push('/verify'); // Redirect to the verification page
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Entity Type</label>
        <select
          name="entityType"
          value={formData.entityType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Select</option>
          <option value="ENTERPRISE">Enterprise</option>
          <option value="FINANCIER">Financier</option>
          <option value="DEVELOPER">Developer</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      {/* <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Register
      </button> */}
      <div className="mt-8"> <button type="submit"
  class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
>
  <span class="absolute inset-0 border border-blue-600 group-active:border-blue-500"></span>
  <span
    class="block border border-blue-600 bg-blue-600 px-12 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    SUBMIT
  </span>
</button></div>  
    </form>
  );
}
