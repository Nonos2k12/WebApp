// Fonction pour afficher ou non les champs email et téléphone du formulaire
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