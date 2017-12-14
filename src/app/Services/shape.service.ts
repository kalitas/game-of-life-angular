//this service is initialize by app.component and is responsible for 
//adding the the right shapes into the grid 


import { Injectable } from '@angular/core';
import { Grid } from '../Models/Grid/grid'
 
@Injectable()
export class ShapeService {
  shapeType;
  constructor(){
    //currently only 2 types, but using this service is possible to add more shapes easily
    enum ShapeType{
      glinder = 0, //number here just in case other developer will insert new shape type in the middle of the shapes and not in the end     
      random = 1
    }; 
    this.shapeType = ShapeType;
  }

  //this method is called from app.component when user tapped on the shape he choose.
  initShapeType(type, grid){
    switch (type){
      case this.shapeType.glinder:
        this.setGlinder(grid);
        break;
      case this.shapeType.random:
        this.setRandom(grid);
        break;
    }
  }

  //guns type shape
  setGlinder(grid){
    grid[9][44] = 1
    grid[10][42] = 1
    grid[10][44] = 1
    grid[11][32] = 1
    grid[11][33] = 1
    grid[11][40] = 1
    grid[11][41] = 1
    grid[11][54] = 1
    grid[11][55] = 1
    grid[12][31] = 1
    grid[12][35] = 1
    grid[12][40] = 1
    grid[12][41] = 1
    grid[12][54] = 1
    grid[12][55] = 1
    grid[13][20] = 1
    grid[13][21] = 1
    grid[13][30] = 1
    grid[13][36] = 1
    grid[13][40] = 1
    grid[13][41] = 1
    grid[14][20] = 1
    grid[14][21] = 1
    grid[14][30] = 1
    grid[14][34] = 1
    grid[14][36] = 1
    grid[14][37] = 1
    grid[14][42] = 1
    grid[14][44] = 1
    grid[15][30] = 1
    grid[15][36] = 1
    grid[15][44] = 1
    grid[16][31] = 1
    grid[16][35] = 1
    grid[17][32] = 1
    grid[17][33] = 1
    return grid;
  }

  //random shapes
  setRandom(grid){
     for (let row = 0; row < grid.length; row++) { 
        for (var column = 0; column < grid.length; column++) {
            grid[row][column] = Math.round(Math.random());
        }
    }
    return grid;
  }
}
