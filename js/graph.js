function svgInit () {
	var graphPaper = document.getElementById('graphPaper');
	graphPaper.setAttribute('width', 800);
	graphPaper.setAttribute('height', 600);
	graphPaper.setAttribute('style', 'border: 1px solid #ccc; margin-top: 1em;');
	graphPaper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	chartMath()
	
	function chartMath() {

	/* Week One Day One */
	var wk1day1Data = document.getElementById('wk1day1Data')
	var wk1day1Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day1text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day1text.setAttribute('x', 14.2857 - 9.4 + '%');
		wk1day1text.setAttribute('y', (99.5 - wk1day1Data.value) + '%'); 
		wk1day1text.setAttribute('fill', '#96E1FF');
		wk1day1text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day1textValue = document.createTextNode(wk1day1Data.value)
		wk1day1text.appendChild(wk1day1textValue);

		wk1day1Bar.setAttribute('x1', 14.2857 - 7.14285 + '%' );
		wk1day1Bar.setAttribute('y1', 100 + '%');
		wk1day1Bar.setAttribute('x2', 14.2857 - 7.14285 + '%' );
		wk1day1Bar.setAttribute('y2', (100 - wk1day1Data.value) + '%' );
		wk1day1Bar.setAttribute('stroke-width', 40);
		wk1day1Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day1Bar);
		graphPaper.appendChild(wk1day1text);

	/* Week One Day Two */
	var wk1day2Data = document.getElementById('wk1day2Data')
	var wk1day2Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day2text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day2text.setAttribute('x', 28.5714 - 9.4 + '%');
		wk1day2text.setAttribute('y', (99.5 - wk1day2Data.value) + '%'); 
		wk1day2text.setAttribute('fill', '#96E1FF');
		wk1day2text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day2textValue = document.createTextNode(wk1day2Data.value)
		wk1day2text.appendChild(wk1day2textValue);

		wk1day2Bar.setAttribute('x1', 28.5714 - 7.14285 + '%' );
		wk1day2Bar.setAttribute('y1', 100 + '%');
		wk1day2Bar.setAttribute('x2', 28.5714 - 7.14285 + '%' );
		wk1day2Bar.setAttribute('y2', (100 - wk1day2Data.value) + '%' );
		wk1day2Bar.setAttribute('stroke-width', 40);
		wk1day2Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day2Bar);
		graphPaper.appendChild(wk1day2text);

	/* Week One Day Three */
	var wk1day3Data = document.getElementById('wk1day3Data')
	var wk1day3Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day3text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day3text.setAttribute('x', 42.8571 - 9.4 + '%');
		wk1day3text.setAttribute('y', (99.5 - wk1day3Data.value) + '%'); 
		wk1day3text.setAttribute('fill', '#96E1FF');
		wk1day3text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day3textValue = document.createTextNode(wk1day3Data.value)
		wk1day3text.appendChild(wk1day3textValue);

		wk1day3Bar.setAttribute('x1', 42.8571 - 7.14285 + '%' );
		wk1day3Bar.setAttribute('y1', 100 + '%');
		wk1day3Bar.setAttribute('x2', 42.8571 - 7.14285 + '%' );
		wk1day3Bar.setAttribute('y2', (100 - wk1day3Data.value) + '%' );
		wk1day3Bar.setAttribute('stroke-width', 40);
		wk1day3Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day3Bar);
		graphPaper.appendChild(wk1day3text);
	
	/* Week One Day Four */
	var wk1day4Data = document.getElementById('wk1day4Data')
	var wk1day4Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day4text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day4text.setAttribute('x', 57.1428 - 9.4 + '%');
		wk1day4text.setAttribute('y', (99.5 - wk1day4Data.value) + '%'); 
		wk1day4text.setAttribute('fill', '#96E1FF');
		wk1day4text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day4textValue = document.createTextNode(wk1day4Data.value)
		wk1day4text.appendChild(wk1day4textValue);

		wk1day4Bar.setAttribute('x1', 57.1428 - 7.14285 + '%' );
		wk1day4Bar.setAttribute('y1', 100 + '%');
		wk1day4Bar.setAttribute('x2', 57.1428 - 7.14285 + '%' );
		wk1day4Bar.setAttribute('y2', (100 - wk1day4Data.value) + '%' );
		wk1day4Bar.setAttribute('stroke-width', 40);
		wk1day4Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day4Bar);
		graphPaper.appendChild(wk1day4text);

	/* Week One Day Five */
	var wk1day5Data = document.getElementById('wk1day5Data')
	var wk1day5Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day5text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day5text.setAttribute('x', 71.4285 - 9.4 + '%');
		wk1day5text.setAttribute('y', (99.5 - wk1day5Data.value) + '%'); 
		wk1day5text.setAttribute('fill', '#96E1FF');
		wk1day5text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day5textValue = document.createTextNode(wk1day5Data.value)
		wk1day5text.appendChild(wk1day5textValue);

		wk1day5Bar.setAttribute('x1', 71.4285 - 7.14285 + '%' );
		wk1day5Bar.setAttribute('y1', 100 + '%');
		wk1day5Bar.setAttribute('x2', 71.4285 - 7.14285 + '%' );
		wk1day5Bar.setAttribute('y2', (100 - wk1day5Data.value) + '%' );
		wk1day5Bar.setAttribute('stroke-width', 40);
		wk1day5Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day5Bar);
		graphPaper.appendChild(wk1day5text);

	/* Week One Day Six */
	var wk1day6Data = document.getElementById('wk1day6Data')
	var wk1day6Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day6text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day6text.setAttribute('x', 85.7142 - 9.4 + '%');
		wk1day6text.setAttribute('y', (99.5 - wk1day6Data.value) + '%'); 
		wk1day6text.setAttribute('fill', '#96E1FF');
		wk1day6text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day6textValue = document.createTextNode(wk1day6Data.value)
		wk1day6text.appendChild(wk1day6textValue);

		wk1day6Bar.setAttribute('x1', 85.7142 - 7.14285 + '%' );
		wk1day6Bar.setAttribute('y1', 100 + '%');
		wk1day6Bar.setAttribute('x2', 85.7142 - 7.14285 + '%' );
		wk1day6Bar.setAttribute('y2', (100 - wk1day6Data.value) + '%' );
		wk1day6Bar.setAttribute('stroke-width', 40);
		wk1day6Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day6Bar);
		graphPaper.appendChild(wk1day6text);

	/* Week One Day Seven */
	var wk1day7Data = document.getElementById('wk1day7Data')
	var wk1day7Bar = document.createElementNS('http://www.w3.org/2000/svg','line');
	var wk1day7text = document.createElementNS('http://www.w3.org/2000/svg','text');

		wk1day7text.setAttribute('x', 99.9999 - 9.4 + '%');
		wk1day7text.setAttribute('y', (99.5 - wk1day7Data.value) + '%'); 
		wk1day7text.setAttribute('fill', '#96E1FF');
		wk1day7text.setAttribute('style', 'font-weight: bold; font-size: 2em;');
		wk1day7textValue = document.createTextNode(wk1day7Data.value)
		wk1day7text.appendChild(wk1day7textValue);

		wk1day7Bar.setAttribute('x1', 99.9999 - 7.14285 + '%' );
		wk1day7Bar.setAttribute('y1', 100 + '%');
		wk1day7Bar.setAttribute('x2', 99.9999 - 7.14285 + '%' );
		wk1day7Bar.setAttribute('y2', (100 - wk1day7Data.value) + '%' );
		wk1day7Bar.setAttribute('stroke-width', 40);
		wk1day7Bar.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(wk1day7Bar);
		graphPaper.appendChild(wk1day7text);
	};

	/* Draws Lines across the graph - Would like to make this responsive to the numbers in the bars  */
	var segment1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		segment1.setAttribute('x1', 0 + '%' );
		segment1.setAttribute('y1', 25 + '%');
		segment1.setAttribute('x2', 100 + '%' );
		segment1.setAttribute('y2', 25 + '%' );
		segment1.setAttribute('stroke-width', 1);
		segment1.setAttribute('stroke', '#ddd');
		graphPaper.appendChild(segment1);

	var segment1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		segment1.setAttribute('x1', 0 + '%' );
		segment1.setAttribute('y1', 50 + '%');
		segment1.setAttribute('x2', 100 + '%' );
		segment1.setAttribute('y2', 50 + '%' );
		segment1.setAttribute('stroke-width', 1);
		segment1.setAttribute('stroke', '#ddd');
		graphPaper.appendChild(segment1);


	var segment1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		segment1.setAttribute('x1', 0 + '%' );
		segment1.setAttribute('y1', 75 + '%');
		segment1.setAttribute('x2', 100 + '%' );
		segment1.setAttribute('y2', 75 + '%' );
		segment1.setAttribute('stroke-width', 1);
		segment1.setAttribute('stroke', '#ddd');
		graphPaper.appendChild(segment1);
};

function reloadGraph() {
	location.reload(); 
}
