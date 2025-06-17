gdjs.titleCode = {};
gdjs.titleCode.GDGAMETITLEBGObjects1= [];
gdjs.titleCode.GDGAMETITLEBGObjects2= [];
gdjs.titleCode.GDstartgamebuttonObjects1= [];
gdjs.titleCode.GDstartgamebuttonObjects2= [];
gdjs.titleCode.GD_9535498_9526126Objects1= [];
gdjs.titleCode.GD_9535498_9526126Objects2= [];
gdjs.titleCode.GD_9535498_9526126_9532972_9526223Objects1= [];
gdjs.titleCode.GD_9535498_9526126_9532972_9526223Objects2= [];
gdjs.titleCode.GD_9535498_95261262Objects1= [];
gdjs.titleCode.GD_9535498_95261262Objects2= [];
gdjs.titleCode.GD_9536820_9522238Objects1= [];
gdjs.titleCode.GD_9536820_9522238Objects2= [];


gdjs.titleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "說明");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3", false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("startgamebutton"), gdjs.titleCode.GDstartgamebuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.titleCode.GDstartgamebuttonObjects1.length;i<l;++i) {
    if ( gdjs.titleCode.GDstartgamebuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.titleCode.GDstartgamebuttonObjects1[k] = gdjs.titleCode.GDstartgamebuttonObjects1[i];
        ++k;
    }
}
gdjs.titleCode.GDstartgamebuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("說明"), gdjs.titleCode.GD_9535498_9526126Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.titleCode.GD_9535498_9526126Objects1.length;i<l;++i) {
    if ( gdjs.titleCode.GD_9535498_9526126Objects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.titleCode.GD_9535498_9526126Objects1[k] = gdjs.titleCode.GD_9535498_9526126Objects1[i];
        ++k;
    }
}
gdjs.titleCode.GD_9535498_9526126Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "說明");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("返回"), gdjs.titleCode.GD_9536820_9522238Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.titleCode.GD_9536820_9522238Objects1.length;i<l;++i) {
    if ( gdjs.titleCode.GD_9536820_9522238Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.titleCode.GD_9536820_9522238Objects1[k] = gdjs.titleCode.GD_9536820_9522238Objects1[i];
        ++k;
    }
}
gdjs.titleCode.GD_9536820_9522238Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "說明");
}}

}


};

gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDGAMETITLEBGObjects1.length = 0;
gdjs.titleCode.GDGAMETITLEBGObjects2.length = 0;
gdjs.titleCode.GDstartgamebuttonObjects1.length = 0;
gdjs.titleCode.GDstartgamebuttonObjects2.length = 0;
gdjs.titleCode.GD_9535498_9526126Objects1.length = 0;
gdjs.titleCode.GD_9535498_9526126Objects2.length = 0;
gdjs.titleCode.GD_9535498_9526126_9532972_9526223Objects1.length = 0;
gdjs.titleCode.GD_9535498_9526126_9532972_9526223Objects2.length = 0;
gdjs.titleCode.GD_9535498_95261262Objects1.length = 0;
gdjs.titleCode.GD_9535498_95261262Objects2.length = 0;
gdjs.titleCode.GD_9536820_9522238Objects1.length = 0;
gdjs.titleCode.GD_9536820_9522238Objects2.length = 0;

gdjs.titleCode.eventsList0(runtimeScene);

return;

}

gdjs['titleCode'] = gdjs.titleCode;
