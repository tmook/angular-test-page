import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-bar-chart',
  templateUrl: './d3-bar-chart.component.html',
  styleUrls: ['./d3-bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class D3BarChartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private title: string;
  @Input() private data: Array<any>;
  private isChart: boolean = false;
  private margin: any = {top: 20, right: 20, bottom: 20, left: 25};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() { 
    this.createChart();
    if(this.data){
      this.isChart = true;
      this.updateChart();
    }
  }

  ngOnChanges() { 
    if(this.chart){
      this.updateChart();
    }
  }

  createChart(){
    //get chart html element
    let element = this.chartContainer.nativeElement
    
    //determin size based on parent container
    const dimen = element.parentNode.parentNode.getBoundingClientRect();
    this.width = dimen.width - this.margin.left - this.margin.right;
    this.height = dimen.height - this.margin.top - this.margin.bottom;
    //create svg for chart
    let svg = d3.select(element).append('svg')
      .attr('width', dimen.width)
      .attr('height', dimen.height);

    //create chart plot area
    this.chart = svg.append("g")
      .attr('class', 'bars')
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

    //x and y Domains
    let xDomain = this.data.map(d => d[0]);
    let yDomain = [0, d3.max(this.data, d => d[1])];

    //x and y scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    //bar colors
    this.colors = d3.scaleLinear().domain([0,this.data.length]).range(<any[]>['steelblue','steelblue']);


    // x and y axis
    this.xAxis = svg.append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top+this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append("g")
      .attr("class", "axis axis-y")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
  }

  updateChart() {
    // update scales and axis
    this.xScale.domain(this.data.map(d => d[0]));
    this.yScale.domain([0, d3.max(this.data, d => d[1])]);
    this.colors.domain([0, this.data.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.data);

    // remove existing bars
    update.exit().remove();
    
    //update exiting bars 
    this.chart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(d[1]))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d[1]))
      .style('fill', (d, i) => this.colors(i));

    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(0))
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d[1]))
      .attr('height', d => this.height - this.yScale(d[1]));

    /*
    g.append("text")
      .attr("class", "y label")
      .attr("dy", "-0.75em")
      .attr("text-anchor", "front")
      .text("Population");
    */
  }

}

