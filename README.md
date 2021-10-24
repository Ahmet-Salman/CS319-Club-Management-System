# CS319-Club-Management-System
Group Name: **Gestalt Ver.2.3242**

A _Club Management Web App_ develped for the course CS 319 in Bilkent University.
User Types:
  - Unregistered User
  - Registered User (Member)
  - Club Manager
  - Admin/Moderator

This system allows the user to:

  + _Unregistered User:_
    - **Sign Up**: An unregistered user will enter their student id, email, and password. If the credentials are valid, an account will be created

  + _Registered User (Member)_:   
    - **Login**: By entering valid credentials, a user will access their own specialized account
    - **Create a club**: A user will fill a club creation form stating the name and other details
    - **Join a club**: The user will send a join request to a club manager
    - **Leave a club**: the user will exit from a club
    - **Send a message to the manager of the club**: A user can fill in a message form and send it to a club manager
    - **Comment on a club**: A user will fill a comment form which will be displayed to all users (members and non-members)

  + _Club Manager_:
    - **Accept Member Join Request**: A manager can accept a request for joining their club
    - **Reject Member Join Request**: A manager can reject a request for joining their club
    - **Create event notifications**: A manager can create an event by specifying date, location, name, and description
    - **Send Announcements**: A manger can send an announcment to all members of his/her club
    - **Title Assignment**: A manager can assign titles to different members based on their role
    - **Delete a club**: A manager can delete their club and all of its associated objects

  + _Admin_:
    - **Accpet Club Creation Requests**: An admin can approve a club creation form after reviewing its content
    - **Reject Club Creation Requests**: An admin can reject a club creation form after reviewing its content

_**Note**_: The user below a certain catagory has all the features/authorties of users above it (e.g. a Club Manager has all the features of a Registered User) 

This Web App is developed using:
  - Python Django Framework (Back-end)
  - Vue.js Framework (Front-end)
  - SQlite3 (Database Integration) 

----------------------------------------------------

Group Members:
  - Ahmet Salman
  - Javid Moradi
  - Onuralp Avcı
  - Alperen Alkan 
  - Hissam Faramaway
