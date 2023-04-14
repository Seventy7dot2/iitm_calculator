const form = document.querySelector('#marks-form');
const resultTable = document.querySelector('#result table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page

  const name = form.elements.name.value;
  const subject = form.elements.subject.value;
  const ga = parseInt(form.elements.ga.value);
  const qz1 = parseInt(form.elements.qz1.value);
  const qz2 = parseInt(form.elements.qz2.value);

  const num = (40 - ((0.1*ga)+(0.2*qz1)+(0.3*qz2)))/0.4;
  const moreMarks = num<=0?"Already Passed" : num.toFixed(2);
    console.log(moreMarks)
  const row = document.createElement('tr');
  const subjectCell = document.createElement('td');
  const gaCell = document.createElement('td');
  const qz1Cell = document.createElement('td');
  const qz2Cell = document.createElement('td');
  const moreMarksCell = document.createElement('td');

  subjectCell.textContent = subject;
  gaCell.textContent = ga;
  qz1Cell.textContent = qz1;
  qz2Cell.textContent = qz2;
  moreMarksCell.textContent = moreMarks;

  row.appendChild(subjectCell);
  row.appendChild(gaCell);
  row.appendChild(qz1Cell);
  row.appendChild(qz2Cell);
  row.appendChild(moreMarksCell);

  resultTable.appendChild(row);

  form.reset();
  document.querySelector('#result').style.display = 'block';
});
