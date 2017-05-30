var education={"schools":[
{"name":"St.Joseph Public School","location":"Cherthala","masters":["none"],"degree":"Completed school studies","url":"https://www.st.josephpublicschool.com"},
{"name":"Govt.Model Engineering College","location":"Kochi","masters":["none"],"degree":"B.Tech","url":"https://www.mec.ac.in"}
],
"online courses":[
{"title":"Intro to Machine Learning","school":"Udacity","date":"14/3/2014","url":"https://www.udacity.com"},
{"title":"JavaScript Basics","school":"Udacity","date":"18/6/2015","url":"https://www.udacity.com"}
]
};

var work={"jobs":[
{"employer":"Wipro","title":"Project Intern","location":"Bangalore","dates":"15/5/2015-16/6/2015","description":"Worked on automatic short answer evalution based on NLP" },
{"employer":"Media Labs Asia","title":"Project Intern","location":"Mumbai","dates":"18/6/2015-1/7/2015","description":"Web Developer"}
]
}
var projects={"projects":[
{"title":"Mec-Connect", "dates":"1/1/2015-2/4/2015", "description":"A campus networking site that help in technical and academic development",  "image":""},
{"title":"Hospital Management System","dates":"2/1/2014-18/2/2014", "description":"A website to handle hospital management","image":""}
]
}

var bio={"name":"Sreya Francis","role":"Web Developer","welcomeMessage":"WELCOME!","contacts":{"mobile":"9446280279","email":"sreyafrancis.mec@gmail.com","twitter":"@sreyafrancis","github":"sreyafrancis","location":"Cherthala,Kerala"},"skills":["machine learning","web development","teaching","strategic management"],"image":"images/sreya.jpg"
};
bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole).prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

$("#footerContacts").append(formattedMobile)
.append(formattedEmail)
.append(formattedGithub)
.append(formattedLocation)
.append(formattedTwitter);
var bioPic = bio.image;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);
}


education.display = function() {
for(school in education.schools) {
$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
}
};


function displayWork(){

for(job in work.jobs){
$("#workExperience").append(HTMLworkStart);

var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle=formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);


var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}


projects.display=function(){
for(project in projects.projects){
$("#projects").append(HTMLprojectStart);

var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
$(".project-entry:last").append(formattedTitle);

var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
$(".project-entry:last").append(formattedDates);

var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
$(".project-entry:last").append(formattedDescription);
}
}
/*if(projects.projects[project].images.length>0){
for(image in projects.projects[project].images){
var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
$(".project-entry:last").append(formattedImage);
}
}*/

bio.display();
//education.display();
displayWork();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
/*education.display = function() {
for(school in education.schools) {
$("#education").append(HTMLschoolStart);
var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
}
$("#education").append(HTMLonlineClasses);
for (var course in education.onlineCourses) {
$("#education").append(HTMLschoolStart);
var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
var formattedonlineDate =
HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
}
};
