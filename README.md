# AtomMDB
Reinventing (totally) how you write movie reviews. This project is mainly just a learning experience for me.
<div>
<img src="https://img.shields.io/github/license/atomdevelops/atom-mdb" alt="MIT License" />
   <img src="https://img.shields.io/github/directory-file-count/atomdevelops/atom-mdb" alt="# of Directories & Files" />
   <img src="https://img.shields.io/github/repo-size/atomdevelops/atom-mdb" alt="Repo size" />
</div>

-----------

## Technologies
The technologies used in this project include the following:
- [ChakraUI](//chakra-ui.com)

- [TypeScript](//typescriptlang.org)

- [React.js](//reactjs.org)

- [Next.js](//nextjs.org)

- [Firebase](//firebase.google.com)

  - Google Provider

- [MongoDB](//mongodb.com)

Please note that this project is **nowhere close to being finished**. There are many things yet to do. It is still under its alpha phase.

## Self-Hosting
This project is available to be self-hosted. It's quite simple, just like setting up any other Next.js app. 

A very important thing to remember is that **this self-hosting "guide" is not final yet, and is subject to change**.

> **Note**: To view the steps, just click on the titles to trigger the dropdown.

<details><summary>Clone the repository</summary>
<br />
You can clone the repository using either HTTPS or SSH.

With HTTPS:
```bash
git clone https://atomdevelops/atom-mdb.git
```

With SSH:
```bash
git clone git@github.com:atomdevelops/atom-mdb.git
```

Once you have cloned the repository, `cd` into the directory of the cloned repository. This directory is most likely named `atom-mdb--main`.

</details>

<details><summary>Install dependencies</summary>
<br />
To start the project, you need to install the necessary modules for it to work as expected. This can simply be done with the `yarn` command:
```bash
yarn
```

After running this command, you're ready to move on to the next step.

</details>

<details><summary>Run the project in development mode</summary>
<br />

After installing dependencies, you can start the project by running:
```bash
yarn dev
```

This will open a development environment with the project and will allow you to open the website on http://localhost:3000.

#### How to open on different port?
To open the development server on a different port (other than port 3000), go inside the `./package.json` file located in the root directory of the project.

Once you are inside `package.json`, look at the JSON attribute labeled `scripts`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

Then, change the `dev` script to:
```json
"dev": "next dev -p 3002"
```
> **Note**: Replace the port `3002` with your desired port.

</details>

<details><summary>Enter the environment variables</summary>
<br />

Great! You're almost there! The project will run, but you won't be able to sign in and view the dashboard.

To do this, all you have to do is go to the [Firebase console](//console.firebase.google.com). From here, you need to create a new project and enter its information inside your `.env.local` file. Let's see how to do this:
1. Log in to the [Firebase console](//console.firebase.google.com)
2. Click on "Create a new project"
3. Name your project then click "Next"
4. Follow the steps accordingly until you have successfully created your project
5. At the top, create a new "Web app"
6. Title the app and then click "Next"
7. From here, you should see JavaScript code showing you how to initialize a Firebase app
8. Inside your project, rename the `.env.local.example` file to `.env.local`
9. Remove the placeholder values from the environment variables and enter the values presented to you when creating the new Web App on Firebase
10. Don't be shy to put your private keys inside the environment variables files as Next.js automatically ignores it when you are pushing it to any platform like GitHub.
11. Once all of the keys are entered, you you may save the file and restart your development server. As you can see, when you click "Login with Google," it opens a new popup window saying it will redirect you to `<your project>.firebaseapp.com`. It worked!
12. Sign in with your Google account and access the dashboard!

</details>



# Deploying

To deploy a self-hosted version of your project is quite simple. For this, I will show you how to use Vercel. Although, Netlify practically works the same way.
1. Push the cloned directory to your own GitHub repository
2. Go to the [Vercel dashboard](//vercel.com) and sign in with GitHub
3. Then [create a new project](//vercel.com/new)
4. Select the repository you just created
6. Scroll down until you see the section titled "Environment Variables" and open it
7. One by one, copy and paste the names of each environment variable from your `.env.local` file along with its value on the name and value field
8. Make sure to click "Add" for every new environment variable you insert
9. Finally, **click deploy**
10. Watch the deployment logs as the project is deployed

I won't be including a Netlify version for the deployment process, but it's quite similar.
  
## Previews
Previews have been removed due to the constant updates with the project. Currently, there is a version 2 being worked on. You can check it out on the [dev branch](//github.com/atomdevelops/atom-mdb/tree/dev).
