function init () {
	var graphPaper = document.getElementById('graphPaper');
	var graphWidth = 1000
		graphPaper.setAttribute('width', graphWidth);
		graphPaper.setAttribute('height', graphWidth * .55);


	graphPaper.setAttribute('style', 'border: 1px solid #666; margin: 1em;');
	graphPaper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');


	/* GRIDLINES */
	for (var i = 0; i < 10; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 0 + '%');
		svgLine1.setAttribute('y1', 0 + 10 * i + '%');
		svgLine1.setAttribute('x2', 100 + '%');
		svgLine1.setAttribute('y2', 100 - (i * -10)  + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine1);
	};

	for (var i = 0; i < 10; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 0 + '%');
		svgLine1.setAttribute('y1', 0 - 10 * i + '%');
		svgLine1.setAttribute('x2', 100 + '%');
		svgLine1.setAttribute('y2', 100 - (i * 10)  + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine1);
	};


	for (var i = 0; i < 10; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', -10 * i + '%');
		svgLine1.setAttribute('y1', 100 + '%');
		svgLine1.setAttribute('x2', 100 + '%');
		svgLine1.setAttribute('y2', -10 * i + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine1);
	};

	for (var i = 0; i < 10; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 10 * i + '%');
		svgLine1.setAttribute('y1', 100 + '%');
		svgLine1.setAttribute('x2', 100 + '%');
		svgLine1.setAttribute('y2', 10 * i + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine1);
	};


	for (var i = 0; i < 20; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 5 * i +'%');
		svgLine1.setAttribute('y1', 0 + '%');
		svgLine1.setAttribute('x2', 5 * i  + '%');
		svgLine1.setAttribute('y2', 100 + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#D6F3FF');
		graphPaper.appendChild(svgLine1);
	};


	/* PIPES */

	/* Sets line color and thickness */
	var lineColor = '#444';
	var lineWidth = 1;


	for (var i = 0; i < 1; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 50 + '%');
		svgLine1.setAttribute('y1', 60 + '%');
		svgLine1.setAttribute('x2', 60 + '%');
		svgLine1.setAttribute('y2', 50 + '%');
		svgLine1.setAttribute('stroke-width', lineWidth);
		svgLine1.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine1);
	};

	for (var i = 0; i < 1; i++) {

		var svgLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine2.setAttribute('x1', 40 + '%');
		svgLine2.setAttribute('y1', 50 + '%');
		svgLine2.setAttribute('x2', 50 + '%');
		svgLine2.setAttribute('y2', 60 + '%');
		svgLine2.setAttribute('stroke-width', lineWidth);
		svgLine2.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine2);
	};

	for (var i = 0; i < 1; i++) {

		var svgLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine3.setAttribute('x1', 40 + '%');
		svgLine3.setAttribute('y1', 50 + '%');
		svgLine3.setAttribute('x2', 50 + '%');
		svgLine3.setAttribute('y2', 40 + '%');
		svgLine3.setAttribute('stroke-width', lineWidth);
		svgLine3.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine3);
	};

	for (var i = 0; i < 1; i++) {

		var svgLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine3.setAttribute('x1', 50 + '%');
		svgLine3.setAttribute('y1', 40 + '%');
		svgLine3.setAttribute('x2', 60 + '%');
		svgLine3.setAttribute('y2', 50 + '%');
		svgLine3.setAttribute('stroke-width', lineWidth);
		svgLine3.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine3);
	};

	for (var i = 0; i < 1; i++) {

		var svgLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine3.setAttribute('x1', 40+ '%');
		svgLine3.setAttribute('y1', 50 + '%');
		svgLine3.setAttribute('x2', 40 + '%');
		svgLine3.setAttribute('y2', 100 + '%');
		svgLine3.setAttribute('stroke-width', lineWidth);
		svgLine3.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine3);
	};

	for (var i = 0; i < 1; i++) {

		var svgLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine3.setAttribute('x1', 60 + '%');
		svgLine3.setAttribute('y1', 50 + '%');
		svgLine3.setAttribute('x2', 60 + '%');
		svgLine3.setAttribute('y2', 100 + '%');
		svgLine3.setAttribute('stroke-width', lineWidth);
		svgLine3.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine3);
	};

	

	for (var i = 0; i < 1; i++) {

		var svgLine3 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine3.setAttribute('x1', 50 + '%');
		svgLine3.setAttribute('y1', 60 + '%');
		svgLine3.setAttribute('x2', 50 + '%');
		svgLine3.setAttribute('y2', 100 + '%');
		svgLine3.setAttribute('stroke-width', lineWidth);
		svgLine3.setAttribute('stroke', lineColor);
		graphPaper.appendChild(svgLine3);
	};


};


function reload() {
		location.reload();
	};

