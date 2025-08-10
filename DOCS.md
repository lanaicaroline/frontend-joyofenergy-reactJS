# Joy of Energy ReactJS Project Documentation

## Overview

This project is a ReactJS frontend for the "Joy of Energy" application. It provides a user interface for energy usage tracking, tariff comparison, and account management.

## Features

- **User Authentication:** Login and registration functionality.
- **Dashboard:** Displays user energy usage and cost breakdown.
- **Tariff Comparison:** Allows users to compare different energy tariffs.
- **Account Management:** Update user details and view billing history.
- **Responsive Design:** Works on desktop and mobile devices.

## Project Structure

```
/src
    /components      # Reusable UI components
    /pages           # Main application pages (Dashboard, Login, etc.)
    /services        # API calls and business logic
    /assets          # Images, styles, and static files
    App.js           # Main application entry point
    index.js         # ReactDOM render
```

## How It Works

1. **Authentication:**  
     Users log in or register. Auth tokens are stored securely (e.g., in localStorage).

2. **Fetching Data:**  
     After login, the app fetches user data and energy usage from the backend API.

3. **Displaying Data:**  
     The dashboard displays usage statistics, charts, and tariff options.

4. **Tariff Comparison:**  
     Users can compare tariffs and select the best option. Selection updates the backend.

5. **Account Management:**  
     Users can update their profile and view billing history.

## Setup Instructions

1. **Install dependencies:**
     ```bash
     npm install
     ```

2. **Start the development server:**
     ```bash
     npm start
     ```

3. **Build for production:**
     ```bash
     npm run build
     ```

## Configuration

- API endpoints are configured in `/src/services/api.js`.
- Environment variables can be set in a `.env` file.

## Contribution

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License.
