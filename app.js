document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('nav a[data-tab]');
    const tabContents = document.querySelectorAll('.tab');

    function showTab(tabId) {
        tabContents.forEach(tab => tab.style.display = 'none');
        document.getElementById(tabId).style.display = 'block';
        tabLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`nav a[data-tab="${tabId}"]`).classList.add('active');
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showTab(this.getAttribute('data-tab'));
        });
    });

    document.querySelectorAll('.tab a[data-tab]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showTab(this.getAttribute('data-tab'));
        });
    });

    showTab('intro');

    function autoScroll(element, interval = 30) {
        let direction = 1;
        setInterval(() => {
            if (element.scrollLeft + element.clientWidth >= element.scrollWidth) {
                direction = -1;
            } else if (element.scrollLeft <= 0) {
                direction = 1;
            }
            element.scrollLeft += direction;
        }, interval);
    }

    const experienceList = document.querySelector("#experience .list");
    const projectList = document.querySelector("#project .list");
    if (experienceList) autoScroll(experienceList);
    if (projectList) autoScroll(projectList);

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    if (!isTouch && cursor && cursorDot) {
        let x = 0, y = 0;
        document.addEventListener('mousemove', e => {
            x = e.clientX;
            y = e.clientY;
        });
        function animateCursor() {
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    } else {
        if (cursor) cursor.style.display = 'none';
        if (cursorDot) cursorDot.style.display = 'none';
    }

    if (!isTouch) {
        const contentNames = document.querySelectorAll('.name');
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
    }

    const emailForm = document.querySelector('#email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function (e) {
            e.preventDefault();
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

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    });
});
