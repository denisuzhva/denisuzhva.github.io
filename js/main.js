const cWidth = 400;
const cHeight = 400;

const canvas = document.getElementById('testCanvas');
const ctx = canvas.getContext('2d');
canvas.width = cWidth;
canvas.height = cHeight;

const offsetX = 0;
const offsetY = 0;

const bgColor = "#3b4455"; 
const axisColor = "#e5e9f0"; 

function drawScreen() {
	ctx.clearRect(0, 0, cWidth, cHeight);
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, cWidth, cHeight);

	const xAxis = {
	    start: {
			x: 0,
			y: cHeight / 2
	    },
	    end: {
			x: cWidth,
			y: cHeight / 2
	    }
	};

	const yAxis = {
	    start: {
			x: cWidth / 2,
			y: 0
	    },
	    end: {
			x: cWidth / 2,
			y: cHeight
	    }
	};

	const origin = {
	    x: cWidth / 2,
	    y: cHeight / 2
	};
	
	function drawAxes(xAxis, yAxis, axisColor) {
		ctx.beginPath();
		ctx.moveTo(xAxis.start.x, xAxis.start.y - offsetY);
		ctx.lineTo(xAxis.end.x, xAxis.end.y - offsetY);
		ctx.moveTo(yAxis.start.x - offsetX, yAxis.start.y);
		ctx.lineTo(yAxis.end.x - offsetX, yAxis.end.y);
		ctx.strokeStyle = axisColor;
		ctx.lineWidth = 1;
		ctx.stroke();
	};

	drawAxes(xAxis, yAxis, axisColor);

}

drawScreen();

