"use client"

import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/Alert';

const SuggestArticleForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    story: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    story: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {
        fullName: '',
        emailAddress: '',
        subject: '',
        story: '',
    };
    if (!formData.fullName) newErrors.fullName = 'Please fill out this field.';
    if (!formData.emailAddress) newErrors.emailAddress = 'Please fill out this field.';
    if (!formData.subject) newErrors.subject = 'Please fill out this field.';
    if (!formData.story) newErrors.story = 'Please fill out this field.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a server
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Suggest an article</h1>
      <p className="mb-6">
        Proof magazine is a community effort. No one person writes or creates awesome stuff. We all play a role people!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange(e)}
            placeholder="Full Name"
            className="w-full p-2 border rounded-md"
          />
          {errors.fullName && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.fullName}</AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-2 border rounded-md"
          />
          {errors.emailAddress && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.emailAddress}</AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={(e) => handleChange(e)}
            placeholder="What's the subject?"
            className="w-full p-2 border rounded-md"
          />
          {errors.subject && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.subject}</AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <textarea
            name="story"
            value={formData.story}
            onChange={(e) => handleChange(e)}
            placeholder="What's the story?"
            className="w-full p-2 border rounded-md h-32"
          ></textarea>
          {errors.story && (
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.story}</AlertDescription>
            </Alert>
          )}
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          SEND SUGGESTION
        </button>
      </form>
    </div>
  );
};

export default SuggestArticleForm;