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

- <img src= "https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" width = "20"/> Typescript: TypeScript is preferred for web automation with Puppeteer due to its strong typing, which catches errors before runtime, enhancing code reliability. It offers excellent IDE support, making code development more efficient, and its self-documented nature improves code readability and understanding. TypeScript's static typing system also aids in error checking, resulting in more stable code
-  <img src= "https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width = "20"/> Node: Node leverage the power of TypeScript's static typing to build robust server-side APIs, utilizing npm's vast library
- <img src= "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" width = "20"/> Puppeteer - The "puppeteer" package in npm is a Node.js library that provides a high-level API over the Chrome DevTools Protocol, which allows you to control a headless (or non-headless) version of the Google Chrome or Chromium browser. It's often used for tasks related to web scraping, automating tasks in web applications, taking screenshots, generating PDFs, and running automated tests in a browser environment.
- <img src= "https://github.com/devicons/devicon/blob/master/icons/yarn/yarn-original.svg" width = "20"/> Yarn: It is a package manager similar to npm , but is much faster in installing large packages


# :rocket: Setting up the Application

### 1: Clone the repository

<pre>git clone https://github.com/ssobehtmo26/automata_proj</pre>

### 2: Specifying the path in the terminal

<pre>cd location_of_the_folder </pre>

`Note`: Before proceeding to the next step, make sure yarn is installed on your system. The steps to which could be found <a href="https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable">here</a>.

### 3: Getting the Packages

<pre>yarn</pre>

`Note:` Before starting the server, make sure a `.env` file is made as per the sample provided in .env.sample file

## 4: Running the Application

<pre>yarn start </pre>

## 5: Interacting with the application 

<pre> https://localhost:PORT_NUMBER </pre>
   
`Note`:The application after starting the server could be accessed at whichever port it was configured to run on, in the env file.

# :camera: Snapshots

### 1. Landing Page
![image](https://github.com/ssobehtmo26/automata_proj/assets/95176555/083e0550-b689-4052-b2ca-48f62c00d736)

### 2. Success Page
![image](https://github.com/ssobehtmo26/automata_proj/assets/95176555/df64c8d5-322d-4389-873c-5d4a2906fbcd)

### 3. Submiited Fields
![image](https://github.com/ssobehtmo26/automata_proj/assets/95176555/b4834f94-199f-43e7-9dfa-6482e3bc0bb6)

### 4. Snapshots
<img width="1394" alt="Screenshot 2023-09-30 at 12 38 11 AM" src="https://github.com/ssobehtmo26/automata_proj/assets/95176555/fbf2b344-7a0e-46bc-a497-c5fd3075cce1">
<img width="1391" alt="Screenshot 2023-09-30 at 12 38 19 AM" src="https://github.com/ssobehtmo26/automata_proj/assets/95176555/34a01176-c899-4c98-b1f6-678d0a120f5c">

# :clapper: Video Demonstration



# :level_slider: Limitations

<ul>
  <li> Specifically designed to work with Google Forms, so won't work with other kind of forms</li>
  <li> Moreover the application as of now can only deal with two kinds of entries:
     <ul>
        <li>Short answer type</li>
        <li>Checkbox type multiple choice</li>
     </ul>
  </li>
   <li>Sometimes the application may miss some fields, though is a rare instance but is persistant. This is due to limitations of network speed of the server or the size of form being processed.</li>
</ul>  








