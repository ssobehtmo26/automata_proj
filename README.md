# :hammer: Automata

"Automata" is a web application that uses Puppeteer, a Node.js library, to automate form filling in Google Forms. Puppeteer is a powerful tool that provides a high-level API for controlling a headless version of Google Chrome or Chromium.

Here's an elaboration on how this system works:

1. *Puppeteer and Headless Browsers*:
   - Puppeteer allows you to control a headless version of a web browser. A headless browser is a web browser without a graphical user interface. It can be controlled programmatically and is often used for tasks like web scraping or automated testing.

2. *Automata's Purpose*:
   - Automata's main purpose is to automate the process of filling out Google Forms. This is useful in scenarios where you have to repeatedly fill out similar forms, which can be time-consuming and tedious if done manually.

3. *Interacting with Google Forms*:
   - Google Forms are a popular way to collect information through surveys, questionnaires, or data entry forms. Automata interacts with these forms using Puppeteer.

4. *Steps to Automate Form Filling*:
   - *a. Launching the Browser*:
     - Automata uses Puppeteer to launch a headless browser (e.g., Chrome or Chromium) in the server.

   - *b. Navigating to the Form*:
     - Once the browser is open, Automata navigates to the URL of the Google Form.

   - *c. Filling the Form*:
     - Automata uses Puppeteer to interact with the form fields. For example, if a field requires a short answer, it might use Puppeteer to type in the appropriate response (e.g., "hello + name_of_field").

   - *d. Selecting Multiple Choice Options(Checkbox)*:
     - For multiple choice questions, Automata would use Puppeteer to click the first option.

   - *e. Submitting the Form*:
     - After filling out the form, Automata uses Puppeteer to submit the form.

   - *f. Handling Success or Errors*:
     - Automata shows user snapshots of each of the field filled and the submit page from the headless browser

5. *Headless Mode*:
   - Using a headless browser means that all of this happens "in the background" without any visible browser window. This is especially useful for automation tasks where a user interface is not required.

6. *Advantages*:
   - Automation with Puppeteer can significantly speed up repetitive tasks, reduce human error, and free up human resources for more complex tasks.


#  :desktop_computer: Technologies Used

- Typescript/NodeTS: TypeScript is preferred for web automation with Puppeteer due to its strong typing, which catches errors before runtime, enhancing code reliability. It offers excellent IDE support, making code development more efficient, and its self-documented nature improves code readability and understanding. TypeScript's static typing system also aids in error checking, resulting in more stable code
