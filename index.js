function switchContent(id) {
    let listItems = Array.from(document.querySelectorAll('li a'));
    listItems.forEach(li => {
        li.className = "nav-link";
    });
    let link = document.getElementById(id);
    link.className = 'nav-link active';
    content[id]();
}

$('document').ready(() => {
    content.home();
})

content = {
    home: () => {
        $('#content').empty().css({display : ""})
        .append('<div id="intro" class="card p-5 mt-3"></div>');
        $('#intro')
        .append('<p>Hi! My name is Eli Burch, and welcome to my portfolio!</p>')
        .append('<p>I am a Computer Science student in my Junior year, and after much internal debate, I have decided to focus on Cybersecurity. I have experience writing code in C/C++, Java, Python, and Javascript. Outside of school, I have been working through the challenge boxes on HacktheBox using Kali Linux. In this process, I have learned to use tools such as BurpSuite, Nmap, Gobuster, Hashcat, John the Ripper, etc. My professional goal is to get a job as a Network Security Engineer, or a Security Researcher.</p>')
        .append('<p>Outside of my professional life, I work as a Produce Clerk at Fred Meyer and enjoy listening to podcasts, such as Hello Internet and Darknet Diaries. In the past, I have enjoyed reading, but I don\'t get a chance to do that too much anymore.</p>');
    },
    prevwork: () => {
        $('#content').empty().css({display : ""})
        .append('<p>Placeholder</p>');
    },
    projects: () => {
        $('#content').empty().css({display : ""})
        .append('<h4>CryptoPals</h4>');
    },
    resume: () => {
        $('#content').empty().css({display : ""})
        .append('<embed src="eliburch2021.pdf" type="application/pdf" width="100%" height="600px" />');
    },
    contact: () => { 
        $('#content').empty().css({display : ""})
        .append('<div id="links" class="contact-card card p-5 mt-3 me-3">' + 
                    '<h4>Links</h4>' +
                '</div>'
                )
        .append('<form action="" class="contact-card card p-5 mt-3">' +
                    '<h4>Contact Form</h4>' +
                    '<div class="py-3">' +
                        '<label for="name">Name:</label>' +
                        '<input type="text" id="name" name="name" style="float: right" class="ms-4"/>' +
                    '</div>' +
                    '<br />' +
                    '<div class="py-3">'  + 
                        '<label for="email">Email:</label>' +
                        '<input type="email" id="email" name="email" style="float: right" class="ms-4"/>' +
                    '</div>' +
                    '<br />' +
                    '<div class="py-3">' +
                        '<label for="message">Message:</label>' +
                        '<textarea id="message" name="message" style="float: right" class="ms-4"></textarea>' +
                    '</div>' +
                    '<input type="submit" value="Submit" class="btn btn-primary"/>' +
                    '</div>' +
                    '</form>'
                )
        .css({display : "flex", flexWrap : "wrap"});
        $('#links')
        .append('<span><a href=\'https://www.linkedin.com/in/eli-burch/\'>LinkedIn</a>')
        .append('<br>')
        .append('<a href=\'https://github.com/redawl\'>GitHub</a>')
        .append('<br>')
        .append('<a href=\'mailto:elburch@pdx.edu\'>Email: elburch@pdx.edu</a>')
        .append('<p>Phone: (971) 340-3905</p>');
    },
}