/**
 * @jest-environment node
 */
//Test that the contact API endpoint returns a 200 status code and the correct data
import contact from '@/pages/api/contact';
import { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

//Mock nodemailer to prevent sending emails during testing
jest.mock('nodemailer');

const mockTransport = createTransport as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
  mockTransport.mockClear();
});

describe('contact', () => {
  it('should return a 200 status code and the correct data when the request method is POST', async () => {
    //Mock the sendMail function to return a resolved promise
    mockTransport.mockImplementationOnce(() => {
      return {
        sendMail: jest.fn().mockImplementation(() => {
          return Promise.resolve();
        }),
      };
    });

    const req = {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: '',
        message: 'Hello, test!',
      },
    } as NextApiRequest;

    //Mock the response object for Next.js
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as NextApiResponse;

    await contact(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      success: true,
      message: 'form.response.200',
    });
  });

  it('should return a 405 status code and the correct data when the request method is not POST', async () => {
    const req = {
      method: 'GET',
      body: {
        name: 'John Doe',
        email: '',
        message: 'Hello, world!',
      },
    } as NextApiRequest;

    //Mock the response object for Next.js
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as NextApiResponse;

    await contact(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.send).toHaveBeenCalledWith({
      success: false,
      message: 'form.response.405',
    });
  });

  it('should return a 400 status code and the correct data when the request method is POST and the email fails to send', async () => {
    //Mock the sendMail function to return a rejected promise
    mockTransport.mockImplementation(() => {
      return {
        sendMail: jest.fn().mockImplementation(() => {
          throw new Error('Failed to send email');
        }),
      };
    });

    const req = {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: '',
        message: '',
      },
    } as NextApiRequest;

    //Mock the response object for Next.js
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    } as unknown as NextApiResponse;

    await contact(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      success: false,
      message: 'form.response.400',
    });
  });
});
