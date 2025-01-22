# PW Studio Website

This repository contains the source code for the **PW Studio Website**, showcasing projects, a development roadmap, and a contact form. The website is built using React.js for the frontend, Node.js for the backend, and MongoDB for the database.

---

## Features

- **Responsive Design**: Works on both mobile and desktop.
- **Roadmap Page**: Highlights the studio's upcoming projects.
- **Contact Form**: Allows visitors to reach out easily.
- **MongoDB Integration**: Manages project and contact data.

---

## Folder Structure

```plaintext
pw-studio/
├── client/                     # Frontend
│   ├── public/                 # Public assets
│   ├── src/                    # React source code
│   └── build/                  # Production build (to upload to cPanel)
├── server/                     # Backend
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API routes
│   ├── server.js               # Main server entry point
│   └── package.json            # Backend dependencies
├── README.md                   # Project documentation
```

---

## Requirements

To run and deploy this project, ensure you have the following installed:

- **Node.js**: v16 or higher
- **npm** or **yarn**: For package management
- **MongoDB Atlas**: To host the database
- **cPanel**: For website hosting

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/pw-studio-website.git
cd pw-studio-website
```

### 2. Install Dependencies
#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd ../server
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `server/` directory with the following keys:
```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

### 4. Run the Application
#### Frontend
```bash
cd client
npm start
```
#### Backend
```bash
cd ../server
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

---

## Deployment

### Frontend Deployment
1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
2. Upload the contents of the `client/build` folder to cPanel's `public_html` directory.

### Backend Deployment
1. Enable Node.js in cPanel.
2. Upload the `server` folder to a directory (e.g., `api/`).
3. Configure the `.env` file with your MongoDB connection string.
4. Start the Node.js application via cPanel's terminal or application manager.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or collaboration inquiries, please reach out via the contact form on the website or email us at **contact@pwstudio.com**.