document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Content for each section
  const aboutContent = `
    <section class="about-section">
      <h2>About Me</h2>
      <hr class="solid" />
      <div class="content-details">
        <p>
        Greetings! I'm Andrew Paolella, an Information Technology professional fueled by a passion for technology. My journey with computers began practically before I could tie my shoes, sparking an innate curiosity that has driven me ever since. My broad skillset encompasses a strong foundation in programming languages including Python and C++. Beyond programming, my technical abilities extend to system operations, web design, ethical hacking, and computer hardware. I am seeking full-time, or freelance opportunities to apply my expertise. </p>
        <p>In my freetime, I enjoy staying active with outdoor pursuits, reading new books, traveling, music, and live comedy. I'm an advocate for self-development and learning new things.
        I possess strong problem-solving and troubleshooting abilities, allowing me to efficiently tackle challenges and optimize workflows.</p>
        </p>
      </div>
    </section>
  `;

  const educationContent = `
    <section class="education-section">
      <h2>Education</h2>
      <hr class="solid" />
      <div class="content-details">
        <h3>Oakland University</h3>
        <p>Bachelor of Science in Information Technology</p>
        <p>2023 - 2025</p>
        <p> As a graduate of Oaklands ABET accredited IT program, I gained a strong foundation in programming, HCI, edge AI, embedded systems, web and mobile development, computer networks, database design, data structures, systems administration and much more. 
        I tailored my studies to my specific interests within the program through specialized cybersecurity tracks including, information security, security and privacy in computing, information security practices, and script programming.
      </div>
    </section>
  `;

  const experienceContent = `
    <section class="experience-section">
      <h2>Experience</h2>
      <hr class="solid" />
      <div class="content-details">
        <h3>Help Desk IT Technician</h3>
        <p>Oakland University</p>
        <p>2024 - 2025</p>
        <p>
        Provide comprehensive IT support to faculty, staff, and students. Troubleshoot technical issues, install/configure hardware, software, and manage networks. 
        Offer tailored solutions and maintain detailed documentation. Assist users with software applications like Office 365, Adobe Acrobat, and Google Suite.  
        Troubleshoot Microsoft Open Database Connectivity. Assist with Duo 2FA. Participated in a domain migration project, leveraging WDS and Active Directory of 150 laptops. Working in a team environment. 

        </p>
      </div>
    </section>
  `;

  // Load initial content
  contentDiv.innerHTML = aboutContent;

  // Create circular buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const aboutBtn = document.createElement("button");
  const educationBtn = document.createElement("button");
  const experienceBtn = document.createElement("button");

  aboutBtn.classList.add("circle-button");
  educationBtn.classList.add("circle-button");
  experienceBtn.classList.add("circle-button");

  // Append buttons to the container
  buttonContainer.appendChild(aboutBtn);
  buttonContainer.appendChild(educationBtn);
  buttonContainer.appendChild(experienceBtn);

  // Add the button container to the DOM
  document.querySelector("header").appendChild(buttonContainer);

  // Event listeners for the buttons
  aboutBtn.addEventListener("click", () => {
    contentDiv.innerHTML = aboutContent;
  });

  educationBtn.addEventListener("click", () => {
    contentDiv.innerHTML = educationContent;
  });

  experienceBtn.addEventListener("click", () => {
    contentDiv.innerHTML = experienceContent;
  });
});
