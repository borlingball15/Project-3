// script.js

document.body.style.fontFamily = 'Helvetica Neue, sans-serif';

// form element
const quizForm = document.getElementById('quizForm');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!');

    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const coldFrequency = document.getElementById('coldFrequency').value;
    const treatments = Array.from(document.querySelectorAll('input[name="treatments"]:checked')).map(input => input.value);
    const eatingHabits = document.getElementById('eatingHabits').value;
    const exerciseFrequency = document.getElementById('exerciseFrequency').value;
    const antibioticTreatments = document.getElementById('antibioticTreatments').value;
    const antibioticsKnowledge = document.getElementById('antibioticsKnowledge').value;

    // Store the values 
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('coldFrequency', coldFrequency);
    localStorage.setItem('treatments', JSON.stringify(treatments));
    localStorage.setItem('eatingHabits', eatingHabits);
    localStorage.setItem('exerciseFrequency', exerciseFrequency);
    localStorage.setItem('antibioticTreatments', antibioticTreatments);
    localStorage.setItem('antibioticsKnowledge', antibioticsKnowledge);


    // redirection
    window.location.href = 'results.html';
});
