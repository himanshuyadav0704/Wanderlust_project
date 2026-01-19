#Problem Statement-

I noticed my Wanderlust project had no way for users to contact listing owners. I designed and implemented a Contact the Owner feature with backend validation and frontend integration.

#solution-

designed and implemented a “Contact Owner” feature where:
The owner can add their phone number while creating or editing a listing.
The phone number is displayed on the listing details page.\
Users can directly call the owner using a clickable phone link.
Proper validation is added to ensure only valid phone numbers are saved.

#Features Implemented-

Added ownerPhone field to the Listing model.
Added phone number input in New Listing and Edit Listing forms.
Added backend validation using Joi schema.
Added server-side validation in controller.
Displayed phone number on listing details page.
Click-to-call functionality using tel: link.


1. Database (Mongoose Schema)

Added:-  ownerPhone: { type: String, required: true}

2. Validation (Joi)

Only allows 10-digit phone numbers using regex:- {/^\d{10}$/ }

3. Backend (Controller)

Validates phone before saving or updating listing and Rejects invalid input with proper error message.

const phone = req.body.listing.ownerPhone;
    if (!/^\d{10}$/.test(phone)) {
        req.flash("error", "Invalid phone number. Must be 10 digits.");
        return res.redirect("/listings/new");
    }

4. Frontend (EJS)

Input field added in create/edit form.

        <div class="mb-3">
             <label for="ownerPhone" class="form-label">contact number</label>
             <input name="listing[ownerPhone]" placeholder="enter phone number" type="text" class="form-control" required>
             <div class="invalid-feedback">Please Enter the 10 digit phone number   </div>
        </div>

Phone number displayed on show page with clickable call link.

      <p class="card-text">
      <b>Contact Owner:</b> 
      <a href="tel:<%= listing.ownerPhone %>">
      <%= listing.ownerPhone %>
      </a>
      </p>


To Run The Project

Clone the repository:
git clone https://github.com/himanshuyadav0704/Wanderlust_project.git

Install dependencies:
npm install
Start server:
npm start or nodemon app.js
Open in browser:
http://localhost:8080




for testing

Create a new listing.
Enter a valid 10-digit phone number.
Save the listing.
Open the listing page.
You will see:
Contact Owner: 1234567890
Click it to call.
  
  output screenshot before adding contact owner feature
  ![alt text](<Screenshot 2026-01-17 000201.png>)
  ![alt text](<Screenshot 2026-01-17 000309.png>)

  output screenshot after adding contact owner feature
  ![alt text](<Screenshot 2026-01-17 003807.png>)
  ![alt text](<Screenshot 2026-01-17 003830.png>)

this is screen shot of CLI
  ![alt text](<Screenshot 2026-01-20 020649.png>)
![alt text](<Screenshot 2026-01-20 020726.png>)
![alt text](<Screenshot 2026-01-20 020748.png>)






For CLI

# Wanderlust – Contact Owner CLI Utility

## Problem Statement
In my hotel booking platform (Wanderlust), users could browse listings and make bookings, but there was no way for customers to directly contact the listing owner before booking. This often led to unanswered questions about amenities, availability, or special requests, reducing user trust.

## Solution
To solve this problem, I designed and implemented a lightweight Command-Line Interface (CLI) utility that allows a user to send a message directly to the listing owner. The CLI communicates with the existing Express backend through a REST API, and messages are stored in MongoDB.

## Features
CLI-based message sending
Backend API integration
MongoDB message persistence
Error handling for missing inputs and server issues
Uses only standard Node.js libraries

 How to Run

1. Start the Backend Server
```bash
node app.js
 
run this cli utility
node cli/contactOwner.js --listingId=123 --from=customer@gmail.com --to=mukesh@gmail.com --message="is parking available in the hotel"
see the screenshots for your consideration
![alt text](<Screenshot 2026-01-20 020649.png>)
![alt text](<Screenshot 2026-01-20 020726.png>)
![alt text](<Screenshot 2026-01-20 020748.png>)