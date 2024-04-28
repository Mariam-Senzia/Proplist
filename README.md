# Proplist: A Comprehensive Property Management System
Proplist is your gateway to efficient property management, offering a robust backend and a sleek frontend for users to interact with. Whether you're listing properties, selling, or searching, Proplist has you covered with its array of features and user-friendly interface.

# Features
## Backend Operations
- CRUD Operations: Seamlessly manage users, properties, and reviews with Create, Read, Update, and Delete operations.
Security: Secure endpoints ensure that your data remains protected, with comprehensive error handling in place.

- Database Management: Integration with SQLAlchemy enables efficient management of your database.
Database Migrations: Utilize Flask-Migrate to handle migrations smoothly, keeping your database schema up-to-date.

## Frontend Functionality
- User-friendly UI: Navigate through property listings, user profiles, and reviews effortlessly with our intuitive frontend design.

- Property Listings: Easily list properties for sale or rent, complete with detailed descriptions and images.
User Profiles: Users can create accounts, update their information, and manage their listed properties seamlessly.

- Reviews and Ratings: Leave and view reviews for properties, helping users make informed decisions.

# Setup
## Getting Started
- Clone the repository:
    git clone <repository-url>
    cd <repository-directory>

- Install dependencies:
    pipenv install

- Database Setup
Ensure you have SQLite installed.
Run the following commands to set up the database and perform migrations:
    flask db init
    flask db migrate -m "Initial migration"
    flask db upgrade

# Run the application
    flask run
    By default, the application will run on http://127.0.0.1:5555.

# API Endpoints
- Submit Form: POST /submit_form
- Users:
    - Create User: POST /users
    - Get All Users: GET /users
    - Get User by ID: GET /users/<user_id>
    - Update User: PUT /users/<user_id>
    - Delete User: DELETE /users/<user_id>

- Properties:
    - Create Property: POST /properties
    - Get All Properties: GET /properties
    - Get Property by ID: GET /properties/<property_id>
    - Update Property: PUT /properties/<property_id>
    - Delete Property: DELETE /properties/<property_id>

- Reviews:
    - Create Review: POST /reviews
    - Get All Reviews: GET /reviews
    - Get Review by ID: GET /reviews/<review_id>
    - Update Review: PUT /reviews/<review_id>
    - Delete Review: DELETE/reviews/<review_id>

# Usage
- Explore the API endpoints using tools like Postman, ensuring to include appropriate request bodies for POST and PUT requests.
- For frontend interaction, access the user interface through your web browser, where you can seamlessly navigate through property listings, user profiles, and reviews.

# Contributing
Contributions to Proplist are always welcome! Follow these guidelines to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/improvement).
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature/improvement).
- Create a new Pull Request.

Let's make Proplist even better together!!