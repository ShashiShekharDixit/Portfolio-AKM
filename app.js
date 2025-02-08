document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('nav a[data-tab]');
    const tabContents = document.querySelectorAll('.tab');
    function showTab(tabId) {
        tabContents.forEach(tab => tab.style.display = 'none');        
        document.getElementById(tabId).style.display = 'block';
        tabLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`nav a[data-tab="${tabId}"]`).classList.add('active');
    }
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });
    showTab('intro');
    document.querySelectorAll('.tab a[data-tab]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const experienceList = document.querySelector("#experience .list");
    let scrollDirection = 1; // 1 for right, -1 for left

    function autoScroll() {
        if (experienceList.scrollLeft + experienceList.offsetWidth >= experienceList.scrollWidth) {
            scrollDirection = -1; // Change direction to left
        } else if (experienceList.scrollLeft <= 0) {
            scrollDirection = 1; // Change direction to right
        }
        experienceList.scrollLeft += scrollDirection; // Scroll in the current direction
    }

    setInterval(autoScroll, 30); // Adjust the interval for speed
});
document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector("#project .list");
    let scrollDirection = 1; // 1 for right, -1 for left

    function autoScrollProjects() {
        if (projectList.scrollLeft + projectList.offsetWidth >= projectList.scrollWidth) {
            scrollDirection = -1; // Reverse direction to left
        } else if (projectList.scrollLeft <= 0) {
            scrollDirection = 1; // Reverse direction to right
        }
        projectList.scrollLeft += scrollDirection; // Scroll in the current direction
    }

    setInterval(autoScrollProjects, 30); // Adjust interval for scroll speed
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));

            // Add active class to the clicked tab
            const targetTab = document.getElementById(link.getAttribute('data-tab'));
            targetTab.classList.add('active');
        });
    });

    // Custom Cursor Effect only for content name
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const contentNames = document.querySelectorAll('.name');

    // Mousemove event for tracking cursor position
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Add hover effect to content names to enlarge cursor and show dot
    contentNames.forEach(content => {
        content.addEventListener('mouseenter', () => {
            cursorDot.style.visibility = 'visible';  // Show smaller dot
            cursor.style.transform = 'scale(5.5)';  // Enlarge cursor

            // Change text content when hover
            content.textContent = content.getAttribute('data-hover');
        });

        content.addEventListener('mouseleave', () => {
            cursorDot.style.visibility = 'hidden';  // Hide smaller dot
            cursor.style.transform = 'scale(1)';    // Reset cursor size

            // Restore original text when hover ends
            content.textContent = content.getAttribute('data-original');
        });
    });
});