module.exports = {
	desktopmetal: {
		title: 'Desktop Metal',
		tagline: 'Built robust single-page web application using Meteor and React',
		tag: 'Lead Front-End Developer',
		client: 'Burlington, MA',
		whatIDid: 'Built a single page application that took in raw CuraEngine data and displayed real time 3D printer information',
		description: 'The purpose of the web application was to display information that came from our printer. We would take the data which could be as simple as how far along a print was to as complicated as taking 3D modeling data from the CuraEngine and displaying properly in a viewer on the page. I was tasked with processing that data from these sources and accurate displaying them on the web application in real time.',
		live: 'https://www.youtube.com/watch?v=U7ULd3joUl8',
		tech: ['JavasScript, React, Meteor, Sass, Materialize CSS, Typescript, Gulp'],
		process:[
			'<h3 class="u-heading-6">Lessons Learned</h3>',
			'<p>This was my first experience with building such a complex application from the ground up. It all started with creating a good foundation with our technology stack. Meteor was the framework that was chosen alongside React.js. While these technologies were relatively new they were established and used widely. React was chosen because of its powerful capability to display changing information inside a web application without the need to refresh the entire page.</p>',
			'<p>This would prove useful for when we started plugging in the data given to us by the 3D printer into the front-end of the application. In addition to the desktop design, I helped to create a mobile design. The first thing I had to determine was what exactly people would be doing on their mobile devices when pulling up this app. With such a limited space I decided that the mobile version of our app would only be used to check on the status of prints.</p>',
			'<p>This made the design much clearer since it removed extra components normally used to upload 3D files. This allowed us to stretch the canvas of the 3D viewer and signaled to the user that this version of our application was primarily for viewing, not active uploading and tweaking of files.</p>',
		].join('')
	},
	metlife: {
		title: "MetLife",
		tagline: "Modernized the MetLife employee home page",
		tag: "Front End Developer",
		client: "Raleigh, NC",
		whatIDid: "Redesigned the internal employee home page from the bottom up. I took what was once an IE8-only site and rebuilt it using a modern tool stack with responsive design and browser compatibility in mind.",
		description: "The MetLife employee home page was initially designed for the IE8 enivornment almost a decade ago. With a redesign desperately needed, I was tasked with rebuilding the page from the bottom up. After gathering requirements and mocking up UI designs in Adobe Photoshop I got to work.",
		tech: ["HTML5", "CSS3, SCSS", "Bootstrap", "JavaScript (ECMAScript 6)", "jQuery", "Gulp"],
		process: ['<h3 class="u-heading-6">01. Research</h3>', '<p>After receiving word I would be heading up this project I went ahead and looked up the web page I would be working on. The first flaw I noticed was that this was a static page and was therefore not responsive. MetLife was entering a "mobile first" development strategy so I knew that would be a focus of my efforts.</p>', '<h3 class="u-heading-6">02. Setup</h3>', "<p>For projects like this I believe preparation and having a proper setup is critical to completing tasks efficiently and producing a quality product.</p>", "<p>I have a goal of learning at least one new technology with each project I start, for this one it was ECMAScript 6. I had read some documentation on ES6 and fiddled around with it when I had free time, but nothing intensive. There was no better time than now. After gathering the requirements from our development team I mocked up the protoype in Adobe Photoshop in order to visualize what technologies I would need to incorporate. In order to produce efficient code I used Gulp as my task-runner. I love Gulp because because there is a plugin for everything (i.e. compiling SCSS to CSS, ES6 to ES5, minifying, etc...)</p>", '<h3 class="u-heading-6">03. Development</h3>', "<p>The requirements for the site were simple enough. The site needed to be responsive so it could work on a variety of devices, especially mobile and it needed to be compatible with modern browsers such as Chrome and Firefox. I decided to use Bootstrap as it would provide the functionality that users would need.</p>", "<p>After getting the layout completed and tested on multiple devices and browsers I moved on to the interface. I adopted a simple flat design along with a color scheme that fell in line with the company brand guidelines. When used prudently, animations can provide a sense of intuition and interactivty that augments UX. I used jQuery to add effects for elements like buttons and menus.</p>", "<p>Using Gulp I improved the efficiency of the code by minifying the CSS and HTML, uglifying the JavaScript and then bundling the code together.</p>", '<h3 class="u-heading-6">04. Launch</h3>', "<p>For the launch, I had the site tested by our Quality Assurance and User Acceptance Testing teams before it was deployed. I developed several test cases that the teams would use to check for bugs.</p>"].join("")
	},
	rightpoint: {
		title: 'Rightpoint',
		tagline: 'Shipped 8 React & Vue projects from the ground up to production',
		tag: 'Front-End Developer',
		client: 'Boston, MA',
		description: "A Front-End role in a consulting company. I have worked with clients to implement Front-End solutions using mainly React and Vue.js. I also advocated for and helped implement the firm's first Next.js solution.",
		whatIDid: 'Maintained internal company repos that allowed devs to jumpstart their Front-End builds during project setup. Worked on React and other Front-End projects with different clients',
		tech: ['JavaScript, React, Vue, Next.js, Sass, Typescript, Gulp'],
		process: [
			'<p>I think every role I\'ve had has taught me something new and my role at Rightpoint in so different. Working in a consulting company means that every project you work on is completely different than the last. You have new team members, clients, culture, requirements and tech stack. Compared to other roles where you are building towards one goal as a company, Rightpoint has multiple teams working on multiple client projects in parallel.</p>',
			'<p>Personally, I love it. Each project presents unique challenges that will teach you something new as you work together with teammates to come up with solutions. There\'s nothing more exciting than putting heads together and working to surprise and delight a client when demo time comes</p>',
			'<p>Other than continuing to improve as a Front-End developer, I think the most valuable experiences I have had at Rightpoint is working with so many different people. The ability to work with new devs on every project is invaluable. My favorite exercise is coming up with a solution, comparing it to how a more senior developer would approach it and asking them to explain their thought process. During my time here, I have learned so much from these developers and picked up new ways to approach and solve problems. Sometimes as developers I think we get caught up in the shiny new framework, but abstracting out of technology and learning how more experienced people tackle challenges is worth its weight in gold.</p>',
		].join('')
	},
};