function include(file,loc='body',defer=false) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = defer;
    document.getElementsByTagName(loc).item(0).appendChild(script);
}
function includecss(file,rel="stylesheet") {
    const link = document.createElement('link');
    link.href = file;
    link.type = 'text/css';
    link.rel = rel;
    link.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(link);
}
include('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js','head');
includecss('./static/css/materialize.min.css');
includecss('https://fonts.googleapis.com/icon?family=Material+Icons');
includecss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
includecss('./static/css/style.css');

var chatbothtml = `
<!-- Modal for rendering the charts, declare this if you want to render charts, 
else you remove the modal -->
<div id="modal1" class="modal">
<canvas id="modal-chart"></canvas>
</div>

<!--chatbot widget -->
<div class="widget">
<div class="chat_header">
 <!--Add the name of the bot here -->
 <span class="chat_header_title">Sara</span>
 <span class="dropdown-trigger" href="#" data-target="dropdown1">
   <i class="material-icons"> more_vert </i>
 </span>

 <!-- Dropdown menu-->
 <ul id="dropdown1" class="dropdown-content">
   <li><a href="#" id="clear">Clear</a></li>
   <li><a href="#" id="restart">Restart</a></li>
   <li><a href="#" id="close">Close</a></li>
 </ul>
</div>

<!--Chatbot contents goes here -->
<div class="chats" id="chats">
 <div class="clearfix"></div>
</div>

<!--keypad for user to type the message -->
<div class="keypad">
 <textarea
   id="userInput"
   placeholder="Type a message..."
   class="usrInput"
 ></textarea>
 <div id="sendButton">
   <i class="fa fa-paper-plane" aria-hidden="true"></i>
 </div>
</div>
</div>

<!--bot profile-->
<div class="profile_div" id="profile_div">
<img class="imgProfile" src="static/img/botAvatar.png" />
</div>

<!-- Bot pop-up intro -->
<div class="tap-target" data-target="profile_div">
<div class="tap-target-content">
 <h5 class="white-text">Hey there 👋</h5>
 <p class="white-text">
   I can help you get started with Rasa and answer your technical
   questions.
 </p>
</div>
</div>
`;

document.getElementById('chatbot').innerHTML = chatbothtml;

include('./static/js/lib/materialize.min.js');
include('./static/js/lib/uuid.min.js');
include('./static/js/script.js','body',true);
include('./static/js/lib/chart.min.js');
include('./static/js/lib/showdown.min.js');
