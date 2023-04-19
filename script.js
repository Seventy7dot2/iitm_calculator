const form = document.querySelector('#marks-form');
const resultTable = document.querySelector('#result table tbody');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  if (secondDropdown.value === 'stats1' || secondDropdown.value === 'maths1' || secondDropdown.value === 'ct' || secondDropdown.value === 'eng1'
    || secondDropdown.value === 'stats2' || secondDropdown.value === 'maths2' || secondDropdown.value === 'eng2' || secondDropdown.value === 'cs2004'
  ) {
    const subject = secondDropdown.value;
    const ga = parseInt(form.elements.ga.value);
    const qz1 = parseInt(form.elements.qz1.value);
    const qz2 = parseInt(form.elements.qz2.value);

    let arr = [0, 0, 0, 0, 0, 0]
    for (let i = 0, j = 40; i < arr.length; i++, j += 10) {
      const num1 = (j - ((0.1 * ga) + (0.2 * qz1) + (0.3 * qz2))) / 0.4;
      const num2 = (j - ((0.1 * ga) + (0.2 * (Math.max(qz1, qz2))))) / 0.6;
      if (num1 < num2) {
        if (num1 <= 100) {
          arr[i] = num1 <= 0 ? "Already Passed" : num1.toFixed(2);;
        }
        else {
          arr[i] = "not possible"
        }
      }
      else {
        if (num2 <= 100) {
          arr[i] = num2 <= 0 ? "Already Passed" : num2.toFixed(2);;
        }
        else {
          arr[i] = "not possible"
        }
      }
    }
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const moreMarksCell = document.createElement('td');
    const SCell = document.createElement('td');
    const ACell = document.createElement('td');
    const BCell = document.createElement('td');
    const CCell = document.createElement('td');
    const DCell = document.createElement('td');

    subjectCell.textContent = subject;
    moreMarksCell.textContent = arr[0];
    SCell.textContent = arr[5];
    ACell.textContent = arr[4];
    BCell.textContent = arr[3];
    CCell.textContent = arr[2];
    DCell.textContent = arr[1];

    row.appendChild(subjectCell);
    row.appendChild(SCell);
    row.appendChild(ACell);
    row.appendChild(BCell);
    row.appendChild(CCell);
    row.appendChild(DCell);
    row.appendChild(moreMarksCell);

    resultTable.appendChild(row);

    form.reset();
    document.querySelector('#result').style.display = 'block';
  }
  else if (secondDropdown.value === 'python') {
    const subject = secondDropdown.value;
    const ga = parseInt(form.elements.ga.value);
    const qz1 = parseInt(form.elements.qz1.value);
    const pe1 = parseInt(form.elements.pe1.value);
    const pe2 = parseInt(form.elements.pe2.value);

    let arr = [0, 0, 0, 0, 0, 0]
    for (let i = 0, j = 40; i < arr.length; i++, j += 10) {
      const num1 = (j - ((0.1 * ga) + (0.1 * qz1) + (0.3 * (Math.max(pe1, pe2))) + (0.1 * (Math.min(pe1, pe2))))) / 0.4;
      const num2 = (j - ((0.1 * ga) + (0.1 * qz1) + (0.2 * (Math.max(pe1, pe2))))) / 0.5;
      if (num1 < num2) {
        if (num1 <= 100) {
          arr[i] = num1 <= 0 ? "Already Passed" : num1.toFixed(2);;
        }
        else {
          arr[i] = "not possible"
        }
      }
      else {
        if (num2 <= 100) {
          arr[i] = num2 <= 0 ? "Already Passed" : num2.toFixed(2);;
        }
        else {
          arr[i] = "not possible"
        }
      }
    }
    const row = document.createElement('tr');
    const subjectCell = document.createElement('td');
    const moreMarksCell = document.createElement('td');
    const SCell = document.createElement('td');
    const ACell = document.createElement('td');
    const BCell = document.createElement('td');
    const CCell = document.createElement('td');
    const DCell = document.createElement('td');

    subjectCell.textContent = subject;
    moreMarksCell.textContent = arr[0];
    SCell.textContent = arr[5];
    ACell.textContent = arr[4];
    BCell.textContent = arr[3];
    CCell.textContent = arr[2];
    DCell.textContent = arr[1];

    row.appendChild(subjectCell);
    row.appendChild(SCell);
    row.appendChild(ACell);
    row.appendChild(BCell);
    row.appendChild(CCell);
    row.appendChild(DCell);
    row.appendChild(moreMarksCell);

    resultTable.appendChild(row);

    form.reset();
    document.querySelector('#result').style.display = 'block';
  }
  calc.classList.add('hidden');
});
