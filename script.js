var mdiv = document.createElement('div');
mdiv.setAttribute('class', 'page');

var nameblock = document.createElement('div');
nameblock.setAttribute('class','nameblock');

var contactdetails = document.createElement('div');
contactdetails.setAttribute('class','contactdetails');

var e = document.createElement('div');
e.textContent = "e: vgurunathaprasad@gmail.com";

var s = document.createElement('div');
s.textContent = "s: www.gpvasudeva.io";

var p = document.createElement('div');
p.textContent = "p: 00987654321";

var t = document.createElement('div');
t.textContent = "e: t: @vgurunathaprasad";

var g = document.createElement('div');
g.textContent = "g: https://www.github.com/vgurunathaprasad";


contactdetails.appendChild(e);
contactdetails.appendChild(s);
contactdetails.appendChild(p);
contactdetails.appendChild(t);
contactdetails.appendChild(g);
nameblock.appendChild(contactdetails);

var nameg = document.createElement('div');
nameg.setAttribute('class','name');
nameg.textContent = "G P Vasudeva"
nameblock.appendChild(nameg);

var jobtitle = document.createElement('div');
jobtitle.setAttribute('class','jobtitle');
jobtitle.textContent = "Software Developer Senior";
nameblock.appendChild(jobtitle);
mdiv.appendChild(nameblock);


var profileblock = document.createElement('div');
profileblock.setAttribute('class','profileblock');

var profilelabel = document.createElement('div');
profilelabel.setAttribute('class','profilelabel');
profilelabel.textContent = "Personal Profile";
profileblock.appendChild(profilelabel);


var profiletext = document.createElement('div');
profiletext.setAttribute('class','profiletext');
profiletext.textContent = "Veniam a iusto consequuntur eum quaerat, temporibus neque earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem delectus voluptas ipsam sequi et vel accusantium veniam provident voluptatem, ducimus impedit ratione! Unde pariatur quis quae, dolorum fuga aspernatur!";


profileblock.appendChild(profiletext);
mdiv.appendChild(profileblock);


var workexpblock = document.createElement('div');
workexpblock.setAttribute('class','workexpblock');

var workexplabel = document.createElement('div');
workexplabel.setAttribute('class','workexplabel');
workexplabel.textContent = "Work Expirence";
workexpblock.appendChild(workexplabel);



//workexptext

var workexptext = document.createElement('div');
workexptext.setAttribute('class','workexptext');

var exp1 = document.createElement('div');
exp1.setAttribute('class','expirence');

var companyname1 = document.createElement('div');
companyname1.setAttribute('class','companyname');
companyname1.textContent = "BETA ipsum dollor";
exp1.appendChild(companyname1);

var timeperiod1 = document.createElement('div');
timeperiod1.setAttribute('class','timeperiod');
timeperiod1.textContent = "5678-9876";
exp1.appendChild(timeperiod1);

var expdet1 = document.createElement('div');
expdet1.setAttribute('class','details')
expdet1.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem libero atque unde. Accusantium consequatur repellendus vel ipsam! Aperiam, sit voluptas maxime consectetur nobis alias recusandae quaerat exercitationem dolor eaque. Quaerat."
exp1.appendChild(expdet1)

workexptext.appendChild(exp1);


var exp2 = document.createElement('div');
exp2.setAttribute('class','expirence');

var companyname2 = document.createElement('div');
companyname2.setAttribute('class','companyname');
companyname2.textContent = "BETA ipsum dollor";
exp2.appendChild(companyname2);

var timeperiod2 = document.createElement('div');
timeperiod2.setAttribute('class','timeperiod');
timeperiod2.textContent = "5678-9876";
exp2.appendChild(timeperiod2);

var expdet2 = document.createElement('div');
expdet2.setAttribute('class','details')
expdet2.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem libero atque unde. Accusantium consequatur repellendus vel ipsam! Aperiam, sit voluptas maxime consectetur nobis alias recusandae quaerat exercitationem dolor eaque. Quaerat."
exp2.appendChild(expdet2)

workexptext.appendChild(exp2);


var exp3 = document.createElement('div');
exp3.setAttribute('class','expirence');

var companyname3 = document.createElement('div');
companyname3.setAttribute('class','companyname');
companyname3.textContent = "BETA ipsum dollor";
exp3.appendChild(companyname3);

var timeperiod3 = document.createElement('div');
timeperiod3.setAttribute('class','timeperiod');
timeperiod3.textContent = "5678-9876";
exp3.appendChild(timeperiod3);

var expdet3 = document.createElement('div');
expdet3.setAttribute('class','details')
expdet3.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem libero atque unde. Accusantium consequatur repellendus vel ipsam! Aperiam, sit voluptas maxime consectetur nobis alias recusandae quaerat exercitationem dolor eaque. Quaerat."
exp3.appendChild(expdet3)

workexptext.appendChild(exp3);


//workexptext - end



workexptext.appendChild(exp1);
workexptext.appendChild(exp2);
workexptext.appendChild(exp3);

workexpblock.appendChild(workexptext);

mdiv.appendChild(workexpblock);
document.body.appendChild(mdiv);

var li1 = document.createElement('li');
li1.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
var li2 = document.createElement('li');
li2.textContent = "Distinctio incidunt inventore qui praesentium quia autem ut"
var li3 = document.createElement('li');
li3.textContent = "Placeat cumque commodi! Officia aut a in. Pariatur quos"
var li4 = document.createElement('li');
li4.textContent = "Odio perferendis corrupti error modi pariatur."
var li5 = document.createElement('li');
li5.textContent = "Cupiditate sequi cum eius excepturi, magni omnis necessitatibus"
var li6 = document.createElement('li');
li6.textContent = "Amet consectetur adipisicing elit. Ut quae labore "


var ull = document.createElement('ul');
ull.appendChild(li1);
ull.appendChild(li2);
ull.appendChild(li3);
ull.appendChild(li4);
ull.appendChild(li5);
ull.appendChild(li6);

var skillstext = document.createElement('div');
skillstext.setAttribute('class','skillstext');
skillstext.appendChild(ull);

var skillslabel = document.createElement('div');
skillslabel.setAttribute('class','skillslabel')
skillslabel.textContent = "Key Skills"

var skillsblock = document.createElement('div');
skillsblock.setAttribute('class','skillsblock');
skillsblock.appendChild(skillslabel);
skillsblock.appendChild(skillstext);

mdiv.appendChild(skillsblock);

var school1 = document.createElement('div');
school1.setAttribute('class','school');
school1.textContent = "BHTA University";
var degree1 = document.createElement('div')
degree1.setAttribute('class','degree');
degree1.textContent = "MSG (consectetur adipisicing)";
var details1 = document.createElement('div')
details1.setAttribute('class','details')
details1.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta aut similique minima iusto cum, ipsa, dolor qui eum obcaecati voluptas beatae error eius ea rerum voluptates doloremque harum. Perferendis, quaerat."

var edu1 = document.createElement('div');
edu1.setAttribute('class','education');
edu1.appendChild(school1);
edu1.appendChild(degree1);
edu1.appendChild(details1);


var educationtext = document.createElement('div');
educationtext.setAttribute('class','educationtext');
educationtext.appendChild(edu1);


//

var school2 = document.createElement('div');
school2.setAttribute('class','school');
school2.textContent = "BHTA University";
var degree2 = document.createElement('div')
degree2.setAttribute('class','degree');
degree2.textContent = "ASG (consectetur adipisicing)";
var details2 = document.createElement('div')
details2.setAttribute('class','details')
details2.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta aut similique minima iusto cum, ipsa, dolor qui eum obcaecati voluptas beatae error eius ea rerum voluptates doloremque harum. Perferendis, quaerat."

var edu2 = document.createElement('div');
edu2.setAttribute('class','education');
edu2.appendChild(school2);
edu2.appendChild(degree2);
edu2.appendChild(details2);



educationtext.appendChild(edu2);




//

var educationlabel = document.createElement('div')
educationlabel.setAttribute('class','educationlabel')
educationlabel.textContent = 'Education'




var educationblock = document.createElement('div')
educationblock.setAttribute('class','educationblock');

educationblock.appendChild(educationlabel);
educationblock.appendChild(educationtext);
mdiv.appendChild(educationblock);





