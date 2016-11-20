var model = {
    shipsX1: 4,  /*Кількість однопалубних корабликів*/
    shipsX2: 3,  /*Кількість двохпалубних корабликів*/
    shipsX3: 2,  /*Кількість трьохпалубних корабликів*/
    shipsX4: 1,  /*Флагман*/
    enemyField: [],  /*Масив координат грального поля противника*/
    myField: [],
    fieldCoordGenerator: function () { /*Генератор координат на гральному полі*/
        this.field = [];
        for (var i = 0; i < 10; i++) {
            this.field[i] = [];
            for (var j = 0; j < 10; j++) {
                this.field[i][j] = {coord: "m" + i + j, status: "free"};
            }
        }
    },

    coordGenerator: function (number) {   /*Генератора випадкових координа Х і Y*/
        var coordX = Math.floor(Math.random()*number);
        var coordY = Math.floor(Math.random()*number);
        return {coordX, coordY};
    },

    shipsCoordGeneratorX1: function (field) { /*Генеруєм однопалубні кораблики*/
        for (var i = 0; i < this.shipsX1; i++) {
            var shipCoordX = this.coordGenerator(10).coordY;
            var shipCoordY = this.coordGenerator(10).coordX;
            if (i == 0) {   /*Якщо генерується перший кораблик*/
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1
                for (var j = 0; j < 3; j++) {
                    for (var k = 0; k < 3; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
            } else {
                while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy") {
                    var shipCoordX = this.coordGenerator(10).coordY;
                    var shipCoordY = this.coordGenerator(10).coordX;
                }
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 3; j++) {
                    for (var k = 0; k < 3; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
            }
        }
    },

    shipsCoordGeneratorX2: function () {
        var horVer;
        for (var i = 0; i < this.shipsX2; i++) {
            horVer = Math.floor(Math.random()*2);
            if (horVer == 0) {
                do {
                    var shipCoordX = this.coordGenerator(10).coordY;
                    var shipCoordY = this.coordGenerator(9).coordX;
                    console.log("Координати двухпалубника " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX][shipCoordY + 1].status == "ship" || this.field[shipCoordX][shipCoordY + 1].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 3; j++) {
                    for (var k = 0; k < 4; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX][shipCoordY + 1].status = "ship";
            }

            if (horVer == 1) {
                                do {
                    var shipCoordX = this.coordGenerator(9).coordY;
                    var shipCoordY = this.coordGenerator(10).coordX;
                    console.log("Координати двухпалубника " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX + 1][shipCoordY].status == "ship" || this.field[shipCoordX + 1][shipCoordY].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 4; j++) {
                    for (var k = 0; k < 3; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX + 1][shipCoordY].status = "ship";
            }
        }
    },

    shipsCoordGeneratorX3: function () {
        var horVer;
        for (var i = 0; i < this.shipsX3; i++) {
            horVer = Math.floor(Math.random()*2);
            if (horVer == 0) {
                do {
                    var shipCoordX = this.coordGenerator(10).coordY;
                    var shipCoordY = this.coordGenerator(8).coordX;
                    console.log("Координати Трьохпалубника " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX][shipCoordY + 1].status == "ship" || this.field[shipCoordX][shipCoordY + 1].status == "busy" ||
this.field[shipCoordX][shipCoordY + 2].status == "ship" || this.field[shipCoordX][shipCoordY + 2].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 3; j++) {
                    for (var k = 0; k < 5; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX][shipCoordY + 1].status = "ship";
                this.field[shipCoordX][shipCoordY + 2].status = "ship";
            }

            if (horVer == 1) {
                do {
                    var shipCoordX = this.coordGenerator(8).coordY;
                    var shipCoordY = this.coordGenerator(10).coordX;
                    console.log("Координати Трьохпалубника " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX + 1][shipCoordY].status == "ship" || this.field[shipCoordX + 1][shipCoordY].status == "busy" ||
this.field[shipCoordX + 2][shipCoordY].status == "ship" || this.field[shipCoordX + 2][shipCoordY].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 5; j++) {
                    for (var k = 0; k < 3; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX + 1][shipCoordY].status = "ship";
                this.field[shipCoordX + 2][shipCoordY].status = "ship";
            }
        }
    },

    shipsCoordGeneratorX4: function () {
        var horVer;
        for (var i = 0; i < this.shipsX4; i++) {
            horVer = Math.floor(Math.random()*2);
            if (horVer == 0) {
                do {
                    var shipCoordX = this.coordGenerator(10).coordY;
                    var shipCoordY = this.coordGenerator(7).coordX;
                    console.log("Координати флагмана " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX][shipCoordY + 1].status == "ship" || this.field[shipCoordX][shipCoordY + 1].status == "busy" ||
this.field[shipCoordX][shipCoordY + 2].status == "ship" || this.field[shipCoordX][shipCoordY + 2].status == "busy" || this.field[shipCoordX][shipCoordY + 3].status == "ship" || this.field[shipCoordX][shipCoordY + 3].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 3; j++) {
                    for (var k = 0; k < 6; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX][shipCoordY + 1].status = "ship";
                this.field[shipCoordX][shipCoordY + 2].status = "ship";
                this.field[shipCoordX][shipCoordY + 3].status = "ship";
            }

            if (horVer == 1) {
                do {
                    var shipCoordX = this.coordGenerator(7).coordY;
                    var shipCoordY = this.coordGenerator(10).coordX;
                    console.log("Координати Трьохпалубника " + shipCoordX + " - " + shipCoordY);
                } while ( this.field[shipCoordX][shipCoordY].status == "ship" || this.field[shipCoordX][shipCoordY].status == "busy" || this.field[shipCoordX + 1][shipCoordY].status == "ship" || this.field[shipCoordX + 1][shipCoordY].status == "busy" ||
this.field[shipCoordX + 2][shipCoordY].status == "ship" || this.field[shipCoordX + 2][shipCoordY].status == "busy" || this.field[shipCoordX + 3][shipCoordY].status == "ship" || this.field[shipCoordX + 3][shipCoordY].status == "busy");
                var firstX = shipCoordX - 1;
                var firstY = shipCoordY - 1;
                for (var j = 0; j < 6; j++) {
                    for (var k = 0; k < 3; k++) {
                        if (this.field[firstX + j] == undefined || this.field[firstX + j][firstY + k] == undefined) {}
                        else {
                            this.field[firstX + j][firstY + k].status = "busy";
                        }
                    }
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                this.field[shipCoordX + 1][shipCoordY].status = "ship";
                this.field[shipCoordX + 2][shipCoordY].status = "ship";
                this.field[shipCoordX + 3][shipCoordY].status = "ship";
            }
        }
    },

    drowShips: function (someTable) {  /*Малюєм кораблики на полі*/
        var table = someTable;
        var cell;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.field[i][j].status == "ship") {
                    cell = table.querySelector("#m" + i + j);
                    cell.classList.add("ship");
                }
            }
        }
    },

    drowBusyCells: function (someTable) {
        var table = someTable;
        var cell;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.field[i][j].status == "busy") {
                    cell = table.querySelector("#m" + i + j);
                    cell.classList.add("boom");
                }
            }
        }
    }
}
var table = document.querySelector("#enemy-field");
model.fieldCoordGenerator();
console.log(model.field);
model.shipsCoordGeneratorX1();
model.shipsCoordGeneratorX2();
model.shipsCoordGeneratorX3();
model.shipsCoordGeneratorX4();
console.log(model.field);
model.drowShips(table);
/*model.drowBusyCells(table);*/

