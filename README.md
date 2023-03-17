# My Front-End Code Snippet Assignment: Zach Delapenha

## Developing a Responsive Navigation Bar with Login and Sign Up Form validation.

### Introduction

As part of my front-end code snippet assignment, I have developed a responsive web page that features a navigation bar with integrated login and sign-up forms. The purpose of this project is to demonstrate my understanding of HTML, CSS, and JavaScript in creating an interactive and user-friendly code snippet, complete with form validation. Here is a detailed overview of the structure, components, and functionality of the web page I designed for the assignment.

### Structure of the index.html (Home) page

#### Head section

The `<head>` element contains meta-information, such as the character set (UTF-8), browser compatibility, and the viewport settings, which are essential for responsive web design. The title of the web page is specified with the `<title>` element. Additionally, the page uses an external stylesheet, "style.css," to apply styles and formatting to its elements.

#### Body section

The `<body>` element comprises the visible content of the web page, which includes the following components:

1. Navigation bar: For this assignment, I designed a responsive navigation bar. The navigation bar includes a logo, links to the home and about pages, login and registration buttons, and a hamburger menu icon for mobile devices.
   ![Nav bar](/media/dropdown-wireframe.png)
   Navigation bar features:

   - Solid colour navigation bar on scroll
   - Burger menu for smaller screens
   - Displaying login and registration forms
   - Fully responsive

2. Login form: I integrated a hidden login form that is displayed when the login button is pressed. The form uses the GET method to submit data to the "dashboard.html" file. It contains fields for the user's email and password, along with demo values provided for convenience.

![alt text](/media/loginform-wireframe.png)

3. Registration form: Similar to the login form, I incorporated a hidden registration form that appears when the sign-up button is clicked. The form submits data using the GET method to the "thanks.html" file. It includes fields for the user's username, email, password, and phone number, accompanied by validation requirements for each field.

![alt text](/media/regform-wireframe.png)
Form features:

- Closing popups
- Form switching
- Login form validation
- Registration form validation

4. Hero section: The hero section consists of a large image and accompanying text. As this assignment is focused on the form validation and Navigation bar, each page only consists of a simple hero section with the relevant heading.

![alt text](/media/home-wireframes.png)

#### JavaScript inclusion

To ensure that the web page is interactive and functional, and to improve code readability, I included an external JavaScript file, "index.js," which handles various events, such as displaying the hidden login and registration forms when the respective buttons are clicked. I placed the link to this file at the bottom of the `<body>` to ensure the script does not run until the page is fully rendered.

### Dashboard.html

Once the user successfully logs in, they are directed to the dashboard page, where the navigation bar is updated to include a logout button. The dashboard page serves as a placeholder for future back-end integration, which will display user-specific information tailored to the individual's needs and preferences. The dashboard page's primary purpose is to establish a foundation for a more personalized user experience, eventually allowing the user to access relevant data and interact with the website in a meaningful way. By incorporating the logout button within the updated navigation bar, users are provided with a seamless and user-friendly method to log out of their account when desired, enhancing the overall user experience.

![alt text](/media/dashboard-wireframe.png)

### Thankyou.html

Upon successful registration, the user is taken to a thank you page that displays a message thanking them for their registration. The page also provides a link that directs users back to the home page, prompting them

![alt text](/media/thankyou-wireframe.png)
