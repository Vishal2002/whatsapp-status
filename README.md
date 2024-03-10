# WhatsApp Status Backend Setup Guide

Welcome to the setup guide for the WhatsApp Status backend! Follow these steps to get your backend up and running locally.

## Prerequisites

Before you begin, ensure you have the following installed and set up on your machine:

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running locally, or access to MongoDB Atlas.
- An AWS account with an S3 bucket created.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/{username}/whatsapp-status.git
    ```

2. Navigate to the project directory:

    ```bash
    cd whatsapp-status
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following credentials to the `.env` file:

    ```plaintext
    MONGO_URL='Your_MongoDB_URI'
    PORT=3000
    BUCKET='Your_Bucket_Name'
    AWS_ACCESS_KEY='Your_AWS_Access_Key'
    AWS_SECRET_KEY='Your_AWS_Secret_Key'
    AWS_REGION='Your_AWS_Region'
    ```

    Replace the placeholders with your actual MongoDB URI, bucket name, AWS access key, AWS secret key, and AWS region.

## Starting the Server

Start the server by running:

```bash
node server.js
