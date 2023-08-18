//your JS code here. If required.
 document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            const ageInput = document.getElementById("age");
            const nameInput = document.getElementById("name");
            
            const age = parseInt(ageInput.value);
            const name = nameInput.value;
            
            if (isNaN(age) || name === "") {
                alert("Please fill in all fields.");
                return;
            }
            
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // Resolve/reject after 4 seconds
            });
            
            promise
                .then(message => {
                    alert(message);
                })
                .catch(message => {
                    alert(message);
                });
        });