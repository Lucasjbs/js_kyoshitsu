import React from 'react'

function JInfo01() {
  return (
    <>
      <h2>Javascript Extra Informations:</h2>
      <br></br>
      <br></br>

      <h4>1- Javascript is a loosely typed language.</h4>
      <br></br>
      <br></br>

      <h4>2- Javascript Console Log Display:</h4>
      <p>On the console Log, String types are displayed in black while Numbers and Booleans are in blue.</p>
      <br></br>
      <br></br>

      <h4>3- Javascript Immutability:</h4>
      <p>Immutability is a concept that predicts that a variable never loses its value, but rather 
        receives another value.
      </p>
      <p>In Javascript, it's better to create a new variable and assign new values to it than 
        overwrite the old value.
      </p>
      <br></br>
      <br></br>




      <h4>1- Basic Folder Structure:</h4>
      <p>The initial folder structure provided by React have 3 main folders: The Node Modules, Public and Src.</p>
      <p>The Node Modules stores the data used by React and it's dependencies. The developer isn't supposed to
        work on it directly.</p>
      <p>The public folder stores the Index.html file as well as the public assets (like images).</p>
      <p>The src folder stores the Index.js file (entry point) as well as the App.js.</p>
      <p>These are the most important files on these folders, for the time being, all the other files
        can be deleted from the public and src folders.
      </p>
      <br></br>
      <br></br>

      <h4>2- Moderate Folder Structure - Assets:</h4>
      <p>For more moderate projects, an organized folder structure needs to be established.</p>
      <p>In this folder structure, most of the assets used on the project will be stored in the src 
        folder inside the assets folder, instead of using the public folder.
      </p>
      <br></br>
      <br></br>

      <h4>3- Moderate Folder Structure - Pages:</h4>
      <p>The pages folder will contain the main pages such as the Home page for example.</p>
      <p>The basic version of this page is composed of a Navbar, a Header, the content, and a Footer.</p>
      <br></br>
      <br></br>

      <h4>4- Moderate Folder Structure - Components:</h4>
      <p>The Navbar, Header, content, and Footer mentioned before are stored in the components folder.</p>
      <p>For each component or page, there can be a css file associated with it to make some adjustments 
        locally.
      </p>
      <br></br>
      <br></br>




      <h4>1- Creating a repository on GitHub:</h4>
      <p>In your GitHub account, click on the top right icon and select "your repositories".</p>
      <p>Then click on the green button "New" to create a new one.</p>
      <p>Select a fresh new repository with no additional files to avoid problems.</p>
      <p>Have Git installed in your machine, and then, right click the project folder and select "Git Bash".</p>
      <p>Once you're on the terminal execute [git add .]</p>
      <p>Execute [git status]</p>
      <p>Execute [git commit -m "version-name 1.0"]</p>
      <p>Execute [git push origin master]</p>
      <p>Use your GitHub User Name.</p>
      <p>Use a GitHub Token.</p>
      <br></br>
      <br></br>

      <h4>2- Basic Update on a GitHub repository:</h4>
      <p>Execute [git add .]</p>
      <p>Execute [git status]</p>
      <p>Execute [git commit -m "version-name 1.0"]</p>
      <p>Execute [git push origin master]</p>
      <p>Use your GitHub User Name.</p>
      <p>Use a GitHub Token.</p>
      <br></br>
      <br></br>

      <h4>3- GitHub Tokens:</h4>
      <p>They replaced the passwords that need to be used to push the GitHub project.</p>
      <p>In your GitHub account, click on the top right icon and select "settings".</p>
      <p>Then, on the bottom left side, select "developer settings".</p>
      <p>Next, on the left bar select "Personal access tokens".</p>
      <p>From here, you can generate a new token by clicking on the button.</p>
      <p>Remember that each token have it's own whitelist of things it can do. If you want the token to be
        used in a "git push", you have to give this token this ability on it's creation.
      </p>
      <br></br>
      <br></br>




      <h4>1- VSCode Shortcuts:</h4>
      <p>Shift + Tab to "Untab" a section</p>
      <p>Ctrl + K + C to comment the selected code</p>
      <p>Ctrl + K + U to uncomment the selected code</p>
      <p>Type [ html:5 ] to automatically build the HTML 5 basic tages.</p>
      <br></br>
      <br></br>

      <h4>2- Change Website Icon:</h4>
      <p>To change the website icon, first use the tag link on the HTML head with the properties: 
        rel="icon" and href="%PUBLIC_URL%/favicon.ico".
      </p>
      <p>To change the Icon image, you can convert a 16x16(32x32, 64x64...) px PNG file to ICO using 
        Format Factory.
      </p>
      <br></br>
      <br></br>

      <h4>2- Javascript Console Log Display:</h4>
      <p>Javascript is a loosely typed language.</p>
      <br></br>
      <br></br>
    </>
  )
}

export default JInfo01