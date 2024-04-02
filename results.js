// collecting the values
const age = parseInt(localStorage.getItem('age'));
const gender = localStorage.getItem('gender');
const antibioticTreatments = localStorage.getItem('antibioticTreatments');

// background color for html
let backgroundColor;
if (age < 10) {
    backgroundColor = 'yellow';
} else if (age < 21) {
    backgroundColor = 'orange';
} else if (age < 30) {
    backgroundColor = '#D22B2B';
} else if (age < 60) {
    backgroundColor = 'pink';
} else {
    backgroundColor = 'purple';
}
document.body.style.backgroundColor = backgroundColor;

// gender and color
let textColor;
if (gender === 'female') {
    textColor = '#E30B5C';
} else if (gender === 'male') {
    textColor = '#0047AB';
} else {
    textColor = 'lightgreen';
}
document.body.style.color = textColor;
document.body.style.fontFamily = 'Helvetica Neue, sans-serif';

// personalized message
const resultsContainer = document.getElementById('resultsContainer');
if (antibioticTreatments === 'Yes') {
    resultsContainer.innerHTML += '<p style="font-style: italic; text-decoration: underline;  font-size: 50px;text-align: center;">You need to be more mindful about your immune system. Try to incorporate natural sources of vitamins.</p>';
} else if (antibioticTreatments.toLowerCase() === 'no') {
    resultsContainer.innerHTML += '<p style="font-style: italic; text-decoration: underline; font-size: 50px; text-align: center;">Good job in staying healthy! Make sure you keep your immune system in check!</p>';
} else {
    resultsContainer.innerHTML += '<p style="font-style: italic; text-decoration: underline; font-size: 50px; text-align: center;">You must research on the effects of antibiotics on our immune system. Try to not rely on it by making healthier choices, both mentally and physically.</p>';
}

// defauly text 
const defaultText = `
    <h1 style="text-align: center; font-size: 100px; ">Thank you for filling out the form!</h1>
    <p style="text-align: center; font-size: 70px; ">Based on your results, it appears that...</p>
`;
resultsContainer.innerHTML = defaultText + resultsContainer.innerHTML;
