gdjs._51_32_45_32CullenRoomCode = {};
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects1= [];
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects2= [];
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects3= [];
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects1= [];
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects2= [];
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects3= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects1= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects2= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects3= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects1= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects2= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects3= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects1= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects2= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects3= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects1= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects2= [];
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects3= [];
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects1= [];
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects2= [];
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects3= [];
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects1= [];
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects2= [];
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects3= [];
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects1= [];
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects2= [];
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects3= [];

gdjs._51_32_45_32CullenRoomCode.conditionTrue_0 = {val:false};
gdjs._51_32_45_32CullenRoomCode.condition0IsTrue_0 = {val:false};
gdjs._51_32_45_32CullenRoomCode.condition1IsTrue_0 = {val:false};


gdjs._51_32_45_32CullenRoomCode.mapOfGDgdjs_46_9551_9532_9545_9532CullenRoomCode_46GDBarrierObjects2Objects = Hashtable.newFrom({"Barrier": gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects2});gdjs._51_32_45_32CullenRoomCode.eventsList0xabf944 = function(runtimeScene) {

{


gdjs._51_32_45_32CullenRoomCode.condition0IsTrue_0.val = false;
{
gdjs._51_32_45_32CullenRoomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._51_32_45_32CullenRoomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Barriers");
}}

}


{


{
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects2.createFrom(runtimeScene.getObjects("Barrier"));
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs._51_32_45_32CullenRoomCode.mapOfGDgdjs_46_9551_9532_9545_9532CullenRoomCode_46GDBarrierObjects2Objects, false);
}
}}

}


{


{
}

}


}; //End of gdjs._51_32_45_32CullenRoomCode.eventsList0xabf944
gdjs._51_32_45_32CullenRoomCode.eventsList0xb5aa0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Scene"); }gdjs._51_32_45_32CullenRoomCode.eventsList0xabf944(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Scene"); }
}


{


{
}

}


}; //End of gdjs._51_32_45_32CullenRoomCode.eventsList0xb5aa0


gdjs._51_32_45_32CullenRoomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDPlayerObjects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBarrierObjects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeartOutlineObjects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart1Objects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart2Objects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDLifeHeart3Objects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBackground3Objects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDEdwardObjects3.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects1.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects2.length = 0;
gdjs._51_32_45_32CullenRoomCode.GDBellaObjects3.length = 0;

gdjs._51_32_45_32CullenRoomCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['_51_32_45_32CullenRoomCode'] = gdjs._51_32_45_32CullenRoomCode;
