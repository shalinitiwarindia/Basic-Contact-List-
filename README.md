![Screenshot 2024-11-29 154213](https://github.com/user-attachments/assets/0d30dc33-7082-4d99-b756-aeadb55a84b5)
![Screenshot 2024-11-29 154030](https://github.com/user-attachments/assets/e1082586-7956-40ab-8a51-9487a4f30e50)
The Contact List application is a simple React-based tool designed to manage a list of contacts. The application provides functionality to add new contacts and delete existing ones, making it an efficient way to manage a small contact database. It is implemented using three main components: ContactList, ContactCard, and AddContact. Here's an overview of the key features and structure:

Key Features
Contact Management:

Users can view a list of existing contacts, each displaying a name and phone number.
Contacts can be deleted individually using the DELETE button provided with each contact entry.
Add New Contact:

A form allows users to input a new contact's name and phone number.
After clicking the ADD button, the new contact is appended to the list.
Dynamic Updates:

The contact list is dynamically updated using React's useState hook to maintain the state of the contact list.
Application Components
ContactList Component:

Purpose: Acts as the main component that holds the contact list and manages state changes.
Features:
Uses useState to store the initial list of contacts (initState).
Handles adding a new contact through the handleClick function.
Manages contact deletion via the deleteById function.
Renders a list of ContactCard components for each contact in the state.
ContactCard Component:

Purpose: Displays individual contact details in a styled layout with a DELETE button.
Props:
id: Unique identifier for the contact.
name: Name of the contact.
phone: Phone number of the contact.
onDelete: Function to handle contact deletion.
Features:
A DELETE button triggers the onDelete function, removing the contact from the list.
AddContact Component:

Purpose: Provides an input form to add a new contact.
Props:
handleClick: Function passed from ContactList to add a new contact.
Features:
Two input fields: one for the name and one for the phone number.
The ADD button triggers the handleClick function, sending the entered data to the parent component (ContactList).
App Component:

Purpose: The entry point of the application, rendering the ContactList component.
How It Works
Initial State:

The application starts with a predefined list of two contacts stored in the initState array in the ContactList component.
Adding a Contact:

The AddContact form collects the name and phone values from the user.
Clicking the ADD button triggers the handleClick function in ContactList, which:
Generates a new id for the contact based on the last contact's id.
Updates the contactList state to include the new contact.
Deleting a Contact:

Clicking the DELETE button in a ContactCard triggers the deleteById function in ContactList.
The function filters out the contact with the matching id and updates the state, removing the contact from the list.
Styling
The ContactCard component uses inline CSS for styling:
Flexbox for alignment.
Borders, padding, and margin to separate and format each contact card.
The AddContact component includes a simple input and button layout to enhance usability.
User Experience
Interactive: Updates the UI dynamically without page reloads, thanks to React's state management.
Clear Design: Displays contacts in a readable format with straightforward actions.
Scalable: Can be extended to include features like editing contacts, saving to a database, or integrating with a backend API.
This application is an excellent starting point for understanding state management, props, and component-based architecture in React.






