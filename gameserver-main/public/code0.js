gdjs.gameCode = {};
gdjs.gameCode.forEachIndex2 = 0;

gdjs.gameCode.forEachObjects2 = [];

gdjs.gameCode.forEachTemporary2 = null;

gdjs.gameCode.forEachTotalCount2 = 0;

gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDplayerObjects3= [];
gdjs.gameCode.GDBGObjects1= [];
gdjs.gameCode.GDBGObjects2= [];
gdjs.gameCode.GDBGObjects3= [];
gdjs.gameCode.GDbulletObjects1= [];
gdjs.gameCode.GDbulletObjects2= [];
gdjs.gameCode.GDbulletObjects3= [];
gdjs.gameCode.GDmonsterObjects1= [];
gdjs.gameCode.GDmonsterObjects2= [];
gdjs.gameCode.GDmonsterObjects3= [];
gdjs.gameCode.GDairwallObjects1= [];
gdjs.gameCode.GDairwallObjects2= [];
gdjs.gameCode.GDairwallObjects3= [];
gdjs.gameCode.GDairwall2Objects1= [];
gdjs.gameCode.GDairwall2Objects2= [];
gdjs.gameCode.GDairwall2Objects3= [];
gdjs.gameCode.GDairwall3Objects1= [];
gdjs.gameCode.GDairwall3Objects2= [];
gdjs.gameCode.GDairwall3Objects3= [];
gdjs.gameCode.GDairwall4Objects1= [];
gdjs.gameCode.GDairwall4Objects2= [];
gdjs.gameCode.GDairwall4Objects3= [];
gdjs.gameCode.GDplayerhpTextObjects1= [];
gdjs.gameCode.GDplayerhpTextObjects2= [];
gdjs.gameCode.GDplayerhpTextObjects3= [];
gdjs.gameCode.GDmonsterhpObjects1= [];
gdjs.gameCode.GDmonsterhpObjects2= [];
gdjs.gameCode.GDmonsterhpObjects3= [];
gdjs.gameCode.GDslowbulletObjects1= [];
gdjs.gameCode.GDslowbulletObjects2= [];
gdjs.gameCode.GDslowbulletObjects3= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDbulletObjects1, gdjs.gameCode.GDbulletObjects2);

{for(var i = 0, len = gdjs.gameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects2[i].addPolarForce(0, -(700), 1);
}
}}

}


{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects1[i].addPolarForce(0, 700, 1);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects = Hashtable.newFrom({"slowbullet": gdjs.gameCode.GDslowbulletObjects1});
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDslowbulletObjects1, gdjs.gameCode.GDslowbulletObjects2);

{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects2[i].addPolarForce(0, -(100), 1);
}
}}

}


{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDslowbulletObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects1[i].addPolarForce(0, 100, 1);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects1});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDbulletObjects1, gdjs.gameCode.GDbulletObjects2);

{for(var i = 0, len = gdjs.gameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects2[i].addPolarForce(0, -(700), 1);
}
}}

}


{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDbulletObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDbulletObjects1[i].addPolarForce(0, 700, 1);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects = Hashtable.newFrom({"slowbullet": gdjs.gameCode.GDslowbulletObjects1});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDslowbulletObjects1, gdjs.gameCode.GDslowbulletObjects2);

{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects2[i].addPolarForce(0, -(100), 1);
}
}}

}


{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDslowbulletObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDslowbulletObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDslowbulletObjects1[i].addPolarForce(0, 100, 1);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects = Hashtable.newFrom({"monster": gdjs.gameCode.GDmonsterObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects1Objects = Hashtable.newFrom({"monsterhp": gdjs.gameCode.GDmonsterhpObjects1});
gdjs.gameCode.eventsList4 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects = Hashtable.newFrom({"monster": gdjs.gameCode.GDmonsterObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1ObjectsGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.gameCode.GDbulletObjects1, "slowbullet": gdjs.gameCode.GDslowbulletObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects1Objects = Hashtable.newFrom({"monsterhp": gdjs.gameCode.GDmonsterhpObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects = Hashtable.newFrom({"monster": gdjs.gameCode.GDmonsterObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwallObjects1Objects = Hashtable.newFrom({"airwall": gdjs.gameCode.GDairwallObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall2Objects1Objects = Hashtable.newFrom({"airwall2": gdjs.gameCode.GDairwall2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall3Objects1Objects = Hashtable.newFrom({"airwall3": gdjs.gameCode.GDairwall3Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall4Objects1Objects = Hashtable.newFrom({"airwall4": gdjs.gameCode.GDairwall4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects = Hashtable.newFrom({"monster": gdjs.gameCode.GDmonsterObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects2Objects = Hashtable.newFrom({"monsterhp": gdjs.gameCode.GDmonsterhpObjects2});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

};gdjs.gameCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}}

}


};gdjs.gameCode.asyncCallback10498940 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("GameData")), "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.gameCode.asyncCallback10498940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}}

}


};gdjs.gameCode.asyncCallback10500012 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().get("rank"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.gameCode.asyncCallback10500012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10469156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.gameCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()) - 20, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "kungfu_wind1.mp3", false, 100, 1);
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10472012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.gameCode.GDslowbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()) - 20, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "kungfu_wind1.mp3", false, 100, 1);
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10474444);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.gameCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1Objects, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()) - 20, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "kungfu_wind1.mp3", false, 100, 1);
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10477140);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.gameCode.GDslowbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()) - 20, "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "kungfu_wind1.mp3", false, 100, 1);
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "玩家傷害cd");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物傷害CD");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3", true, 65, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "怪物生成") >= 1;
if (isConditionTrue_0) {
gdjs.gameCode.GDmonsterObjects1.length = 0;

gdjs.gameCode.GDmonsterhpObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects, gdjs.randomInRange(0, 1280), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects1Objects, (( gdjs.gameCode.GDmonsterObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDmonsterObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDmonsterObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDmonsterObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.gameCode.GDmonsterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterObjects1[i].getBehavior("Scale").setScale(0.25);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物生成");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.gameCode.GDmonsterObjects1.length !== 0 ? gdjs.gameCode.GDmonsterObjects1[0] : null), (gdjs.gameCode.GDmonsterhpObjects1.length !== 0 ? gdjs.gameCode.GDmonsterhpObjects1[0] : null));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);

for (gdjs.gameCode.forEachIndex2 = 0;gdjs.gameCode.forEachIndex2 < gdjs.gameCode.GDmonsterObjects1.length;++gdjs.gameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
gdjs.gameCode.GDmonsterObjects2.length = 0;


gdjs.gameCode.forEachTemporary2 = gdjs.gameCode.GDmonsterObjects1[gdjs.gameCode.forEachIndex2];
gdjs.gameCode.GDmonsterObjects2.push(gdjs.gameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.gameCode.GDmonsterObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterObjects2[i].addForceTowardObject((gdjs.gameCode.GDplayerObjects2.length !== 0 ? gdjs.gameCode.GDplayerObjects2[0] : null), 200, 0);
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(0, -(500), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(0, -(500), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(0, 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(0, 500, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(-(500), 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(-(500), 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(500, 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].addForce(500, 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.gameCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("slowbullet"), gdjs.gameCode.GDslowbulletObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDbulletObjects1ObjectsGDgdjs_9546gameCode_9546GDslowbulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}{gdjs.evtTools.sound.playSound(runtimeScene, "damage4.mp3", false, 70, 1.5);
}{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("monsterhp"), gdjs.gameCode.GDmonsterhpObjects1);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects1Objects, (gdjs.gameCode.GDmonsterObjects1.length !== 0 ? gdjs.gameCode.GDmonsterObjects1[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDmonsterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDmonsterhpObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterhpObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "damage7.mp3", false, 70, 1.2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "玩家傷害cd") >= 1;
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "玩家傷害cd");
}{gdjs.evtTools.sound.playSound(runtimeScene, "damage2.mp3", false, 80, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("airwall"), gdjs.gameCode.GDairwallObjects1);
gdjs.copyArray(runtimeScene.getObjects("airwall2"), gdjs.gameCode.GDairwall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("airwall3"), gdjs.gameCode.GDairwall3Objects1);
gdjs.copyArray(runtimeScene.getObjects("airwall4"), gdjs.gameCode.GDairwall4Objects1);
gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("monsterhp"), gdjs.gameCode.GDmonsterhpObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("playerhpText"), gdjs.gameCode.GDplayerhpTextObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwallObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall2Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDairwall4Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDmonsterObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerhpTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerhpTextObjects1[i].getBehavior("Text").setText("hp:" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects1[0].getVariables()).getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.gameCode.GDmonsterhpObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterhpObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("monster"), gdjs.gameCode.GDmonsterObjects1);

for (gdjs.gameCode.forEachIndex2 = 0;gdjs.gameCode.forEachIndex2 < gdjs.gameCode.GDmonsterObjects1.length;++gdjs.gameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("monsterhp"), gdjs.gameCode.GDmonsterhpObjects2);
gdjs.gameCode.GDmonsterObjects2.length = 0;


gdjs.gameCode.forEachTemporary2 = gdjs.gameCode.GDmonsterObjects1[gdjs.gameCode.forEachIndex2];
gdjs.gameCode.GDmonsterObjects2.push(gdjs.gameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDmonsterhpObjects2Objects, (gdjs.gameCode.GDmonsterObjects2.length !== 0 ? gdjs.gameCode.GDmonsterObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.gameCode.GDmonsterhpObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterhpObjects2[i].setX((( gdjs.gameCode.GDmonsterObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDmonsterObjects2[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.gameCode.GDmonsterhpObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterhpObjects2[i].setY((( gdjs.gameCode.GDmonsterObjects2.length === 0 ) ? 0 :gdjs.gameCode.GDmonsterObjects2[0].getCenterYInScene()) - 30);
}
}{for(var i = 0, len = gdjs.gameCode.GDmonsterhpObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDmonsterhpObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDmonsterObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDmonsterObjects2[0].getVariables()).getFromIndex(0)))));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "怪物傷害CD") >= 0.1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "怪物傷害CD");
}{/* Unknown instruction - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10498332);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDplayerObjects3.length = 0;
gdjs.gameCode.GDBGObjects1.length = 0;
gdjs.gameCode.GDBGObjects2.length = 0;
gdjs.gameCode.GDBGObjects3.length = 0;
gdjs.gameCode.GDbulletObjects1.length = 0;
gdjs.gameCode.GDbulletObjects2.length = 0;
gdjs.gameCode.GDbulletObjects3.length = 0;
gdjs.gameCode.GDmonsterObjects1.length = 0;
gdjs.gameCode.GDmonsterObjects2.length = 0;
gdjs.gameCode.GDmonsterObjects3.length = 0;
gdjs.gameCode.GDairwallObjects1.length = 0;
gdjs.gameCode.GDairwallObjects2.length = 0;
gdjs.gameCode.GDairwallObjects3.length = 0;
gdjs.gameCode.GDairwall2Objects1.length = 0;
gdjs.gameCode.GDairwall2Objects2.length = 0;
gdjs.gameCode.GDairwall2Objects3.length = 0;
gdjs.gameCode.GDairwall3Objects1.length = 0;
gdjs.gameCode.GDairwall3Objects2.length = 0;
gdjs.gameCode.GDairwall3Objects3.length = 0;
gdjs.gameCode.GDairwall4Objects1.length = 0;
gdjs.gameCode.GDairwall4Objects2.length = 0;
gdjs.gameCode.GDairwall4Objects3.length = 0;
gdjs.gameCode.GDplayerhpTextObjects1.length = 0;
gdjs.gameCode.GDplayerhpTextObjects2.length = 0;
gdjs.gameCode.GDplayerhpTextObjects3.length = 0;
gdjs.gameCode.GDmonsterhpObjects1.length = 0;
gdjs.gameCode.GDmonsterhpObjects2.length = 0;
gdjs.gameCode.GDmonsterhpObjects3.length = 0;
gdjs.gameCode.GDslowbulletObjects1.length = 0;
gdjs.gameCode.GDslowbulletObjects2.length = 0;
gdjs.gameCode.GDslowbulletObjects3.length = 0;

gdjs.gameCode.eventsList10(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
