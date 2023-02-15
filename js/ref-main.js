console.log("linked")

const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const data1 = [55000, 48000, 27000, 66000, 90000];

const FRAME2 = d3.select("#vis2") 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const MAX_Y = d3.max(data1, (d) => { return d; });


const Y_SCALE = d3.scaleLinear()
                  .domain([0, (MAX_Y + 11000)])
                  .range([0, VIS_HEIGHT]);



FRAME2.selectAll("points")  
    .data(data1)  
    .enter()      
    .append("circle")  
      .attr("cy", (d) => { return (Y_SCALE(d) + MARGINS.top); })
      .attr("cx", MARGINS.left)
      .attr("r", 20)
      .attr("class", "point");


FRAME2.append("g")
      .attr("transform", "translate(" + (VIS_WIDTH + MARGINS.top) +
            "," + (MARGINS.top) + ")")
      .call(d3.axisLeft(Y_SCALE).ticks(4))
        .attr("font-size", '20px');



