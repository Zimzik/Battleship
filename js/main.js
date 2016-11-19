var model = {
    shipsX1: 4,  /*Кількість однопалубних корабликів*/
    shipsX2: 3,  /*Кількість двохпалубних корабликів*/
    shipsX3: 2,  /*Кількість трьохпалубних корабликів*/
    shipsX4: 1,  /*Флагман*/
    field: [],  /*Масив координат грального поля*/
    fieldCoordGenerator: function () { /*Генератор координат на гральному полі*/
        this.field = [];
        for (var i = 0; i < 10; i++) {
            this.field[i] = [];
            for (var j = 0; j < 10; j++) {
                this.field[i][j] = {coord: "m" + i + j, status: "free"};
            }
        }
    },

    coordGenerator: function () {   /*Генератора випадкових координа Х і Y*/
        var coordX = Math.floor(Math.random()*10);
        var coordY = Math.floor(Math.random()*10);
        return {coordX, coordY};
    },

    shipsCoordGeneratorX1: function () { /*Генеруєм однопалубні кораблики*/
        for (var i = 0; i < this.shipsX1; i++) {
            var shipCoordX = this.coordGenerator().coordY;
            var shipCoordY = this.coordGenerator().coordX;
            if (i == 0) {   /*Якщо генерується перший кораблик*/
                this.field[shipCoordX][shipCoordY].status = "ship";
                console.log("Згенерувався кораблик з координатами " + shipCoordY + " " +
                 shipCoordX)
            } else {
                while ( this.field[shipCoordX][shipCoordY].status == "ship") {
                    var shipCoordX = this.coordGenerator().coordY;
                    var shipCoordY = this.coordGenerator().coordX;
                }
                this.field[shipCoordX][shipCoordY].status = "ship";
                console.log("Згенерувався кораблик з координатами " + shipCoordY + " " + 
                 shipCoordX)
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
    }
}
var table = document.querySelector("#enemy-field")
model.fieldCoordGenerator();
console.log(model.field);
model.shipsCoordGeneratorX1();
console.log(model.field);
model.drowShips(table);

