//JQ
$(document).ready(function () {
    var coll = document.getElementsByClassName("collapsible");

    $("#headerPadding").click(function () {
        document.getElementById('contentStart').scrollIntoView({
            behavior: 'smooth'
        });
    });

    /// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
