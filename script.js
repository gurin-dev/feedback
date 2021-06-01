function feedbackButton() {
    let feedForm = document.getElementById("feedback__list");
    if (feedForm.classList.contains("show__feedback") == true) {
        feedForm.classList.remove("show__feedback");
    }
    else {feedForm.classList.add("show__feedback");}
}