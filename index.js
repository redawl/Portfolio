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
        .append('<h4>Hi! My name is Eli Burch, and welcome to my portfolio!</h4>')
        .append('<p>I am a Computer Science student in my Junior year, and after much internal debate, I have decided to focus on Cybersecurity. I have experience writing code in C/C++, Java, Python, and Javascript. Outside of school, I have been working through the challenge boxes on HacktheBox using Kali Linux. In this process, I have learned to use tools such as BurpSuite, Nmap, Gobuster, Hashcat, John the Ripper, etc. My professional goal is to get a job as a Network Security Engineer, or a Security Researcher.</p>')
        .append('<p>Outside of my professional life, I work as a Produce Clerk at Fred Meyer and enjoy listening to podcasts, such as Hello Internet and Darknet Diaries. In the past, I have enjoyed reading, but I don\'t get a chance to do that too much anymore.</p>');
    },
    prevwork: () => {
        $('#content').empty().css({display : ""})
        .append('<div id="CAT" class="card p-5 mt-3"></div>');
        $('#CAT')
        .append('<h4>Computer Action Team @PSU</h4>' + 
                '<h6>IT/Support Specialist - September 2020 - Present</h6>' +
                '<ul>' +
                    '<li>' +
                        '<p>Assisted Engineering faculty and students with issues related to the Linux and Windows servers, and other resources.</p>' +
                    '</li>' +
                    '<li>' +
                        '<p>Implemented a webform in PHP and HTML for students to fill out when they accidentally delete files.</p>' +
                    '</li>' +
                    '<li>' +
                        '<p>Wrote Networking documentation to help students learn about the OSI layers.</p>'

        )
    },
    projects: () => {
        $('#content').empty().css({display : ""})
        .append('<div id="VFG" class="card p-5 mt-3"></div>')
        .append('<div id="SAV" class="card p-5 mt-3"></div>')
        .append('<div id="HTTP" class="card p-5 mt-3"></div>');
        $('#VFG')
        .append('<a href="https://github.com/redawl/VectorOpenGL"><h4>Vector Field Generator</h4></a>' + 
                    '<p>During the Summer term of 2020, I took Differential Equations. In it, we learned about systems of differential equations, where you have one differential equation for the change in x coordinates and a different equation for the change in y coordinates. Using these two equations, we were able to create beautiful vector fields.</p>' +
                    '<p>Unfortunately, there are not very many accessible ways for non-technical people to generate these fields. My professor suggested we use <a href="https://www.geogebra.org/m/utcMvuUy">this</a> generator, by Pablo Rodriguez Sanchez. At first glance, this applet appears to have no issues. But on closer inspection, if you want to understand the behavior of the field farther away from the origin, you have to guess by the direction of the specific solution arrow. Also even if you stay closer to the origin, the vectors do not have directional arrows, only lines that show the slope, which in some cases is not enough information, and you end up having to rely on the specific solution arrow again. Clearly, there was room to improve. So I got right on it.</p>' +
                    '<p>I first started out using Unity, scripting in C#, since I was familiar with the tool. I started by writing a <a href="https://github.com/redawl/Unity-Scripts/blob/master/Vector%20Field%20Generator/CameraZoom.cs">camera handler script</a>, which allowed the user to pan around the viewport, and to zoom in and out. Then I wrote a <a href="https://github.com/redawl/Unity-Scripts/blob/master/Vector%20Field%20Generator/GenerateGrid.cs">script</a> to generate the graph, as well as the axes of the graph. Finally, I got to work on the <a href="https://github.com/redawl/Unity-Scripts/blob/master/Vector%20Field%20Generator/VectorFieldGen.cs">script</a> that generates the vector field. I used the awesome custom library <a href="http://mathparser.org/">mxParser</a> by Marius Z Gromada to parse the differential equations from the strings given to me from unity input fields. The prototype looks something like this in action:</p>' +
                    '<img src="images/VecFieldExample.png" alt="Vector field made in Unity" width="100%">' +
                    '<p>I felt very accomplished at this point and decided I should get started making things look prettier, and add more features. Around this time though, I ran into a great web-based <a href="https://anvaka.github.io/fieldplay/?cx=-0.14375000000000027&cy=-0.008550000000000058&w=8.543099999999999&h=8.543099999999999&dt=0.01&fo=0.998&dp=0.009&cm=3&vf=%2F%2F%20p.x%20and%20p.y%20are%20current%20coordinates%0A%2F%2F%20v.x%20and%20v.y%20is%20a%20velocity%20at%20point%20p%0Avec2%20get_velocity%28vec2%20p%29%20%7B%0A%20%20vec2%20v%20%3D%20vec2%280.%2C%200.%29%3B%0A%0A%20%20%2F%2F%20change%20this%20to%20get%20a%20new%20vector%20field%0A%20%20v.x%20%3D%20p.x%2Bp.y%3B%0A%20%20v.y%20%3D%20p.y-p.x%3B%0A%0A%20%20return%20v%3B%0A%7D&code=%2F%2F%20p.x%20and%20p.y%20are%20current%20coordinates%0A%2F%2F%20v.x%20and%20v.y%20is%20a%20velocity%20at%20point%20p%0Avec2%20get_velocity%28vec2%20p%29%20%7B%0A%20%20vec2%20v%20%3D%20vec2%280.%2C%200.%29%3B%0A%0A%20%20%2F%2F%20change%20this%20to%20get%20a%20new%20vector%20field%0A%20%20v.x%20%3D%20p.x%2Bp.y%3B%0A%20%20v.y%20%3D%20p.y-p.x%3B%0A%0A%20%20return%20v%3B%0A%7D">tool</a> for generating gorgeous moving vector fields in browser, by Anvaka. It creates amazing colors and swirls and movements. It loses a little functionality, though, which is where I would like to go with the project. My current goal is to create a Vector Field Generator that is both visually pleasing but also allows you to see the long term behavior, exact locations of critical points, and so on. To accomplish this, I want to move away from Unity and create the rest of this project using OpenGL. While it has a much steeper learning curve, I will be able to fine-tune its implementation to do exactly what I need it to do, and nothing more. With Unity, I would be stuck with a lot more functionality than I would need or use. The current build of this OpenGL project can be found <a href="https://github.com/redawl/VectorOpenGL">here</a>. I am very proud of how the project has turned out so far. Here it is in action:</p>' +
                    '<img src="images/animation.gif" alt="OpenGL vector field generator in action">'
        );
        $('#SAV')
        .append('<a href="https://github.com/redawl/Unity-Scripts/tree/master/Sorting%20Algorithm%20Visualizer"><h4>Sorting Algorithm Visualizer</h4></a>' +
                    'For this project, I was inspired by the various sorting algorithm visualizer videos on YouTube that were shown to me by my professor in my Data Structures and Algorithms class. Here are some examples:' +
                    '<a href="https://www.youtube.com/watch?v=kPRA0W1kECg">Example 1</a>' +
                    '<a href="https://www.youtube.com/watch?v=y9Ecb43qw98">Example 2</a>' +
                    '<p>For my version, I wanted to make an accessible program that a layperson could download, and choose themselves which sorting algorithm they want to understand. I used Unity for this, because of my familiarity with the tool. <a href="https://github.com/redawl/Unity-Scripts/blob/master/Sorting%20Algorithm%20Visualizer/sorting.cs">Here</a> is the script I wrote. Currently, it supports Bubble Sort, Insertion Sort, and Selection Sort, with more to come. Here it is in action, with Selection Sort.</p>' +
                    '<img src="images/selectionSort.gif" alt="Animation of Selection Sort" width="100%">' +
                    '<p>I am currently in the process of adding more sorts, as well as setting up some UI elements that would show how many passes through the data were needed to fully sort, or what the current run time of the algorithm is.</p>'
        )
        $('#HTTP')
        .append('<a href="https://github.com/redawl/HTTPServer"><h4>Simple HTTPServer</h4></a>' +
                    '<p>This basic server is my attempt at the http server project run by TPH, which can be found <a href="https://theprogrammershangout.com/resources/projects/http-project-guide/intro.md">here</a>.</p>' +
                    '<p>I learned a lot while working on this project, such as how internet protocols talk to each other, how to create a project using Python, and how a webserver works.</p>' +
                    '<p>The project uses websockets. The server currently responds to GET and HEAD requests. I plan to add POST request functionality, and I would also like to add support for more headers. </p>'
        )
    },
    resume: () => {
        $('#content').empty().css({display : ""})
        .append('<embed src="EliBurch2021.pdf" type="application/pdf" width="100%" height="600px" />');
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
                        '<input type="text" id="name" name="name" class="ms-4 input-elem"/>' +
                    '</div>' +
                    '<br />' +
                    '<div class="py-3">'  + 
                        '<label for="email">Email:</label>' +
                        '<input type="email" id="email" name="email" class="ms-4 input-elem"/>' +
                    '</div>' +
                    '<br />' +
                    '<div class="py-3">' +
                        '<label for="message">Message:</label>' +
                        '<textarea id="message" name="message" class="ms-4 input-elem"></textarea>' +
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