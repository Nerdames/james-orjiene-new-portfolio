document.addEventListener("DOMContentLoaded", function() {
    // Show #home-page by default
    let defaultSection = document.querySelector("#home-page");
    defaultSection.classList.add("active");

    // Top menu click event for the main sections
    document.querySelectorAll(".topmenu li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all menu links
            document.querySelectorAll(".topmenu li a").forEach(el => el.classList.remove("active"));

            // Add active class to the clicked menu link
            this.classList.add("active");

            // Get the target section ID
            let targetSectionId = this.getAttribute("href");

            // Hide current section and show new one
            let activeSection = document.querySelector("section.active");
            if (activeSection) {
                activeSection.classList.remove("active");
            }

            setTimeout(() => {
                let newSection = document.querySelector(targetSectionId);
                newSection.classList.add("active");
            }, 300); // Time corresponds to the fade-out timing
        });
    });

  
    

    // Time-based greeting logic
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const currentHour = new Date().getHours(); // Get the current hour

        let greetingMessage = "Welcome guest"; // Default message

        if (currentHour >= 5 && currentHour < 12) {
            greetingMessage = "Good Morning!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingMessage = "Good Afternoon!";
        } else if (currentHour >= 18 && currentHour < 23) {
            greetingMessage = "Good Evening!";
        } else {
            greetingMessage = "Good Night!";
        }

        greetingElement.textContent = greetingMessage; // Update the paragraph text
    }
});


const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#designs-pages li a");
    const sections = document.querySelectorAll(".design-section");

    // Add click event listener for each link
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all links
            links.forEach(el => el.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Show the corresponding section
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.classList.add("active");
        });
    });
});
