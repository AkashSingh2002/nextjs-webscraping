# Next.js Real Estate Projects

This project is a Next.js application that displays real estate projects based on the selected city. It fetches project data from an API and renders it using React components.

## Features

- Displays a list of real estate projects for a selected city.
- Interactive map showing the locations of the projects.
- Responsive design using Tailwind CSS.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-real-estate-projects.git
   cd nextjs-real-estate-projects
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add any necessary environment variables.

## Running the Application

To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## Usage

- Navigate to `/city/[cityName]` to view the real estate projects for a specific city.
- The application fetches project data from the `/api/scrape` endpoint.

## Components

- **CityPage**: Main page component that fetches and displays projects for a specific city.
- **ProjectCard**: Displays individual project details.
- **Map**: Renders a map with markers for each project location.

## API

The application uses a mock API endpoint located at `/api/scrape` to fetch project data. The API expects a `city` query parameter.

## License

This project is licensed under the MIT License.
