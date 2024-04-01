//your JS code here. If required.
 // Function to update the timer
        function updateTimer() {
            // Get the current date and time
            const now = new Date();

            // Format the date and time
            const dateStr = now.toLocaleDateString();
            const timeStr = now.toLocaleTimeString();

            // Display the date and time in the timer element
            const timerElement = document.getElementById('timer');
            timerElement.textContent = `${dateStr}, ${timeStr}`;
        }

        // Update the timer immediately
        updateTimer();

        // Update the timer every second
        setInterval(updateTimer, 1000);