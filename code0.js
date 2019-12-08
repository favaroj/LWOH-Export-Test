gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDPlayerObjects1= [];
gdjs.Title_32ScreenCode.GDPlayerObjects2= [];
gdjs.Title_32ScreenCode.GDBarrierObjects1= [];
gdjs.Title_32ScreenCode.GDBarrierObjects2= [];
gdjs.Title_32ScreenCode.GDLifeHeartOutlineObjects1= [];
gdjs.Title_32ScreenCode.GDLifeHeartOutlineObjects2= [];
gdjs.Title_32ScreenCode.GDLifeHeart1Objects1= [];
gdjs.Title_32ScreenCode.GDLifeHeart1Objects2= [];
gdjs.Title_32ScreenCode.GDLifeHeart2Objects1= [];
gdjs.Title_32ScreenCode.GDLifeHeart2Objects2= [];
gdjs.Title_32ScreenCode.GDLifeHeart3Objects1= [];
gdjs.Title_32ScreenCode.GDLifeHeart3Objects2= [];
gdjs.Title_32ScreenCode.GDMenuScreenObjects1= [];
gdjs.Title_32ScreenCode.GDMenuScreenObjects2= [];
gdjs.Title_32ScreenCode.GDExitButtonObjects1= [];
gdjs.Title_32ScreenCode.GDExitButtonObjects2= [];
gdjs.Title_32ScreenCode.GDPlaybuttonObjects1= [];
gdjs.Title_32ScreenCode.GDPlaybuttonObjects2= [];
gdjs.Title_32ScreenCode.GDPlayObjects1= [];
gdjs.Title_32ScreenCode.GDPlayObjects2= [];
gdjs.Title_32ScreenCode.GDStopObjects1= [];
gdjs.Title_32ScreenCode.GDStopObjects2= [];
gdjs.Title_32ScreenCode.GDNameObjects1= [];
gdjs.Title_32ScreenCode.GDNameObjects2= [];
gdjs.Title_32ScreenCode.GDNameInputObjects1= [];
gdjs.Title_32ScreenCode.GDNameInputObjects2= [];
gdjs.Title_32ScreenCode.GDCodeInputObjects1= [];
gdjs.Title_32ScreenCode.GDCodeInputObjects2= [];
gdjs.Title_32ScreenCode.GDPlayerNameObjects1= [];
gdjs.Title_32ScreenCode.GDPlayerNameObjects2= [];
gdjs.Title_32ScreenCode.GDCodeObjects1= [];
gdjs.Title_32ScreenCode.GDCodeObjects2= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition4IsTrue_0 = {val:false};


gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayerNameObjects1Objects = Hashtable.newFrom({"PlayerName": gdjs.Title_32ScreenCode.GDPlayerNameObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDCodeObjects1Objects = Hashtable.newFrom({"Code": gdjs.Title_32ScreenCode.GDCodeObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDStopObjects1Objects = Hashtable.newFrom({"Stop": gdjs.Title_32ScreenCode.GDStopObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Title_32ScreenCode.GDPlayObjects1});gdjs.Title_32ScreenCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{}{}}

}


{

gdjs.Title_32ScreenCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayerNameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.Title_32ScreenCode.GDCodeInputObjects1.createFrom(runtimeScene.getObjects("CodeInput"));
gdjs.Title_32ScreenCode.GDNameInputObjects1.createFrom(runtimeScene.getObjects("NameInput"));
gdjs.Title_32ScreenCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDPlayerNameObjects1[i].setString((( gdjs.Title_32ScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDNameInputObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString((( gdjs.Title_32ScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDNameInputObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDCodeInputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDCodeInputObjects1[i].setString("");
}
}}

}


{

gdjs.Title_32ScreenCode.GDCodeObjects1.createFrom(runtimeScene.getObjects("Code"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDCodeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.Title_32ScreenCode.GDCodeObjects1.createFrom(runtimeScene.getObjects("Code"));
gdjs.Title_32ScreenCode.GDCodeInputObjects1.createFrom(runtimeScene.getObjects("CodeInput"));
gdjs.Title_32ScreenCode.GDNameInputObjects1.createFrom(runtimeScene.getObjects("NameInput"));
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDCodeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDCodeObjects1[i].setString((( gdjs.Title_32ScreenCode.GDCodeInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDCodeInputObjects1[0].getString()));
}
}{runtimeScene.getVariables().getFromIndex(2).setString((( gdjs.Title_32ScreenCode.GDCodeInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDCodeInputObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDNameInputObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDNameInputObjects1[i].setString("");
}
}}

}


{

gdjs.Title_32ScreenCode.GDStopObjects1.createFrom(runtimeScene.getObjects("Stop"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDStopObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.Title_32ScreenCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition2IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition3IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Title_32ScreenCode.condition1IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("PlayerName")) == "");
}if ( gdjs.Title_32ScreenCode.condition2IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "HORROR3";
}}
}
}
if (gdjs.Title_32ScreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MotherNatureHallway", false);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
}

}


}; //End of gdjs.Title_32ScreenCode.eventsList0xb5aa0


gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBarrierObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBarrierObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeartOutlineObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeartOutlineObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart1Objects1.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart1Objects2.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart3Objects1.length = 0;
gdjs.Title_32ScreenCode.GDLifeHeart3Objects2.length = 0;
gdjs.Title_32ScreenCode.GDMenuScreenObjects1.length = 0;
gdjs.Title_32ScreenCode.GDMenuScreenObjects2.length = 0;
gdjs.Title_32ScreenCode.GDExitButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDExitButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlaybuttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlaybuttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStopObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStopObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNameInputObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNameInputObjects2.length = 0;
gdjs.Title_32ScreenCode.GDCodeInputObjects1.length = 0;
gdjs.Title_32ScreenCode.GDCodeInputObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayerNameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerNameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDCodeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDCodeObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
