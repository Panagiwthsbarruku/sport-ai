document.addEventListener("DOMContentLoaded", function () {
    const responses = {
        "ποιά είναι η καλύτερη ομαδα": "Η καλύτερη ομάδα είναι υποκειμενική! Πολλοί λένε Ολυμπιακός, Παναθηναϊκός ή ΑΕΚ!",
        "ποιος ειναι ο μεσσι": "Ο Λιονέλ Μέσι είναι ένας από τους κορυφαίους ποδοσφαιριστές όλων των εποχών!",
        "ποιος ειναι ο ρονάλντο": "Ο Κριστιάνο Ρονάλντο είναι Πορτογάλος σταρ, με τεράστιες επιτυχίες!",
        "ποτε αρχιζει το euro": "Το επόμενο EURO ξεκινάει τον Ιούνιο του 2024!",
        "γειασου": "Γεια σου! Πώς μπορώ να βοηθήσω για ποδόσφαιρο;",
        "ποιο ειναι το καλυτερο γηπεδο": "Το Γουέμπλεϊ είναι ένα από τα πιο εμβληματικά γήπεδα στον κόσμο!",
        "ποιος ειναι ο καλύτερος προπονητης": "Ο Σερ Άλεξ Φέργκιουσον είναι θρυλικός προπονητής!",
        "ποιο ειναι το καλύτερο πρωταθλημα": "Η Premier League είναι το πιο ανταγωνιστικό πρωτάθλημα!",
        "ποιο ειναι το καλυτερο γκολ": "Το καλύτερο γκολ είναι υποκειμενικό! Πολλοί αναφέρουν το γκολ του Μαραντόνα το 1986!",
        "ποιο ειναι το καλυτερο ματς": "Το τελικό του Champions League 2005 είναι θρυλικό!",
        "ποια ειναι η καλυτερη εθνικη ομαδα": "Η Γερμανία και η Βραζιλία έχουν πολλές επιτυχίες σε Παγκόσμια Κύπελλα!",
        "ποιος ειναι ο καλυτερος τερματοφυλακας": "Ο Γιάννης Αρκεστίνος είναι ένας από τους καλύτερους τερματοφύλακες!",
        "ποιο ειναι το καλυτερο γκολφ": "Το γκολφ είναι ένα άθλημα που απαιτεί τεχνική και στρατηγική!",
        "μασούτης": "Αν και δεν έχει σχέση με το ποδόσφαιρο, ο Μασούτης είναι μια αλυσίδα σούπερ μάρκετ στην Ελλάδα!",
        "ποιος ειναι ο καλυτερος επιθετικος": "Ο Ρόναλντο και ο Μέσι είναι οι καλύτεροι επιθετικοί της εποχής μας!",
        "ποιος ειναι ο καλυτερος μεσος": "Ο Αντρές Ινιέστα και ο Τσάβι είναι θρυλικοί μέσοι!",
        "ποιος ειναι ο καλυτερος αμυντικος": "Ο Φραντς Μπεκενμπάουερ είναι θρυλικός αμυντικός!"
    };

    function typeWriterEffect(element, text, speed = 40) {
        let index = 0;
        element.innerHTML = "";
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    function respondToQuestion(input) {
        const question = input.toLowerCase().trim();
        const responseElement = document.getElementById("response");
        const reply = responses[question] || "Συγγνώμη, δεν γνωρίζω την απάντηση σε αυτό. Ρώτησέ με κάτι άλλο για ποδόσφαιρο!";
        typeWriterEffect(responseElement, reply);
    }

    // Όταν πατάει ο χρήστης το κουμπί αναζήτησης
    document.querySelector(".search-box button").addEventListener("click", function () {
        const input = document.getElementById("question").value;
        respondToQuestion(input);
    });

    // Όταν πατιέται κάποιο κουμπί από τις έτοιμες ερωτήσεις
    const suggestedButtons = document.querySelectorAll(".suggested-questions button");
    suggestedButtons.forEach(button => {
        button.addEventListener("click", function () {
            const text = this.textContent;
            document.getElementById("question").value = text;
            respondToQuestion(text);

            document.querySelector(".suggested-questions").style.display = "none";
        });
    });
});
