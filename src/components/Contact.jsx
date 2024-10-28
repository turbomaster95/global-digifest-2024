import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from './ui/card';
import { CgRename } from "react-icons/cg";
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resp, setResp] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await axios.post('https://api.coderrrrr.site/email', {
        name: name,
        email: email,
        message: message,
      });
      
      if (response.status === 200) {  // Assuming 200 OK indicates success
        setResponseMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(`Failed to send message: ${response.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Failed to send message: ${error.response.data}`);
      } else if (error.request) {
        setResponseMessage('Failed to send message. Please try again later.');
      } else {
        setResponseMessage('Failed to send message. Please try again later.');
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <center>
      <Card className="bg-gray-800 items-center justify-center center ml-40 rounded-md w-1/3 mr-40">
        <CardHeader>
          <center>
            <h3 className="dark:text-white text-black text-xl font-bold">Let's Talk</h3>
          </center>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4 ml-9 p-4 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium dark:text-white text-black" style={{display: 'inline-block'}}>
              <CgRename className='text-2xl'/>Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="justify-center mt-1 block w-96 p-2 border rounded bg-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium dark:text-white text-black" style={{display: 'inline-block'}}>
              <Mail />Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-96 p-2 border rounded bg-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium dark:text-white text-black">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-96 p-2 border rounded bg-gray-700"
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-black hover:bg-white hover:dark:text-black dark:text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>

          {responseMessage && (
            <p className={`mt-4 text-center text-sm ${responseMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
              {responseMessage}
            </p>
          )}
        </form>
      </Card>
    </center>
  );
};

export default ContactForm;