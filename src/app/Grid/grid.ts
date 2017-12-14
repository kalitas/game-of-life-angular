
export class Grid extends Array  {
    constructor(private _rows: number, private _columns: number){
        super();
        Object.setPrototypeOf(this, Grid.prototype);
        this._build(); 
    }
    
    get getRows(){
        return this._rows;
    }

    get getColumn(){
        return this._columns;
    }

    _build(){
        for (var i = 0; i < this._rows; i++) {
            this[i] = [];
        }
    }

    checkSurroundingsCells(row,column){
        let totalCells = 0;
        //add up the total values for the surrounding cells
        totalCells += this[row - 1][column - 1] || 0; //top left
        totalCells += this[row - 1][column] || 0; //top center
        totalCells += this[row - 1][column + 1] || 0; //top right

        totalCells += this[row][column - 1] || 0; //middle left
        totalCells += this[row][column + 1] || 0; //middle right

        totalCells += this[row + 1][column - 1] || 0; //bottom left
        totalCells += this[row + 1][column] || 0; //bottom center
        totalCells += this[row + 1][column + 1] || 0; //bottom right
        return totalCells;
    }
}
