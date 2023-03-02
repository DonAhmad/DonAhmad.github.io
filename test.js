
//openFile will read XML file and input it into text field
var openFile = function(event) {
	var input = event.target;
var text = "";
	var reader = new FileReader();
	var onload = function(event) {
		text = reader.result;
		parseFile(text);

	};

	reader.onload = onload;
	reader.readAsText(input.files[0]);

};

//this will parse XML file and output it to website
var parseFile = function(text) {
	var xmlDoc = $.parseXML(text),
		$xml = $(xmlDoc),
		$options = $xml.find("option");

	$.each($options, function() {
		$("#output").append("<li>" + $(this).text() + "</li >");
	});

};


/**************
Sample XML file used

<root><instructions>Some ins text.</instructions><options><option>1.png</option><option>2.png</option><option>3.png</option><option>4.png</option></options><noOfOptions>4</noOfOptions></root>



****************/



