function init () {
	var graphPaper = document.getElementById('graphPaper');

	var resizer = document.getElementById('resizer')
		graphPaper.setAttribute('width', resizer.value);
		graphPaper.setAttribute('height', resizer.value * .75);

	function resizer() {
		var resizer = document.getElementById('resizer')
		graphPaper.setAttribute('width', resizer.value);
		graphPaper.setAttribute('height', resizer.value * .75);
	}

	graphPaper.setAttribute('style', 'border: 1px solid #666; margin: 1em;');
	graphPaper.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	var zoom = document.getElementById('zoom');

	for (var i = 0; i < 100; i++) {

		var svgLine1 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine1.setAttribute('x1', 0 + '%');
		svgLine1.setAttribute('y1', 100 - (i * zoom.value * .75) + '%');
		svgLine1.setAttribute('x2', 0 + (i * zoom.value) + '%');
		svgLine1.setAttribute('y2', 100 + '%');
		svgLine1.setAttribute('stroke-width', 1);
		svgLine1.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine1);
	};

	for (var i = 0; i < 100; i++) {
	var svgLine2 = document.createElementNS('http://www.w3.org/2000/svg','line');
		svgLine2.setAttribute('x1', 0 + (i * zoom.value) + '%');
		svgLine2.setAttribute('y1', 0 + '%');
		svgLine2.setAttribute('x2', 0 + '%');
		svgLine2.setAttribute('y2', 0 + (i * zoom.value  * .75) + '%');
		svgLine2.setAttribute('stroke-width', 1);
		svgLine2.setAttribute('stroke', '#96E1FF');
		graphPaper.appendChild(svgLine2);
	};
};

function makePipe() {
	var pipe = document.createElementNS('http://www.w3.org/2000/svg','line');
	pipe.setAttribute('x1', 0 + '%');
	pipe.setAttribute('y1', 25 + '%');
	pipe.setAttribute('x2', 100 + '%');
	pipe.setAttribute('y2', 100 + '%');
	pipe.setAttribute('stroke-width', 1);
	pipe.setAttribute('stroke', '#000');
	graphPaper.appendChild(pipe);
	alert('hello');
}

function reload() {
		location.reload();
	};

