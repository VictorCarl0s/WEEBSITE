<script>
    function validateForm(event) {
        event.preventDefault();
        document.getElementById("nameError").style.display = "none";
        document.getElementById("emailError").style.display = "none";
        document.getElementById("messageError").style.display = "none";

        let isValid = true;

        const name = document.getElementById("name").value;
        if (!name) {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        }
        const email = document.getElementById("email").value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailRegex.test(email)) {
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        }
        const message = document.getElementById("message").value;
        if (!message) {
            document.getElementById("messageError").style.display = "block";
            isValid = false;
        }
        if (isValid) {
            alert("Formulário enviado com sucesso!");
        }
    }
</script>