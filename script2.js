const firstDropdown = document.querySelector('#first-dropdown');
const secondDropdownContainer = document.querySelector('#second-dropdown-container');
const secondDropdown = document.querySelector('#second-dropdown');
const fields = document.querySelector('#fields');
const calc = document.querySelector('#calc');
const create_option = (value,tContent)=>{
    const option = document.createElement('option');
    option.value = value;
    option.textContent = tContent;
    secondDropdown.appendChild(option);
}
const create_marksinput =(value, tContent)=>{
    const label = document.createElement('label');
    label.for = value;
	label.innerHTML = `${tContent}:`;
    const input = document.createElement('input');
    input.type = 'number';
    input.id = value;
    input.name = value;
    input.min ='0';
    input.max = '100';
    input.placeholder = `Enter your ${tContent} marks`;
	input.setAttribute('required', '');
	// input.setAttribute('required');
	fields.appendChild(label);
	fields.appendChild(input);

}
		const updateSecondDropdownOptions = () => {
			secondDropdown.innerHTML="";
			if (firstDropdown.value === 'foundation') {
				create_option('','Select an option');
                create_option('stats1','Statistics-1');
                create_option('maths1','Mathematics-1');
                create_option('ct','Computational Thinking');
                create_option('eng1','English-1');
                create_option('stats2','Statistics-2');
                create_option('maths2','Mathematics-2');
                create_option('python','Python');
                create_option('eng2','English-2');
			}
			else if(firstDropdown.value === 'diploma'){
				create_option('','Select an option');
				create_option('cs2001','Database Management Systems');
				create_option('cs2002','Programming, Data Structures and Algorithms using Python');
				create_option('cs2003','Modern Application Development I');
				create_option('cs2004','Machine Learning Foundations');
				create_option('cs2005','Programming Concepts using Java');
				create_option('cs2006','Modern Application Development II');
				create_option('cs2007','Machine Learning Techniques');
				create_option('cs2008','Machine Learning Practice');
				create_option('ms2001','Business Data Management');
				create_option('ms2001','Business Analytics');
				create_option('se2001','System Commands');
				create_option('se2002','Tools in Data Science');
			}
			else if (firstDropdown.value === 'degree') {
				create_option('','Select an option');
                create_option('cs3001','Software Testing');
                create_option('cs3002','Software Engineering');
                create_option('cs3003','AI: Search Methods for Problem Solving');
                create_option('cs3004','Deep Learning');
                create_option('ee4001','Speech Technology');
                create_option('gn3001','Strategies for Professional Growth');
                create_option('ms3001','Design Thinking for Data-Driven App Development');
                create_option('ms4001','Industry 4.0');
                create_option('cs3007','Privacy & Security in Online Social Media');
                create_option('bt4001','Algorithmic Thinking in Bioinformatics');
                create_option('bt4002','Big Data and Biological Networks');
                create_option('gn3002','Financial Forensics');
                create_option('cs3006','Introduction to Big Data');
                create_option('cs4001','Data visualization');
                create_option('ms3002','Market Research');
                create_option('ma3001','Linear Statistical Models');	
				
			}
		};

		firstDropdown.addEventListener('change', () => {
			if (firstDropdown.value === '') {
				secondDropdownContainer.classList.add('hidden');
				calc.classList.add('hidden');
			} else {
				updateSecondDropdownOptions();
				secondDropdownContainer.classList.remove('hidden');
			}
		});
		
		secondDropdownContainer.addEventListener('change', () => {
			if (secondDropdown.value === '') {
				calc.innerHTML='';
				calc.classList.add('hidden');
			}
			else if(secondDropdown.value === 'stats1' || secondDropdown.value === 'maths1'  || secondDropdown.value === 'ct'  || secondDropdown.value === 'eng1'
			|| secondDropdown.value === 'stats2'  || secondDropdown.value === 'maths2'  || secondDropdown.value === 'eng2' || secondDropdown.value === 'cs2004'
			|| secondDropdown.value === 'cs2003' || secondDropdown.value === 'cs2007'){
				fields.innerHTML='';
				create_marksinput('ga','Average Graded Assignment');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('qz2','Quiz 2');
				calc.classList.remove('hidden');
			}
			else if(secondDropdown.value === 'python'){
				fields.innerHTML='';
				create_marksinput('ga','Average Graded Assignment');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('pe1','OPPE 1');
				create_marksinput('pe2','OPPE 2');
				calc.classList.remove('hidden');
			}
			else if(secondDropdown.value === 'cs2002' || secondDropdown.value === 'cs2001'){
				fields.innerHTML='';
				create_marksinput('ga','Average Graded Assignment');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('qz2','Quiz 2');
				create_marksinput('ope','OPE');
				calc.classList.remove('hidden');
			}
			else if(secondDropdown.value === 'cs2005' || secondDropdown.value === 'cs2008'){
				fields.innerHTML='';
				create_marksinput('ga','Average Graded Assignment');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('qz2','Quiz 2');
				create_marksinput('pe1','OPPE 1');
				create_marksinput('pe2','OPPE 2');
				calc.classList.remove('hidden');
			}
			else if(secondDropdown.value === 'se2001'){
				fields.innerHTML='';
				create_marksinput('ga1','Average Graded Assignment 1');
				create_marksinput('ga2','Average Graded Assignment 2');
				create_marksinput('ga3','Average Graded Assignment 3');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('qz2','Quiz 2');
				create_marksinput('pe1','OPPE 1');
				create_marksinput('pe2','OPPE 2');
				calc.classList.remove('hidden');
			}
			
			else if(secondDropdown.value === 'cs2006'){
				fields.innerHTML='';
				create_marksinput('ga1','Average Graded Assignment');
				create_marksinput('ga2','Average Programming Assignment');
				create_marksinput('qz1','Quiz 1');
				create_marksinput('qz2','Quiz 2');
				calc.classList.remove('hidden');
			}

			
			else if(secondDropdown.value === 'se2002'){
				fields.innerHTML='';
				create_marksinput('ga','Average Graded Assignment');
				create_marksinput('roe1','Remote Online Exam');
				create_marksinput('pe1','OPPE 1');
				create_marksinput('pe2','OPPE 2');
				calc.classList.remove('hidden');
			}
			
			
			else {
				fields.innerHTML='';
				calc.classList.remove('hidden');
			}
		});
