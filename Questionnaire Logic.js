document.getElementById('assessment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve user responses
  const q1 = parseInt(document.getElementById('q1').value);
  // Add more questions here

  // Calculate total score
  const totalScore = q1 /* + ... */;

  // Display assessment results masege
  let message;
  if (totalScore >= 0 && totalScore < 20) {
    message = "Your digital habits seem healthy! Keep up the good work.";
  } else if (totalScore >= 20 && totalScore < 40) {
    message = "There is room for improvement in some areas of your digital habits.";
  } else {
    message = "Your digital habits may be negatively impacting your well-being. Consider making changes.";
//finally run (results)
  }
  document.getElementById('results').textContent = message;
});
