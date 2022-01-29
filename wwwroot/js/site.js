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

$(document).ready(function () {
    $('#txtDemande').on('change', function () {
        if (this.value == 'Téléphone') {
            $("#telephone").show();
            $("#email").hide();
        }
        else if (this.value == 'Email') {
            $("#email").show();
            $("#telephone").hide();
        }
        else if (this.value == 'Site') {
            $("#email").hide();
            $("#telephone").hide();
        }
    });
});

let saveFile = () => {
    // Get the data from each element on the form.
    const nom = document.getElementById("txtNom");
    const prenom = document.getElementById("txtPrenom");
    const email = document.getElementById("txtEmail");
    const societe = document.getElementById("txtSociete");
    const date = document.getElementById("txtDate");
    const demande = document.getElementById("txtDemande");
    const telephone = document.getElementById("txtTelephone");
    const userId = document.getElementById("txtUserId");

    // This variable stores all the data.
    let data = "Nom: " + nom.value + " \r\n " + "Prenom: " + prenom.value + " \r\n " + "Email: " + email.value + " \r\n " + "Telephone: " + telephone.value + " \r\n " + "Société: " + societe.value + " \r\n " + "Type de demande: " + demande.value + " \r\n " + "Date: " + date.value + " \r\n " + "UserId: " + userId.value;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    //var filename = new Date();
    /*var month = new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();*/

    //newdate = year + "/" + month + "/" + day;
    //const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = societe.value + " " + date.value;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};