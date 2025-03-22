<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });

    // Close menu when clicking a menu item
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        });
    });
});

function updateAbout(type) {
    const aboutDesc = document.getElementById("about-description");
    const aboutExtra = document.getElementById("about-extra");
    const aboutSection = document.getElementById("about");

    if (type === "professional") {
        aboutDesc.innerHTML = "Hi, I'm <strong>Balamurugesh Nagaraj</strong>, a passionate <strong>Data Analyst</strong> skilled in <strong>SQL, Python, and Power BI</strong>. I specialize in <strong>data transformation, visualization, and business intelligence</strong>, helping organizations make <strong>data-driven decisions</strong>.";
        
        aboutExtra.innerHTML = "Currently pursuing a <strong>B.E. in Computer Science Engineering</strong> at <strong>St. Mother Theresa Engineering College</strong>, I have developed expertise in <strong>database management, Python programming, and statistical analysis</strong>. With a keen eye for <strong>problem-solving and automation</strong>, I am always eager to apply <strong>data analytics</strong> to real-world business challenges.";

        aboutSection.style.backgroundImage = "url('prof.jpg')";
    } else {
        aboutDesc.innerHTML = "Beyond <strong>data analytics</strong>, I have a strong passion for <strong>public speaking, dance, and storytelling</strong>. I have actively participated and <strong>won multiple prizes</strong> in <strong>Tamil speech competitions</strong>, showcasing my ability to <strong>communicate ideas effectively</strong>.";

        aboutExtra.innerHTML = "My <strong>leadership skills</strong> were put to the test when I successfully served as the <strong>Overall Coordinator</strong> for a major college event, managing teams and ensuring smooth execution. I believe that <strong>confidence, creativity, and communication</strong> are key to success, and I continuously work on refining these skills to complement my technical expertise.";

        aboutSection.style.backgroundImage = "url('soft.jpg')";
    }
}





function showSkill(skill) {
    let bar = document.getElementById(skill + "-bar");
    let level = document.getElementById(skill + "-level");
    let container = document.getElementById(skill + "-bar-container");

    container.style.display = "block";  // Show bar container
    level.style.display = "block";  // Show percentage

    // Set the progress bar dynamically based on the skill
    if (skill === "sql") {
        bar.value = 85;  // Set the SQL skill progress
        level.textContent = "85%";  // Set the SQL skill percentage
    } else if (skill === "python") {
        bar.value = 90;
        level.textContent = "90%";
    } else if (skill === "powerbi") {
        bar.value = 80;
        level.textContent = "80%";
    } else if (skill === "excel") {
        bar.value = 75;
        level.textContent = "75%";
    }
}

function hideSkill(skill) {
    let bar = document.getElementById(skill + "-bar");
    let level = document.getElementById(skill + "-level");
    let container = document.getElementById(skill + "-bar-container");

    container.style.display = "none";  // Hide bar container
    level.style.display = "none";  // Hide percentage

    // Reset progress bar
    bar.value = 0;
    level.textContent = "";
}


=======
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });

    // Close menu when clicking a menu item
    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        });
    });
});

function updateAbout(type) {
    const aboutDesc = document.getElementById("about-description");
    const aboutExtra = document.getElementById("about-extra");
    const aboutSection = document.getElementById("about");

    if (type === "professional") {
        aboutDesc.innerHTML = "Hi, I'm <strong>Balamurugesh Nagaraj</strong>, a passionate <strong>Data Analyst</strong> skilled in <strong>SQL, Python, and Power BI</strong>. I specialize in <strong>data transformation, visualization, and business intelligence</strong>, helping organizations make <strong>data-driven decisions</strong>.";
        
        aboutExtra.innerHTML = "Currently pursuing a <strong>B.E. in Computer Science Engineering</strong> at <strong>St. Mother Theresa Engineering College</strong>, I have developed expertise in <strong>database management, Python programming, and statistical analysis</strong>. With a keen eye for <strong>problem-solving and automation</strong>, I am always eager to apply <strong>data analytics</strong> to real-world business challenges.";

        aboutSection.style.backgroundImage = "url('prof.jpg')";
    } else {
        aboutDesc.innerHTML = "Beyond <strong>data analytics</strong>, I have a strong passion for <strong>public speaking, dance, and storytelling</strong>. I have actively participated and <strong>won multiple prizes</strong> in <strong>Tamil speech competitions</strong>, showcasing my ability to <strong>communicate ideas effectively</strong>.";

        aboutExtra.innerHTML = "My <strong>leadership skills</strong> were put to the test when I successfully served as the <strong>Overall Coordinator</strong> for a major college event, managing teams and ensuring smooth execution. I believe that <strong>confidence, creativity, and communication</strong> are key to success, and I continuously work on refining these skills to complement my technical expertise.";

        aboutSection.style.backgroundImage = "url('soft.jpg')";
    }
}





function showSkill(skill) {
    let bar = document.getElementById(skill + "-bar");
    let level = document.getElementById(skill + "-level");
    let container = document.getElementById(skill + "-bar-container");

    container.style.display = "block";  // Show bar container
    level.style.display = "block";  // Show percentage

    // Set the progress bar dynamically based on the skill
    if (skill === "sql") {
        bar.value = 85;  // Set the SQL skill progress
        level.textContent = "85%";  // Set the SQL skill percentage
    } else if (skill === "python") {
        bar.value = 90;
        level.textContent = "90%";
    } else if (skill === "powerbi") {
        bar.value = 80;
        level.textContent = "80%";
    } else if (skill === "excel") {
        bar.value = 75;
        level.textContent = "75%";
    }
}

function hideSkill(skill) {
    let bar = document.getElementById(skill + "-bar");
    let level = document.getElementById(skill + "-level");
    let container = document.getElementById(skill + "-bar-container");

    container.style.display = "none";  // Hide bar container
    level.style.display = "none";  // Hide percentage

    // Reset progress bar
    bar.value = 0;
    level.textContent = "";
}


>>>>>>> cd0414e (Add files via upload)
