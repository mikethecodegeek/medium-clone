window.addEventListener("DOMContentLoaded", (e) => {

    document.getElementById("like").addEventListener("click", (e) => {
        //another function here - should be in another file?
    });

    //submit button for comments?
    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        let userComment = document.getElementById("user-comment").value;
        comment(userComment); //comment function outside of evLis
    });
});

//assuming class is comments
function comment(string) { //must have string as param
    document.querySelector(".comments").innerHTML = ""; //check class name

    fetch("comments", { //class name here
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment: string,
        }),
    })
        .then((res) => res.json())
        .then((json) => {
            json.comments.forEach((comment) => {
                document.querySelector(
                    ".comments" //make sure class name is same
                )
            });
        });
}
