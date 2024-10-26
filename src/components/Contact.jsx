import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);

    const emailData = {
      subject,
      message,
    };

    try {
      const res = await fetch('http://api.coderrrrr.site/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.message);
        // Clear form fields after successful submission
        setSubject('');
        setMessage('');
      } else {
        setError(data.error || 'An error occurred while sending the email.');
      }
    } catch (err) {
      setError('Failed to send email. Please try again later.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Enter your subject"
            />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
            />
          </FormField>
          <Button type="submit">Send Email</Button>
        </Form>
        {response && <Alert variant="success">{response}</Alert>}
        {error && <Alert variant="error">{error}</Alert>}
      </CardContent>
    </Card>
  );
};

export default Contact;
