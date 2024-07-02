# FitSyncPro

FitSyncPro is a comprehensive fitness application designed to connect clients with fitness trainers and nutritionists. The platform allows users to manage their fitness journey, track progress, and schedule sessions seamlessly.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description

FitSyncPro is built to help fitness enthusiasts find the right trainers and nutritionists, manage their fitness programs, and track their progress. The platform also enables professionals to manage their clients, schedule sessions, and track client progress effectively.

## Features

### For Clients
- **Profile Management**: Manage personal profile and fitness goals.
- **Booking**: Schedule sessions with trainers and nutritionists.
- **Progress Tracking**: Track fitness metrics and progress over time.
- **Messaging**: Communicate directly with trainers and nutritionists.
- **History**: View the history of sessions and activities.

### For Trainers and Nutritionists
- **Client Management**: Manage client profiles and track their progress.
- **Session Scheduling**: Schedule and manage sessions with clients.
- **Progress Reports**: Generate and view client progress reports.
- **Messaging**: Communicate directly with clients.

## Technology Stack

- **Frontend**: Angular 18
- **Backend**: Supabase
- **Authentication**: Supabase Auth
- **Database**: PostgreSQL (via Supabase)
- **Storage**: Supabase Storage
- **Real-time Functions**: Supabase Edge Functions

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- Angular CLI
- Supabase account

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/fitsyncpro.git
    cd fitsyncpro
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
  - Create a `.env` file in the root directory.
  - Add your Supabase credentials:
    ```env
    SUPABASE_URL=https://your-supabase-url
    SUPABASE_KEY=your-supabase-key
    ```

4. Run the application:
    ```bash
    ng serve
    ```

## Usage

1. Navigate to `http://localhost:4200` in your web browser.
2. Sign up or log in using the authentication options.
3. Explore the dashboard, manage profiles, book sessions, and track progress.

## Directory Structure

```
fitsyncpro/
├── src/
│   ├── app/
│   │   ├── core/                     # Core module for singleton services
│   │   │   ├── interceptors/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── core.module.ts
│   │   │   └── index.ts
│   │   ├── shared/                   # Shared module for shared components, directives, and pipes
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   ├── shared.module.ts
│   │   │   └── index.ts
│   │   ├── features/                 # Feature modules
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.module.ts
│   │   │   │   └── index.ts
│   │   │   ├── clients/
│   │   │   │   ├── clients.component.ts
│   │   │   │   ├── clients.component.html
│   │   │   │   ├── clients.component.css
│   │   │   │   ├── clients.module.ts
│   │   │   │   └── index.ts
│   │   │   ├── sessions/
│   │   │   │   ├── sessions.component.ts
│   │   │   │   ├── sessions.component.html
│   │   │   │   ├── sessions.component.css
│   │   │   │   ├── sessions.module.ts
│   │   │   │   └── index.ts
│   │   │   ├── messaging/
│   │   │   │   ├── messaging.component.ts
│   │   │   │   ├── messaging.component.html
│   │   │   │   ├── messaging.component.css
│   │   │   │   ├── messaging.module.ts
│   │   │   │   └── index.ts
│   │   │   ├── profile/
│   │   │   │   ├── profile.component.ts
│   │   │   │   ├── profile.component.html
│   │   │   │   ├── profile.component.css
│   │   │   │   ├── profile.module.ts
│   │   │   │   └── index.ts
│   │   ├── auth/                     # Authentication module
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.css
│   │   │   │   └── index.ts
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.ts
│   │   │   │   ├── signup.component.html
│   │   │   │   ├── signup.component.css
│   │   │   │   └── index.ts
│   │   │   ├── auth.module.ts
│   │   │   └── index.ts
│   │   ├── app-routing.module.ts     # Main app routing module
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.module.ts
│   ├── assets/                       # Static assets (images, styles, etc.)
│   ├── environments/                 # Environment configurations
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles/                       # Global styles
│   ├── index.html
│   ├── main.ts
│   └── polyfills.ts
├── .env                              # Environment variables
├── angular.json
├── package.json
├── README.md
```
Explanation of Structure

- core/: Contains singleton services, guards, and interceptors that will be used across the entire application. 
- shared/: Contains shared components, directives, and pipes that can be reused in different modules.
-	features/: Each feature module (e.g., dashboard, clients, sessions) has its own directory containing its components, module definition, and related files.
-	auth/: Contains authentication-related components and modules.
-	app-routing.module.ts: Main routing configuration for the application.
-	assets/: Directory for static assets like images and global styles.
-	environments/: Contains environment-specific configurations.
-	styles/: Directory for global styles.
-	index.html: Main HTML file.
-	main.ts: Main entry point of the application.
-	polyfills.ts: Contains polyfills needed by Angular.

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
