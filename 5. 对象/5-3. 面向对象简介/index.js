/**
 * 大象
 */
function Elephant() {

}

/**
 * 冰箱
 */
function Freezer() {

}

Freezer.prototype.openDoor = function () {

}

Freezer.prototype.closeDoor = function () {

}

Freezer.prototype.join = function(something){
    this.openDoor();
    //装东西

    this.closeDoor();
}

//1. 冰箱门打开
// var frig = new Freezer();
// frig.openDoor();

// //2. 大象装进去
// var ele = new Elephant();
// frig.join(ele);

// //3. 冰箱门关上
// frig.closeDoor();

var frig = new Freezer();

frig.join(new Elephant());