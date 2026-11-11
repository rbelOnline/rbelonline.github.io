export const profile = {
    name: "Rona Beltran",
    title: "Fullstack Developer · IT Instructor ",
    location: "Philippines",
    photo: "/images/profile.png", // put your photo in public/images/
    resumePdf: "/BELTRAN, RONALYN_RESUME.pdf", // put your PDF in public/
    summary:
        "Hi, I'm Ronalyn Beltran, a Full-Stack Developer passionate about building functional, user-friendly, and impactful web applications. With a background in software development, IT education, and financial services, I bring a unique blend of technical expertise, problem-solving, and real-world business understanding to every project.",
    links: [
        { label: "GitHub", url: "https://github.com/rbelonline" },
        { label: "LinkedIn", url: "https://linkedin.com/in/ronalynbeltran" },
        { label: "Email", url: "mailto:ronalyncbeltran@gmail.com" },
    ],
};

// The headline under your name types through these, one after another.
export const roles = [
    "Full-Stack Developer",
    "PHP · Laravel · MySQL",
    "IT Instructor",
];

export const about = [
    "I am a Full-Stack Developer, IT Instructor, and Financial Advisor with a passion for technology, education, and continuous growth. My professional experience spans software development, teaching, and financial planning, allowing me to work with different people, solve diverse challenges, and turn ideas into practical solutions.",
    "Beyond my professional roles, I am currently pursuing a Master's degree in Information Technology to further strengthen my technical knowledge and expand my expertise in the field. I enjoy exploring emerging technologies, particularly AI, and finding innovative ways to apply what I learn in real-world projects. I believe that growth comes from staying curious, embracing challenges, and never stopping learning.",
];

export const experience = [
    {
        role: "IT Instructor",
        org: "La Consolacion College of Daet, Inc.",
        period: "July 2026 – Present",
        points: [
            "Teaches Database Management Systems, Web Application Development, and System Fundamentals.",
            "Design hands-on coding exercises and application development projects, including database-driven web applications and dashboards.",
            "Teach responsible use of AI coding assistants for coding, debugging, documentation, and validating AI-generated output.",
        ],
    },
    {
        role: "Freelance PHP/Web Developer",
        org: "Self-employed",
        period: "2021 – Present",
        points: [
            "Developed and maintained web applications using PHP, Laravel, MySQL, and related technologies.",
            "Implemented application features, database operations, and API integrations based on project requirements",
            "Troubleshot issues, improved existing functionality, and supported application maintenance.",
            "Continued developing technical skills in modern web development and AI-assisted coding workflows.",
        ],
    },
    {
        role: "Senior PHP Developer (2016 – 2021) | PHP Developer (2015 – 2016)",
        org: "Leekie Enterprises, Inc.",
        period: "2015 – 2021",
        points: [
            "Developed and maintained business applications using PHP, MySQL, JavaScript, jQuery, HTML, and CSS.",
            "Promoted to Senior PHP Developer in 2016, taking on additional responsibilities for task assignment, code reviews, and mentoring junior developers.",
            "Optimized SQL queries and application logic to improve system performance and reliability.",
            "Contributed to database design, application enhancements, and modernization of existing systems.",
            "Managed application patches and feature releases through development, LAB, and UAT environments before production deployment.",
            "Researched and evaluated technologies to improve development workflows and application capabilities.",
            "Received Outstanding Performance Awards in 2019 and 2020.",
        ],
    },
    {
        role: "Software Engineer",
        org: "LRN Ventures",
        period: "2014 – 2015",
        points: [
            "Built a client web application from the ground up using PHP and PostgreSQL.",
            "Designed the database schema and delivered enhancements based on client feedback.",
            "Presented deliverables directly to clients and handled post-deployment updates and support.",
        ],
    },
];

// Shown under "Other Experience" in the Experience section.
// Same format as experience above; remove the points line if you don't need it.
export const otherExperience = [
    {
        role: "Associate Unit Manager",
        org: "PRU Life UK",
        period: "2020 – Present",
        points: [
            "Helps clients plan for protection, savings, and investments through life and health insurance solutions.",
            "Manages a client portfolio, policy reviews, and follow-ups.",
        ],
    },
];

export const education = [
    {
        degree: "Master of Information Technology",
        school: "Mapúa University",
        period: "2026 – Present",
    },
    {
        degree: "BS Information Systems",
        school: "Manila Central University",
        period: "2009-2013",
    },
];

// Skills grouped by stack layer. Layers with icons: Frontend, Backend, Database, DevOps & Tools, Teaching.
export const skills = [
    {
        layer: "Frontend",
        items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Inertia.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "jQuery",
            "Astro",
        ],
    },
    {
        layer: "Backend",
        items: [
            "PHP",
            "Laravel",
            "CodeIgniter",
            "Python",
            "Django",
            "Java",
            "MVC",
            "REST APIs",
            "GraphQL",
        ],
    },
    {
        layer: "Database",
        items: [
            "MySQL",
            "PostgreSQL",
            "SQL",
            "Schema design",
            "MongoDB",
            "NoSQL",
        ],
    },
    {
        layer: "AI-Assisted Development",
        items: [
            "Claude Code",
            "AI Coding Assistants",
            "AI-Assisted Refactoring and Test Generation",
        ],
    },
    { layer: "DevOps & Tools", items: ["Git", "GitHub", "Netlify"] },
    {
        layer: "Teaching",
        items: ["Curriculum design", "Google Classroom", "Canva"],
    },
];

// Talks, seminars, workshops, and trainings you gave. Newest first.
// "date" is a list of one or more dates, e.g. ["2026-08-13"] or ["2026-08-13", "2026-08-20"].
// "link" (slides or event page) is optional; leave it "" to hide the button.
// "photos": put images in public/images/speaking/ and list as many as you like; they show as a swipeable slideshow.
export const speaking = [
    {
        title: "Web Development Enhancement Program 2026",
        event: "Workshop for College of Computer Studies Students",
        organizer: "La Consolacion College of Daet, Inc.",
        date: ["2026-08-13", "2026-08-20", "2026-08-27"],
        location: "Daet, Camarines Norte",
        type: "Workshop", // e.g. Talk, Workshop, Seminar, Panel, Training
        description:
            "Served as a resource speaker for the Web Development Enhancement Program 2026, a three-day workshop organized for the College of Computer Studies at La Consolacion College. The workshop focused on enhancing students' web development knowledge and practical skills through hands-on learning and industry-relevant techniques.",
        link: "",
        photos: [
            "/images/speaking/wdep2026-1.jpg",
            "/images/speaking/wdep2026-3.jpg",
            "/images/speaking/wdep2026-2.jpg",
        ] as string[],
    },
];

export const certifications = [
    {
        name: "IBM Certified Academic Asociate",
        issuer: "IBM",
        year: "2008",
        url: "",
    },
];

// Free contact form: create a form at https://formspree.io and paste its ID here.
// Leave empty to hide the form and show only your links.
export const formspreeId = "";
