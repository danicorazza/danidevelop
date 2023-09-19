var window = new Window("palette", "Teste", undefined);
var buttonOne = window.add("button", undefined, "Criar Texto");
var buttonTwo = window.add("button", undefined, "Alterar Texto");
var buttonThree = window.add("button", undefined, "Animar Texto");

buttonOne.onClick = function() {

	app.beginUndoGroup("Cria texto");
		var compOne = app.project.items.addComp("Comp teste", 1920, 1080, 1,  60, 30);
		var txt = compOne.layers.addText ("TEXTO 1");
		compOne.openInViewer();
	app.endUndoGroup();
};

buttonTwo.onClick = function() {
	app.beginUndoGroup("Alterar texto");
	var layer = app.project.item(1).layer(1);
	var textLayer;
	if(layer.proprety("Source Text") != null) {
        var textLayer = layer};
	
	var textDocument = new TextDocument("Texto novo");
	var textProp = layer.property("Source Text");
	textDocument = textProp.value;
	
	textDocument.fontSize = 100;
	textDocument.fillColor = [1,0,0];
	textDocument.strokeColor = [0,1,0];
	textDocument.strokeWidht = 3;
	textDocument.font = "IBM Plex Sans";
	textDocument.applyStroke = true;
	textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
	
	textLayer.property("Source Text").setValue(textDocument); 
	
	app.endUndoGroup;
};

buttonThree.onClick = function() {
	app.beginUndoGroup("Animar texto");
	var txt = app.project.item(1).layer(1);
    var p1 = txt.position.setValueAtTime(1, [550, 540]);
    var p2 = txt.position.setvalueAtTime(2, [960, 540]);
    var easeIn = new KeyframeEase(0, 85);
    var easeOut = new KeyframeEase(0, 33.333);
    var posProp = txt.position;
    var t1 = txt.opacity.setValueAtTime(1, 0);
    var t2 = txt.opacity.setvalueAtTime(2, 100);
    var opProp = txt.opacity;

};

window.center();
window.show();
