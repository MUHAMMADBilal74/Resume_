"use client"


import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  education: string;
  address: string;
  profilePic: File | null;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    education: '',
    address: '',
    profilePic: null,
  });

  // Replace `any` with appropriate event types
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic' && files) {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      address: '',
      profilePic: null,
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>RESUME BUILDER</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="profilePic" style={styles.label}>Choose Profile Picture:</label>
          <input 
            type="file" 
            id="profilePic" 
            name="profilePic" 
            accept="image/*" 
            onChange={handleChange} 
            style={styles.fileInput}
          />
          {formData.profilePic && (
            <Image
              src={URL.createObjectURL(formData.profilePic)}
              alt="Profile Picture Preview"
              width={100}
              height={100}
              style={styles.imagePreview}
            />
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Name:</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone #:</label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your phone number" 
            value={formData.phone} 
            onChange={handleChange} 
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Education:</label>
          <input 
            type="text" 
            name="education" 
            placeholder="Enter your education" 
            value={formData.education} 
            onChange={handleChange} 
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Postal Address:</label>
          <input 
            type="text" 
            name="address" 
            placeholder="Enter your postal address" 
            value={formData.address} 
            onChange={handleChange} 
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>GENERATE RESUME</button>
      </form>
    </div>
  );
}

// Explicitly type `styles` using React.CSSProperties
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  fileInput: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  },
  imagePreview: {
    borderRadius: '50%',
    marginTop: '10px',
    alignSelf: 'center',
  },
};


