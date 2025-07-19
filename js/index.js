document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Content for each section
  const aboutContent = `
    <section class="about-section">
      <h2>About Me</h2>
      <hr class="solid" />
      <div class="content-details">
        <p>
        Greetings! I'm Andrew Paolella, an IT professional with a lifelong love for technology. My journey with computers began practically before I could tie my shoes, sparking an innate curiosity that has driven me ever since. My broad skillset encompasses a strong foundation in programming languages including Python and C++. Beyond programming, my technical abilities extend to system operations, embedded systems, web design, information security, and more! I am seeking full-time, or freelance opportunities to apply my expertise. </p>
        <p>In my freetime, I enjoy staying active outdoors, reading new books, traveling, music, and comedy. I'm a strong problem-solver with a continuous drive for learning and personal development. </p>
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
        <p> As a graduate of Oaklands ABET accredited IT program, I gained a strong foundation of fundamentals in programming, HCI, AI embedded systems, web and mobile development, computer networks, database design, data structures, systems administration and much more. 
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

      <div class="content-details">
        <h3>IT Support Specialist</h3>
        <p>Weber Olcese PLC</p>
        <p>2025 - Present</p>
        <p>
        At Weber Olcese I am responsible for overseaing and maintaining their IT infrastructure. My responsibilities include providing technical support and troubleshooting for end-users. Install, configure, monitor, and maintain computer systems, networks, and applications. Manage Active Directory: user and computer accounts, group policies, and security groups. 
        Manage Office 365 Outlook Admin: user accounts, licensing, policies, and communication. Deploy and manage Duo 2FA, onboarding users for secure system authentication.
        
        </p>
      </div>

    </section>
  `;

  const projectContent = `
  <section class="projects-section">
    <h2>Projects</h2>
    <hr class="solid" />
    <div class="content-details">
      <h3>AI Neural Network </h3>
      <p>
        Developed an autonomous driving object detection pipeline across diverse driving scenarios using the BDD100K dataset, YOLO model, and PyTorch.
      </p>

      <h3>PythonDataCrawler</h3>
      <p>
        Python-based interactive geographic data crawler and population density visualization tool using ipyleaflet and GeoPandas. Used Jupyter for interactive maps and exploratory data analysis.
      </p>
      <h3>ParlayGPT</h3>
      <p>
        iOS sports betting app leveraging OpenAI to analyze and improve parlay bet outcomes. Still in early development.
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
  const projectBtn = document.createElement("button");

  aboutBtn.classList.add("circle-button");
  educationBtn.classList.add("circle-button");
  experienceBtn.classList.add("circle-button");
  projectBtn.classList.add("circle-button");

  // Append buttons to the container
  buttonContainer.appendChild(aboutBtn);
  buttonContainer.appendChild(educationBtn);
  buttonContainer.appendChild(experienceBtn);
  buttonContainer.appendChild(projectBtn);


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

  projectBtn.addEventListener("click", () => {
    contentDiv.innerHTML = projectContent; 
  });

});
