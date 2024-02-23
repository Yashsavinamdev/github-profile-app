# GitHub User Profiles and Repositories Viewer

This Angular application allows users to search for GitHub user profiles, view their details, and explore their repositories. The project is built using the latest version of Angular and leverages Angular Material for a user-friendly and responsive UI.

## Core Features

1. **Home/Search Page:**

   - User enters a GitHub username in the search box.
   - If the user is not found, a dialog saying "User not found" is displayed.
   - If found, navigate to the profile page passing the username in query params.

2. **Profile Page:**

   - Displays user information: name, avatar, bio, and the number of public repositories.
   - If public repositories are greater than 0, a button "View All Repositories" is displayed.
   - Includes a back button to return to the home/search page if required.

3. **Repository List Page:**

   - Accessible by clicking "View All Repositories" on the profile page.
   - Displays a paginated list of the user's GitHub repositories.
   - Each repository card includes name, description, and topics (if available).
   - Pagination with 3 repositories per page.
   - Includes a back button to return to the profile page.

4. **Responsive UI:**
   - Utilizes Angular Material for a professional and responsive user interface.

## Setup Instructions

Follow these steps to set up and run the application:

### Prerequisites

Make sure you have the following installed:

- Node.js and npm: [Download here](https://nodejs.org/)
- Angular CLI: Install globally using `npm install -g @angular/cli`

### Clone the Repository

```bash
git clone https://github.com/your-username/github-profiles-viewer.git
cd github-profiles-viewer
```
