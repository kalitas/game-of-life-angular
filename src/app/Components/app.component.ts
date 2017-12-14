import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Grid } from '../Models/Grid/grid'
import { ShapeService } from '../Services/shape.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
    ctx : CanvasRenderingContext2D;
    grid : Grid;
    delayBetweenFrames : number;
    constructor(private shapeService: ShapeService) {
        this.delayBetweenFrames = 0;
    }
    @ViewChild("myCanvas") myCanvas: ElementRef; 
   
    //
    ngAfterViewInit() {
        this.ctx = this.myCanvas.nativeElement.getContext("2d");
        this.ctx.fillStyle = "#ff0000";  
    }

    //start is a function which loops by custom frames
    start() {
        this.clearGridFromCanvas();        
        this.drawGridOnCanvas();
        this.grid = this.updateGridWithGameRules();
        setTimeout(() => {
            this.start();         
        }, this.delayBetweenFrames);
    }

    clearGridFromCanvas(){
        this.ctx.clearRect(0, 0, this.grid.getRows, this.grid.getColumn);
    }

    drawGridOnCanvas() { 
         var liveCount = 0;
            for (let row = 1; row < this.grid.getRows; row++) { //iterate through rows
            for (let column = 1; column <  this.grid.getColumn; column++) { //iterate through columns
                if (this.grid[row][column] === 1) {
                     this.ctx.fillRect(row, column, 1, 1);
                      liveCount++;
                      
                }
            }
        }        
    }
  
    updateGridWithGameRules() { 
        let copyGrid = new Grid(this.grid.getRows, this.grid.getColumn);
        
        for (let row = 1; row <  this.grid.getRows - 1; row++) { //iterate through rows
            for (let column = 1; column < this.grid.getColumn - 1; column++) { //iterate through columns
           
                let totalCells = this.grid.checkSurroundingsCells(row, column);
                //apply the rules to each cell:
                // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
                // Any live cell with two or three live neighbours lives on to the next generation.
                // Any live cell with more than three live neighbours dies, as if by overpopulation.
                // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                switch (totalCells) {
                    case 2:
                        copyGrid[row][column] = this.grid[row][column];
                         
                        break;
                    case 3:
                        copyGrid[row][column] = 1; 
                          
                        break;
                    default:
                        copyGrid[row][column] = 0; 
                }
            }
        }
        return copyGrid;
    } 

    //UIButtons
    switchShapeTapped(type){
        this.grid = null;
        this.grid = new Grid(400,400); //I think this (400) is more readable and less code than decalre a variable because we use it only once        this.shapeService.setGlinder(this.grid);   
        this.shapeService.initShapeType(type, this.grid);
        this.start(); 
    }
  }