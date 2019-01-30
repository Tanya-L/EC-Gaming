$('#play').click(
    function () {
        localStorage.removeItem("level");
        window.location.href = "questions.html";
    });

