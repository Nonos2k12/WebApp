// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*$(document).ready(function () {
    $("#contact").click(function () {
        if ($(this).val() == "email") {
            $("#email").show();
        }
        else if ($(this).val() == "telephone") {
            $("#telephone").show();
        }
        else {
            $("#email").hide();
            $("#telephone").hide();
        }
    });
});
$(document).ready(function () {
    $('#contactChoice1').click(function () {
        //$('#email').show();
        $('#email').css('visibility', 'visible');
    });
    $('#contactChoice2').click(function () {
        //$('#telephone').show();
        $('#telephone').css('visibility', 'visible');
    });
});

function showInputEmail() {
    $('#email').css('visibility', 'visible');
}*/

let saveFile = () => {
    // Get the data from each element on the form.
    const nom = document.getElementById("txtNom");
    const prenom = document.getElementById("txtPrenom");
    const email = document.getElementById("txtEmail");
    const societe = document.getElementById("txtSociete");
    const date = document.getElementById("txtDate");

    // This variable stores all the data.
    let data = "\r Nom: " + nom.value + " \r\n " + "Prenom: " + prenom.value + " \r\n " + "Email: " + email.value + " \r\n " + "Société: " + societe.value + " \r\n " + "Date: " + date.value;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    console.log(societe.value);
    var filename = societe.value + " " + new Date().toLocaleString();
    var month = new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};