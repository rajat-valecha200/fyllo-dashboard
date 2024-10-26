# Fyllo Dashboard

Fyllo is an interactive dashboard designed to visualize fertilizer data using pie charts. This project leverages React and Recharts to create dynamic and responsive charts that provide insights into fertilizer requirements.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [License](#license)
- [Contributing](#contributing)

## Features
- Responsive design for various screen sizes
- Interactive pie charts that display fertilizer data
- Legend to understand the data segments
- Labels that include zero values for clarity

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fyllo-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fyllo-dashboard
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the dashboard.

## Components

### Sidebar
The Sidebar component provides navigation options within the dashboard.

```jsx
import Sidebar from './Sidebar';
```

### Topbar
The Topbar component includes branding and quick access icons for notifications, settings, and user profile.

```jsx
import Topbar from './Topbar';
```

### FertilizerPieChart
The FertilizerPieChart component visualizes fertilizer data using pie charts and includes labels for all values.

```jsx
import FertilizerPieChart from './FertilizerPieChart';
```
#