let email_display = document.getElementById("email");
let email_title = document.getElementById("title");
let email_sender = document.getElementById("sender");
let status_display = document.getElementById("status");
let score = document.getElementById("score");
let percent = document.getElementById("percent");

let points = 0;
let num_email = 1;


let fake_button = document.getElementById("fake_button");
let real_button = document.getElementById("real_button");

let random_num = 0;

next_email = function() {
    num_email += 1;
    let randomIdx = Math.random();
    randomIdx = randomIdx * emails.length;
    randomIdx = Math.floor(randomIdx);
    
    email_display.innerHTML = emails[randomIdx].content;
    email_title.innerHTML = emails[randomIdx].title;
    email_sender.innerHTML = emails[randomIdx].email;
    status_display.innerHTML = "";

    random_num = randomIdx;
}

updatepoints = function() {
    score.innerHTML = points + "/" + num_email;
    percent.innerHTML = (points*100/num_email).toFixed(0) + "%";
}

fake_button.onclick = function() {
    if (email_display.innerHTML == emails[0].content) {
        points += 1;
    }
    else if (emails[random_num].status_F_R == "Fake") {
        points += 1;
    }
    updatepoints();
    next_email();
}


real_button.onclick = function() {
    if (email_display.innerHTML == emails[0].content) {
        console.log("pass")
    }
    if (emails[random_num].status_F_R == "Real") {
        points += 1;
    }
    updatepoints();
    next_email();
}

email_display.innerHTML = emails[random_num].content;
email_title.innerHTML = emails[random_num].title;
email_sender.innerHTML = emails[random_num].email;
// status_display.innerHTML = emails[random_num].status_F_R;
status_display.innerHTML = "";

