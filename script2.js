const firstDropdown = document.querySelector('#first-dropdown');
const secondDropdownContainer = document.querySelector('#second-dropdown-container');
const secondDropdown = document.querySelector('#second-dropdown');
const fields = document.querySelector('#fields');
const create_option = (value,tContent)=>{
    const option = document.createElement('option');
    option.value = value;
    option.textContent = tContent;
    secondDropdown.appendChild(option);
}
const create_marksinput =(value, tContent)=>{
    const label = document.createElement('label');
    label.for = value;
    const input = document.createElement('input');
    input.type = number;
    input.id = value;
    input.name = value;
    input.min ='0';
    input.max = '100';
    input.placeholder = `Enter your ${tContent} marks`

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
				fields.classList.add('hidden');
			} else {
				updateSecondDropdownOptions();
				secondDropdownContainer.classList.remove('hidden');
			}
		});
		
		secondDropdownContainer.addEventListener('change', () => {
			if (secondDropdown.value === '') {
				fields.classList.add('hidden');
			}
			else {
				fields.classList.remove('hidden');
			}
		});
