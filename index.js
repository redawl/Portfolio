function switchContent(id) {
    console.log('Function is running') //GET THIS OUT OF PRODUCTION
    let listItems = Array.from(document.querySelectorAll('li a'));
    listItems.forEach(li => {
        li.className = "nav-link";
    });
    let link = document.getElementById(id);
    link.className = 'nav-link active';
    let section = document.getElementById('content');
    section.innerHTML = content[id];
}

content = {
    home: "<p>" +
    "Hi! My name is Eli Burch, and welcome to my portfolio!" + 
    "<br>" + 
    "I am a Computer Science student in my Junior year, and after much internal debate, I have decided to focus on Cybersecurity. I have experience writing code in C/C++, Java, Python, and Javascript. Outside of school, I have been working through the challenge boxes on HacktheBox using Kali Linux. In this process, I have learned to use tools such as BurpSuite, Nmap, Gobuster, Hashcat, John the Ripper, etc. My professional goal is to get a job as a Network Security Engineer, or a Security Researcher. " +
    "<br>" + 
    "Outside of my professional life, I work as a Produce Clerk at Fred Meyer and enjoy listening to podcasts, such as Hello Internet and Darknet Diaries. In the past, I have enjoyed reading, but I don't get a chance to do that too much anymore." + 
    "</p>",
    prevwork: "<p>Placeholder</p>",
    contact: "<a href='https://www.linkedin.com/in/eli-burch/'>LinkedIn</a>" +
    "<br>" +
    "<a href='https://github.com/redawl'>GitHub</a>" +
    "<br>" +
    "<a href='mailto:elburch@pdx.edu'>Email: elburch@pdx.edu</a>" +
    "<p>Phone: (971) 340-3905</p>",
}