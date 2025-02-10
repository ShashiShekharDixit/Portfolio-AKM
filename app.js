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
    let scrollDirection = 1;
    function autoScroll() {
        if (experienceList.scrollLeft + experienceList.offsetWidth >= experienceList.scrollWidth) {
            scrollDirection = -1;
        } else if (experienceList.scrollLeft <= 0) {
            scrollDirection = 1;
        }
        experienceList.scrollLeft += scrollDirection;
    }
    setInterval(autoScroll, 30);
});

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector("#project .list");
    let scrollDirection = 1;
    function autoScrollProjects() {
        if (projectList.scrollLeft + projectList.offsetWidth >= projectList.scrollWidth) {
            scrollDirection = -1;
        } else if (projectList.scrollLeft <= 0) {
            scrollDirection = 1;
        }
        projectList.scrollLeft += scrollDirection;
    }
    setInterval(autoScrollProjects, 30);
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            tabs.forEach(tab => tab.classList.remove('active'));
            const targetTab = document.getElementById(link.getAttribute('data-tab'));
            targetTab.classList.add('active');
        });
    });
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const contentNames = document.querySelectorAll('.name');
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });
    contentNames.forEach(content => {
        content.addEventListener('mouseenter', () => {
            cursorDot.style.visibility = 'visible'; 
            cursor.style.transform = 'scale(5.5)';  
            content.textContent = content.getAttribute('data-hover');
        });
        content.addEventListener('mouseleave', () => {
            cursorDot.style.visibility = 'hidden';  
            cursor.style.transform = 'scale(1)';    
            content.textContent = content.getAttribute('data-original');
        });
    });
    const emailForm = document.querySelector('#email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            const number = document.querySelector('#number').value;
            if (!email || !message || !number) {
                alert('Please fill out all fields correctly.');
                return;
            }
            alert(`Email: ${email}\nMessage: ${message}\nNumber: ${number}`);
        });
    }
});
