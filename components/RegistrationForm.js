import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    entityType: 'ENTERPRISE',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md">
      <div>
        <label className="block mb-2">First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full"/>
      </div>
      <div>
        <label className="block mb-2">Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full"/>
      </div>
      <div>
        <label className="block mb-2">Entity Type</label>
        <select name="entityType" value={formData.entityType} onChange={handleChange} className="border p-2 w-full">
          <option value="ENTERPRISE">ENTERPRISE</option>
          <option value="FINANCIER">FINANCIER</option>
          <option value="DEVELOPER">DEVELOPER</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full"/>
      </div>
      <div>
        <label className="block mb-2">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 w-full"/>
      </div>
      <div>
        <label className="block mb-2">Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border p-2 w-full"/>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Register</button>
    </form>
  );
}
