console.log("linked")

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const data1 = [55000, 48000, 27000, 66000, 90000];

const FRAME2 = d3.select("#vis2") 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 

FRAME2.selectAll("points") 
                            
      .data(data1) 
      .enter()  
      .append("circle")  
        .attr("cx", (d) => { return d; }) 
        .attr("cy", 0) 
        .attr("r", 20)
        .attr("class", "point"); 


FRAME2.selectAll("points")  
.data(data1)  
.enter()       
.append("circle")  
  .attr("cx", (d) => { return (d + MARGINS.left); }) 
  .attr("cy", MARGINS.top) 
  .attr("r", 20)
  .attr("class", "point"); 
