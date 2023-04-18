const form = document.querySelector('#marks-form');
const resultTable = document.querySelector('#result table tbody');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  if (secondDropdown.value === 'stats1' || secondDropdown.value === 'maths1' || secondDropdown.value === 'ct' || secondDropdown.value === 'eng1'
    || secondDropdown.value === 'stats2' || secondDropdown.value === 'maths2' || secondDropdown.value === 'eng2' || secondDropdown.value === 'cs2004'
    ) {
    const name = form.elements.name.value;
    const subject = secondDropdown.value;
    const ga = parseInt(form.elements.ga.value);
    const qz1 = parseInt(form.elements.qz1.value);
    const qz2 = parseInt(form.elements.qz2.value);

    const num1 = (40 - ((0.1 * ga) + (0.2 * qz1) + (0.3 * qz2))) / 0.4;
    const num2 = (40 - ((0.1 * ga) + (0.2 * (Math.max(qz1, qz2))))) / 0.6
    if (num1 < num2) {
      var moreMarks = num1 <= 0 ? "Already Passed" : num1.toFixed(2);
    }
    else {
      var moreMarks = num2 <= 0 ? "Already Passed" : num2.toFixed(2);
    }
    console.log(moreMarks)
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const moreMarksCell = document.createElement('td');

    subjectCell.textContent = subject;
    moreMarksCell.textContent = moreMarks;

    row.appendChild(subjectCell);
    row.appendChild(moreMarksCell);
    
    resultTable.appendChild(row);
    
    form.reset();
    document.querySelector('#result').style.display = 'block';
  }
  else if (secondDropdown.value === 'python') {
    const name = form.elements.name.value;
    const subject = secondDropdown.value;
    const ga = parseInt(form.elements.ga.value);
    const qz1 = parseInt(form.elements.qz1.value);
    const pe1 = parseInt(form.elements.pe1.value);
    const pe2 = parseInt(form.elements.pe2.value);
    
    const num1 = (40 - ((0.1 * ga) + (0.1 * qz1) + (0.3 * (Math.max(pe1, pe2))) + (0.1 * (Math.min(pe1, pe2))))) / 0.4;
    const num2 = (40 - ((0.1 * ga) + (0.1 * qz1) + (0.2 * (Math.max(pe1, pe2))))) / 0.5;
    if (num1 < num2) {
      var moreMarks = num1 <= 0 ? "Already Passed" : num1.toFixed(2);
    }
    else {
      var moreMarks = num2 <= 0 ? "Already Passed" : num2.toFixed(2);
    }
    console.log(moreMarks)
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const moreMarksCell = document.createElement('td');
    
    subjectCell.textContent = subject;
    moreMarksCell.textContent = moreMarks;
    
    row.appendChild(subjectCell);
    row.appendChild(moreMarksCell);

    resultTable.appendChild(row);

    form.reset();
    document.querySelector('#result').style.display = 'block';
  }
  calc.classList.add('hidden');
});
