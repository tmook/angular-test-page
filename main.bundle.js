webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d3-chart {\n  width: 100%;\n  height: 100%;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n   stroke: #202020;\n}\n\n.d3-chart .axis text {\n   fill: #808080;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"title\">{{title}}</span>\n<div class=\"d3-chart\" #chart>{{isChart?'':'d3 city bar chart'}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3BarChartComponent = (function () {
    function D3BarChartComponent() {
        this.isChart = false;
        this.margin = { top: 20, right: 20, bottom: 20, left: 25 };
    }
    D3BarChartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.isChart = true;
            this.updateChart();
        }
    };
    D3BarChartComponent.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    D3BarChartComponent.prototype.createChart = function () {
        //get chart html element
        var element = this.chartContainer.nativeElement;
        //determin size based on parent container
        var dimen = element.parentNode.parentNode.getBoundingClientRect();
        this.width = dimen.width - this.margin.left - this.margin.right;
        this.height = dimen.height - this.margin.top - this.margin.bottom;
        //create svg for chart
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element).append('svg')
            .attr('width', dimen.width)
            .attr('height', dimen.height);
        //create chart plot area
        this.chart = svg.append("g")
            .attr('class', 'bars')
            .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")");
        //x and y Domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var yDomain = [0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })];
        //x and y scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        //bar colors
        this.colors = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().domain([0, this.data.length]).range(['steelblue', 'steelblue']);
        // x and y axis
        this.xAxis = svg.append("g")
            .attr("class", "axis axis-x")
            .attr("transform", "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis = svg.append("g")
            .attr("class", "axis axis-y")
            .attr("transform", "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
    };
    D3BarChartComponent.prototype.updateChart = function () {
        var _this = this;
        // update scales and axis
        this.xScale.domain(this.data.map(function (d) { return d[0]; }));
        this.yScale.domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](this.data, function (d) { return d[1]; })]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale));
        this.yAxis.transition().call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale));
        var update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove existing bars
        update.exit().remove();
        //update exiting bars 
        this.chart.selectAll('.bar').transition()
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('width', function (d) { return _this.xScale.bandwidth(); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); })
            .style('fill', function (d, i) { return _this.colors(i); });
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.xScale(d[0]); })
            .attr('y', function (d) { return _this.yScale(0); })
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', function (d, i) { return _this.colors(i); })
            .transition()
            .delay(function (d, i) { return i * 10; })
            .attr('y', function (d) { return _this.yScale(d[1]); })
            .attr('height', function (d) { return _this.height - _this.yScale(d[1]); });
        /*
        g.append("text")
          .attr("class", "y label")
          .attr("dy", "-0.75em")
          .attr("text-anchor", "front")
          .text("Population");
        */
    };
    return D3BarChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('chart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], D3BarChartComponent.prototype, "chartContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], D3BarChartComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], D3BarChartComponent.prototype, "data", void 0);
D3BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-d3-bar-chart',
        template: __webpack_require__("../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], D3BarChartComponent);

var _a;
//# sourceMappingURL=d3-bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td img {\n  height: 1em;\n  width: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered table-condensed table-hover\">\n  <tbody>\n    <tr>\n      <td>\n        <input type=\"text\" disabled name=\"color\" placeholder=\"Marker (randomized)\" class=\"form-control\">\n      </td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"lat\" (keypress)=\"handleKeyPress($event)\" name=\"lat\" placeholder=\"Latitude\" class=\"form-control\">\n      </td>\n      <td>\n        <input type=\"text\" [(ngModel)]=\"lng\" (keypress)=\"handleKeyPress($event)\" name=\"lng\" placeholder=\"Longitude\" class=\"form-control\">\n      </td>\n      <td class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"handleSubmit()\">Mark it!</button>\n      </td>\n    </tr>\n    <tr *ngFor=\"let row of gmap.markers\" (click)=\"recenter(row.lat,row.lng)\">\n      <td *ngFor=\"let d of markerRowElements(row); let i = index\">\n        <img *ngIf=\"i === 0; else elseBlock\" src={{d}}>\n        <ng-template #elseBlock>{{d}}</ng-template>\n      </td>\n      <td class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteRow(row.id)\">✖</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Constants__ = __webpack_require__("../../../../../src/app/utils/Constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_hashCode__ = __webpack_require__("../../../../../src/app/utils/hashCode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_hasNull__ = __webpack_require__("../../../../../src/app/utils/hasNull.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_isValidCoordinate__ = __webpack_require__("../../../../../src/app/utils/isValidCoordinate.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsMarkerTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoogleMapsMarkerTableComponent = (function () {
    function GoogleMapsMarkerTableComponent() {
        this.onMapUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    GoogleMapsMarkerTableComponent.prototype.ngOnInit = function () {
        if (!this.hideField)
            this.hideField = [];
        this.color = this.getRandomMarker();
        this.lat = "";
        this.lng = "";
    };
    GoogleMapsMarkerTableComponent.prototype.ngOnChanges = function () { };
    GoogleMapsMarkerTableComponent.prototype.markerRowElements = function (row) {
        var _this = this;
        //clone row
        var clone_row = JSON.parse(JSON.stringify(row));
        for (var key in clone_row) {
            if (this.hideField.includes(key)) {
                delete clone_row[key];
            }
        }
        return Object.keys(clone_row).map(function (key) {
            if (!_this.hideField.includes(key)) {
                var returnCell = clone_row[key];
                if (key == 'color') {
                    var imgSrc = __WEBPACK_IMPORTED_MODULE_1__utils_Constants__["a" /* MARKERS */][clone_row[key]];
                    returnCell = imgSrc;
                }
                return returnCell;
            }
        });
    };
    GoogleMapsMarkerTableComponent.prototype.addMarker = function (new_marker) {
        this.gmap = {
            markers: [new_marker].concat(this.gmap.markers),
            center: { lat: new_marker.lat, lng: new_marker.lng }
        };
        this.onMapUpdate.emit(this.gmap);
    };
    GoogleMapsMarkerTableComponent.prototype.deleteRow = function (rowId) {
        var toDelete = new Set([rowId]);
        this.gmap.markers = this.gmap.markers.filter(function (row) { return !toDelete.has(row.id); });
        this.onMapUpdate.emit(this.gmap);
    };
    GoogleMapsMarkerTableComponent.prototype.recenter = function (new_lat, new_lng) {
        this.gmap.center = {
            lat: new_lat,
            lng: new_lng
        };
        this.onMapUpdate.emit(this.gmap);
    };
    GoogleMapsMarkerTableComponent.prototype.handleKeyPress = function (e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            this.handleSubmit();
        }
    };
    GoogleMapsMarkerTableComponent.prototype.handleSubmit = function () {
        var hashString = this.color + this.lat + this.lng;
        var newMarker = {
            id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_hashCode__["a" /* default */])(hashString),
            color: this.color,
            lat: parseFloat(this.lat),
            lng: parseFloat(this.lng)
        };
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_hasNull__["a" /* default */])(newMarker) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_isValidCoordinate__["a" /* default */])(this.lat, this.lng)) {
            console.log("invalid input");
        }
        else {
            this.addMarker(newMarker);
            this.reset();
        }
    };
    GoogleMapsMarkerTableComponent.prototype.reset = function () {
        this.color = this.getRandomMarker();
        this.lat = "";
        this.lng = "";
    };
    GoogleMapsMarkerTableComponent.prototype.getRandomMarker = function () {
        var rand = Math.floor(Math.random() * 23);
        return Object.keys(__WEBPACK_IMPORTED_MODULE_1__utils_Constants__["a" /* MARKERS */])[rand];
    };
    return GoogleMapsMarkerTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], GoogleMapsMarkerTableComponent.prototype, "gmap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], GoogleMapsMarkerTableComponent.prototype, "hideField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], GoogleMapsMarkerTableComponent.prototype, "onMapUpdate", void 0);
GoogleMapsMarkerTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-google-maps-marker-table',
        template: __webpack_require__("../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsMarkerTableComponent);

var _a;
//# sourceMappingURL=google-maps-marker-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps/google-maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mapSize {\n  width: 100%;\n  height: 350px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps/google-maps.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div>\n  <span>\n    {{title != null ? title : 'Google Maps'}}\n  </span>\n  <GoogleMapsMap \n    mapSize={this.props.mapSize} \n    center={this.state.center}\n    markers={this.state.markers}/>\n  <GoogleMapsMarkerTable \n    markers={this.state.markers} \n    handleAddMarker={this.handleAddMarker}\n    handleRemoveMarker={this.handleRemoveMarker} \n    handleMarkerTableClick={this.handleMarkerTableClick}/>\n</div>\n-->\n<div \n  class=\"mapSize\" \n  #mapContainer>\n  google maps\n</div> \n"

/***/ }),

/***/ "../../../../../src/app/GoogleMaps/google-maps/google-maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Constants__ = __webpack_require__("../../../../../src/app/utils/Constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        //init mapMarkers
        this.mapMarkers = [];
        //default map center
        if (!this.center) {
            this.center = { lat: 21.299772, lng: -157.815886 };
        }
        //default zoom level
        if (!this.zoom) {
            this.zoom = 8;
        }
    };
    /* callback for successful load */
    GoogleMapsComponent.prototype.load = function (response) {
        //double check google object is avaliable
        if (typeof (google) === 'object') {
            //load map with settings and save to this.map variable
            this.map = new google.maps.Map(this.mapContainer.nativeElement, {
                center: this.center,
                zoom: this.zoom
            });
            this.loadMarkers(this.markers);
            this.showMarkers();
        }
        else {
            console.log('google maps script loaded, but unable to find google.maps object');
        }
    };
    GoogleMapsComponent.prototype.error = function (response) {
        console.log("unable to load google maps script");
    };
    /* wait until component did mount to ensure 'map' ref is available */
    GoogleMapsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //check if google.maps is already loaded, if not build and load maps script
        if (!(typeof (google) === 'object') || !(typeof (google.maps) === 'object')) {
            //create script element
            var maps_googleapis_script = document.createElement('script');
            //add script attributes
            maps_googleapis_script.async = true;
            maps_googleapis_script.defer = true;
            maps_googleapis_script.onload = function (response) { return (_this.load(response)); };
            maps_googleapis_script.onerror = function (response) { return (_this.error(response)); };
            maps_googleapis_script.src =
                "https://maps.googleapis.com/maps/api/js?key=" +
                    __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].GOOGLE_API_KEY;
            //load script directly on to DOM
            document.body.appendChild(maps_googleapis_script);
        }
    };
    GoogleMapsComponent.prototype.ngOnDestroy = function () {
        //remove google.maps.event listeners
    };
    /* this should trigger when GoogleMaps center or markers are updated */
    GoogleMapsComponent.prototype.ngOnChanges = function () {
        if (this.map) {
            this.panToCenter(this.center);
            this.clearMarkers();
            this.loadMarkers(this.markers);
            this.showMarkers();
        }
    };
    GoogleMapsComponent.prototype.panToCenter = function (newCenter) {
        //recenter map over new center
        this.map.panTo(newCenter);
    };
    GoogleMapsComponent.prototype.loadMarkers = function (markers) {
        var _this = this;
        if (markers && markers.length > 0) {
            markers.forEach(function (marker) {
                var m = new google.maps.Marker({
                    position: { lat: marker.lat, lng: marker.lng },
                    map: _this.map,
                    icon: __WEBPACK_IMPORTED_MODULE_2__utils_Constants__["a" /* MARKERS */][marker.color]
                });
                _this.mapMarkers.push(m);
            });
        }
    };
    GoogleMapsComponent.prototype.setMarkers = function (map) {
        if (this.mapMarkers) {
            this.mapMarkers.forEach(function (marker) { return marker.setMap(map); });
        }
    };
    GoogleMapsComponent.prototype.showMarkers = function () {
        this.setMarkers(this.map);
    };
    GoogleMapsComponent.prototype.clearMarkers = function () {
        this.setMarkers(null);
        this.mapMarkers = [];
    };
    return GoogleMapsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('mapContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], GoogleMapsComponent.prototype, "mapContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], GoogleMapsComponent.prototype, "markers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], GoogleMapsComponent.prototype, "center", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], GoogleMapsComponent.prototype, "zoom", void 0);
GoogleMapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-google-maps',
        template: __webpack_require__("../../../../../src/app/GoogleMaps/google-maps/google-maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/GoogleMaps/google-maps/google-maps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsComponent);

var _a;
//# sourceMappingURL=google-maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".threejsBlockScene{\n  width: 350px;\n  height: 175px;\n  margin: auto;\n  display: block;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  #threejsSceneContainer\n  class=\"threejsBlockScene\" >\n  three.js scene\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_THREE__ = __webpack_require__("../../../../THREE/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreejsCubeSceneAlternativeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreejsCubeSceneAlternativeComponent = (function () {
    function ThreejsCubeSceneAlternativeComponent() {
        this.sceneWidth = 555;
        this.sceneHeight = 278;
    }
    ThreejsCubeSceneAlternativeComponent.prototype.ngOnInit = function () {
        this.createScene();
    };
    ThreejsCubeSceneAlternativeComponent.prototype.createScene = function () {
        var sceneWidth = this.sceneWidth;
        var sceneHeight = this.sceneHeight;
        var scene = new __WEBPACK_IMPORTED_MODULE_1_THREE__["a" /* Scene */]();
        var camera = new __WEBPACK_IMPORTED_MODULE_1_THREE__["b" /* PerspectiveCamera */](75, sceneWidth / sceneHeight, 0.1, 1000);
        var renderer = new __WEBPACK_IMPORTED_MODULE_1_THREE__["c" /* WebGLRenderer */]();
        renderer.setSize(sceneWidth, sceneHeight);
        this.sceneContainer.nativeElement.replaceWith(renderer.domElement);
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_THREE__["d" /* BoxGeometry */](1, 1, 1);
        var material = new __WEBPACK_IMPORTED_MODULE_1_THREE__["e" /* MeshBasicMaterial */]({ color: 0x00ff00 });
        var cube = new __WEBPACK_IMPORTED_MODULE_1_THREE__["f" /* Mesh */](geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
            renderer.render(scene, camera);
        };
        animate();
    };
    return ThreejsCubeSceneAlternativeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('threejsSceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], ThreejsCubeSceneAlternativeComponent.prototype, "sceneContainer", void 0);
ThreejsCubeSceneAlternativeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-threejs-cube-scene-alternative',
        template: __webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThreejsCubeSceneAlternativeComponent);

var _a;
//# sourceMappingURL=threejs-cube-scene-alternative.component.js.map

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".threejsBlockScene{\n  width: 350px;\n  height: 175px;\n  margin: auto;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n  #threejsSceneContainer\n  class=\"threejsBlockScene\" >\n  three.js scene\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreejsCubeSceneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreejsCubeSceneComponent = (function () {
    function ThreejsCubeSceneComponent() {
        this.sceneWidth = 555;
        this.sceneHeight = 278;
    }
    ThreejsCubeSceneComponent.prototype.ngOnInit = function () { };
    /* callback for successful load */
    ThreejsCubeSceneComponent.prototype.load = function (response) {
        //double check THREE object is avaliable
        if (typeof (THREE) === 'object') {
            //load the three.js scene 
            this.loadScene();
        }
        else {
            console.log('three.js script loaded, but unable to find THREE object');
        }
    };
    ThreejsCubeSceneComponent.prototype.error = function (response) {
        console.log("unable to load three.js script");
    };
    /* wait until component did mount to ensure 'sceneContainer' ref is available */
    ThreejsCubeSceneComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //check if THREE is already loaded, if not build and load three.js script
        if (!(typeof (THREE) === 'object')) {
            //create script element
            var three_script = document.createElement('script');
            //add script attributes
            three_script.onload = function (response) { return (_this.load(response)); };
            three_script.onerror = function (response) { return (_this.error(response)); };
            three_script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js";
            //load script directly on to DOM
            document.body.appendChild(three_script);
        }
    };
    ThreejsCubeSceneComponent.prototype.ngOnDestroy = function () {
        //remove three.js event listeners
    };
    ThreejsCubeSceneComponent.prototype.loadScene = function () {
        var sceneWidth = this.sceneWidth;
        //this.props.width ? this.props.width : this.defaultConfig.sceneWidth;
        var sceneHeight = this.sceneHeight;
        //this.props.height ? this.props.height : this.defaultConfig.sceneHeight;
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(sceneWidth, sceneHeight);
        this.sceneContainer.nativeElement.replaceWith(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
            renderer.render(scene, camera);
        };
        animate();
    };
    return ThreejsCubeSceneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('threejsSceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ElementRef */]) === "function" && _a || Object)
], ThreejsCubeSceneComponent.prototype, "sceneContainer", void 0);
ThreejsCubeSceneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-threejs-cube-scene',
        template: __webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThreejsCubeSceneComponent);

var _a;
//# sourceMappingURL=threejs-cube-scene.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".borderTop {\n  border-top:2px solid #ccc;\n}\n\n.borderLeft {\n  border-left:2px solid #ccc;\n}\n\n.borderRight {\n  border-right:2px solid #ccc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-center-page-title [title]=\"'Angular Test App'\"></app-center-page-title>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-6 borderRight\">\n      <span>Mutable Data Table</span>\n      <app-mutable-data-table [data]=\"animal_data\" [hideField]=\"['id']\"></app-mutable-data-table>\n    </div>\n    <div class=\"col-xs-6\">\n      <div [ngStyle]=\"{'min-height.px':200}\">\n          <span>d3.js</span>\n          <app-d3-bar-chart [data]=\"city_data\"></app-d3-bar-chart>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <hr class=\"borderTop\"/>\n    <div class=\"col-xs-12\">\n      <span>Google Maps</span>\n      <app-google-maps [center]=\"map_center\" [markers]=\"map_markers\" > </app-google-maps>\n      <app-google-maps-marker-table [gmap]=\"MAPS\" [hideField]=\"['id']\" (onMapUpdate)=\"updateMap($event)\"> </app-google-maps-marker-table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <hr class=\"borderTop\"/>\n    <div class=\"col-xs-6\">\n      <span>Three JS</span>\n      <app-threejs-cube-scene></app-threejs-cube-scene>\n      <!--app-threejs-cube-scene-alternative></app-threejs-cube-scene-alternative-->\n    </div>\n    <div class=\"col-xs-6 borderLeft\">\n        <span>Unity WebGL</span>\n        <app-unity-webgl [sceneSource]=\"'./assets/unity/Builds.json'\"></app-unity-webgl>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.ANIMALS = [
            { id: "2104270841", animal: "Cat", age: "3", color: "Brown" },
            { id: "245082176", animal: "Dog", age: "2", color: "Orange" },
            { id: "-1846001306", animal: "Pig", age: "1", color: "White" }
        ];
        this.MAPS = {
            markers: [{
                    id: 1,
                    color: "orange_dot",
                    lat: 21.299772,
                    lng: -157.815886
                }],
            center: {
                lat: 21.299772,
                lng: -157.815886
            }
        };
        this.CITIES = [
            { "population": 4.4, "city": "Seattle" },
            { "population": 2.1, "city": "Dallas" },
            { "population": 17.2, "city": "New York" },
            { "population": 3.8, "city": "Boston" },
            { "population": 10.5, "city": "Los Angeles" }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.updateAll();
    };
    AppComponent.prototype.updateMap = function (e) {
        this.MAPS = e;
        this.updateAll();
    };
    AppComponent.prototype.updateAll = function () {
        this.animal_data = this.ANIMALS;
        this.map_center = this.MAPS.center;
        this.map_markers = this.MAPS.markers;
        this.city_data = this.CITIES.map(function (row) { return ([row.city, row.population]); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__center_page_title_center_page_title_component__ = __webpack_require__("../../../../../src/app/center-page-title/center-page-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutable_data_table_mutable_data_table_component__ = __webpack_require__("../../../../../src/app/mutable-data-table/mutable-data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__D3_d3_bar_chart_d3_bar_chart_component__ = __webpack_require__("../../../../../src/app/D3/d3-bar-chart/d3-bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__GoogleMaps_google_maps_google_maps_component__ = __webpack_require__("../../../../../src/app/GoogleMaps/google-maps/google-maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ThreeJS_threejs_cube_scene_threejs_cube_scene_component__ = __webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene/threejs-cube-scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThreeJS_threejs_cube_scene_alternative_threejs_cube_scene_alternative_component__ = __webpack_require__("../../../../../src/app/ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__unity_webgl_unity_webgl_component__ = __webpack_require__("../../../../../src/app/unity-webgl/unity-webgl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__GoogleMaps_google_maps_marker_table_google_maps_marker_table_component__ = __webpack_require__("../../../../../src/app/GoogleMaps/google-maps-marker-table/google-maps-marker-table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__center_page_title_center_page_title_component__["a" /* CenterPageTitleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__mutable_data_table_mutable_data_table_component__["a" /* MutableDataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_6__D3_d3_bar_chart_d3_bar_chart_component__["a" /* D3BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__GoogleMaps_google_maps_google_maps_component__["a" /* GoogleMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__ThreeJS_threejs_cube_scene_threejs_cube_scene_component__["a" /* ThreejsCubeSceneComponent */],
            __WEBPACK_IMPORTED_MODULE_10__unity_webgl_unity_webgl_component__["a" /* UnityWebglComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ThreeJS_threejs_cube_scene_alternative_threejs_cube_scene_alternative_component__["a" /* ThreejsCubeSceneAlternativeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__GoogleMaps_google_maps_marker_table_google_maps_marker_table_component__["a" /* GoogleMapsMarkerTableComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/center-page-title/center-page-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/center-page-title/center-page-title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h1>{{title}}</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/center-page-title/center-page-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterPageTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CenterPageTitleComponent = (function () {
    function CenterPageTitleComponent() {
    }
    CenterPageTitleComponent.prototype.ngOnInit = function () {
    };
    return CenterPageTitleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], CenterPageTitleComponent.prototype, "title", void 0);
CenterPageTitleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-center-page-title',
        template: __webpack_require__("../../../../../src/app/center-page-title/center-page-title.component.html"),
        styles: [__webpack_require__("../../../../../src/app/center-page-title/center-page-title.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CenterPageTitleComponent);

//# sourceMappingURL=center-page-title.component.js.map

/***/ }),

/***/ "../../../../../src/app/mutable-data-table/mutable-data-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  height: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mutable-data-table/mutable-data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"data\" class=\"table table-bordered table-condensed table-hover table-striped\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let c of tableCategories\">\n        {{c.charAt(0).toUpperCase()+c.slice(1)}}\n      </th>\n      <th class=\"text-center\">\n        <button \n          class=\"btn btn-xs\"\n          [ngClass]=\"isPlot ? 'btn-success' : 'btn-default'\"\n          (click)=\"isPlot=!isPlot\">\n          Plot\n        </button>\n      </th>\n    <tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of data\">\n      <td *ngFor=\"let cat of tableCategories\">\n        {{row[cat]}}\n      </td>\n      <td class=\"text-center\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteRow(row.id)\">✖</button>\n      </td>\n    </tr>\n    <!--DataTableAppendRow [categories]=\"cleanCategories\" handleRowAdd={this.handleRowAdd} /-->\n    <tr>\n      <td *ngFor=\"let cat of tableCategories;let i = index\">\n        <input \n          class=\"form-control\" \n          type=\"text\" \n          (keypress)=\"handleKeyPress($event)\"\n          [(ngModel)]=\"inputRefList[cat]\" \n          name={{cat}} \n          placeholder={{toUpper(cat)}}>\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"handleSubmit()\">add</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-d3-bar-chart *ngIf=\"isPlot\" [data]=\"plot_data\"></app-d3-bar-chart>\n"

/***/ }),

/***/ "../../../../../src/app/mutable-data-table/mutable-data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_capitalize__ = __webpack_require__("../../../../../src/app/utils/capitalize.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_hashCode__ = __webpack_require__("../../../../../src/app/utils/hashCode.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutableDataTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MutableDataTableComponent = (function () {
    function MutableDataTableComponent() {
        //initialize plot
        this.isPlot = false;
        this.inputRefList = {};
    }
    MutableDataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        //remove catagries in hide array
        if (this.hideField) {
            this.tableCategories = Object.keys(this.data[0]).filter(function (cat) { return !_this.hideField.includes(cat); });
        }
        else {
            this.tableCategories = Object.keys(this.data[0]);
        }
        /*
          //covert data to array
          this.data_array = this.data.map(
            data_row => ( this.tableCategories.map( cat => data_row[cat])
            )
          );
       */
        //plot data
        this.updatePlotData();
    };
    MutableDataTableComponent.prototype.updatePlotData = function () {
        var _this = this;
        //update plot data
        if (this.tableCategories) {
            this.plot_data = this.data.map(function (row) { return ([row[_this.tableCategories[0]], row[_this.tableCategories[1]]]); });
        }
    };
    MutableDataTableComponent.prototype.toUpper = function (word) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_capitalize__["a" /* default */])(word);
    };
    MutableDataTableComponent.prototype.deleteRow = function (rowId) {
        var toDelete = new Set([rowId]);
        this.data = this.data.filter(function (row) { return !toDelete.has(row.id); });
        this.updatePlotData();
    };
    MutableDataTableComponent.prototype.handleKeyPress = function (e) {
        console.log('Hi');
        if (e.key == 'Enter') {
            e.preventDefault();
            this.handleSubmit();
        }
    };
    MutableDataTableComponent.prototype.handleSubmit = function () {
        //string of object to computer hash for id
        var hashString = '';
        //row object
        var rowObj = {};
        for (var cat in this.inputRefList) {
            if (this.inputRefList.hasOwnProperty(cat)) {
                hashString += this.inputRefList[cat];
                rowObj[cat] = this.inputRefList[cat];
            }
        }
        //get hashcode and set to id field
        rowObj['id'] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_hashCode__["a" /* default */])(hashString);
        //lift change up to parent
        this.data = this.data.concat([rowObj]);
        //reset input fields
        this.reset();
        // update plot data
        this.updatePlotData();
    };
    MutableDataTableComponent.prototype.reset = function () {
        for (var cat in this.inputRefList) {
            if (this.inputRefList.hasOwnProperty(cat)) {
                this.inputRefList[cat] = '';
            }
        }
    };
    return MutableDataTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], MutableDataTableComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], MutableDataTableComponent.prototype, "hideField", void 0);
MutableDataTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-mutable-data-table',
        template: __webpack_require__("../../../../../src/app/mutable-data-table/mutable-data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mutable-data-table/mutable-data-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MutableDataTableComponent);

//# sourceMappingURL=mutable-data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/unity-webgl/unity-webgl.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playerStyle {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unity-webgl/unity-webgl.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  id=\"unityGameContainer\">\n  unity webgl\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/unity-webgl/unity-webgl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnityWebglComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnityWebglComponent = (function () {
    function UnityWebglComponent() {
    }
    UnityWebglComponent.prototype.ngOnInit = function () { };
    /* callback for successful load */
    UnityWebglComponent.prototype.load = function (response) {
        //double check UnityLoader object is avaliable
        if (typeof (UnityLoader) === 'object') {
            //load game instance with settings and save to this.gameInstance variable
            this.gameInstance = UnityLoader.instantiate("unityGameContainer", this.sceneSource);
        }
        else {
            console.log('unity loader script loaded, but unable to find UnityLoader object');
        }
    };
    UnityWebglComponent.prototype.error = function (response) {
        console.log("unable to load unity loader script");
    };
    /* wait until component did mount to ensure 'gameContainer' ref is available */
    UnityWebglComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //check if UnityLoader is already loaded, if not build and load UnityLoader script
        if (!(typeof (UnityLoader) === 'object')) {
            //create script element
            var UnityLoader_script = document.createElement('script');
            //add script attributes
            UnityLoader_script.onload = function (response) { return (_this.load(response)); };
            UnityLoader_script.onerror = function (response) { return (_this.error(response)); };
            UnityLoader_script.src = "./assets/unity/UnityLoader.js";
            //load script directly on to DOM
            document.body.appendChild(UnityLoader_script);
        }
    };
    UnityWebglComponent.prototype.ngOnDestroy = function () {
        //remove UnityLoader event listeners
    };
    return UnityWebglComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], UnityWebglComponent.prototype, "sceneSource", void 0);
UnityWebglComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-unity-webgl',
        template: __webpack_require__("../../../../../src/app/unity-webgl/unity-webgl.component.html"),
        styles: [__webpack_require__("../../../../../src/app/unity-webgl/unity-webgl.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UnityWebglComponent);

//# sourceMappingURL=unity-webgl.component.js.map

/***/ }),

/***/ "../../../../../src/app/utils/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MARKERS; });
var MARKERS = {
    yellow: "//maps.google.com/mapfiles/ms/micons/yellow.png",
    yellow_dot: "//maps.google.com/mapfiles/ms/micons/yellow-dot.png",
    blue: "//maps.google.com/mapfiles/ms/micons/blue.png",
    blue_dot: "//maps.google.com/mapfiles/ms/micons/blue-dot.png",
    green: "//maps.google.com/mapfiles/ms/micons/green.png",
    green_dot: "//maps.google.com/mapfiles/ms/micons/green-dot.png",
    lightblue: "//maps.google.com/mapfiles/ms/micons/lightblue.png",
    lightblue_dot: "//maps.google.com/mapfiles/ms/micons/ltblue-dot.png",
    orange: "//maps.google.com/mapfiles/ms/micons/orange.png",
    orange_dot: "//maps.google.com/mapfiles/ms/micons/orange-dot.png",
    pink: "//maps.google.com/mapfiles/ms/micons/pink.png",
    pink_dot: "//maps.google.com/mapfiles/ms/micons/pink-dot.png",
    purple: "//maps.google.com/mapfiles/ms/micons/purple.png",
    purple_dot: "//maps.google.com/mapfiles/ms/micons/purple-dot.png",
    red: "//maps.google.com/mapfiles/ms/micons/red.png",
    red_dot: "//maps.google.com/mapfiles/ms/micons/red-dot.png",
    yellow_pushpin: "//maps.google.com/mapfiles/ms/micons/ylw-pushpin.png",
    blue_pushpin: "//maps.google.com/mapfiles/ms/micons/blue-pushpin.png",
    green_pushpin: "//maps.google.com/mapfiles/ms/micons/grn-pushpin.png",
    lightblue_pushpin: "//maps.google.com/mapfiles/ms/micons/ltblu-pushpin.png",
    pink_pushpin: "//maps.google.com/mapfiles/ms/micons/pink-pushpin.png",
    purple_pushpin: "//maps.google.com/mapfiles/ms/micons/purple-pushpin.png",
    red_pushpin: "//maps.google.com/mapfiles/ms/micons/red-pushpin.png",
};
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "../../../../../src/app/utils/capitalize.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = capitalize;
/* capitalizes strings */
/* capitalizes strings */ function capitalize(word) {
    return word.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
}
//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ "../../../../../src/app/utils/hasNull.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* check if a javascript obj contains a null value for a property */
function hasNull(Obj) {
    for (var key in Obj) {
        if (typeof (Obj[key]) == 'undefined') {
            return true;
        }
        else if (typeof (Obj[key]) == 'string' && (Obj[key] == null)) {
            return true;
        }
        else if (typeof (Obj[key]) == 'number' && isNaN(Obj[key])) {
            return true;
        }
    }
    return false;
}
/* harmony default export */ __webpack_exports__["a"] = (hasNull);
//# sourceMappingURL=hasNull.js.map

/***/ }),

/***/ "../../../../../src/app/utils/hashCode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hashCode;
/* generates a hashcode for a string */
/* generates a hashcode for a string */ function hashCode(word) {
    var hash = 0, i, chr;
    if (word.length === 0)
        return hash;
    for (i = 0; i < word.length; i++) {
        chr = word.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
//# sourceMappingURL=hashCode.js.map

/***/ }),

/***/ "../../../../../src/app/utils/isValidCoordinate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* validate lat lng coordiates */
function isValidCoordinate(lat, lng) {
    var LAT = parseFloat(lat);
    var LNG = parseFloat(lng);
    if (LAT < (-90) || 90 < LAT)
        return false;
    if (LNG < (-180) || 180 < LNG)
        return false;
    return true;
}
/* harmony default export */ __webpack_exports__["a"] = (isValidCoordinate);
//# sourceMappingURL=isValidCoordinate.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    GOOGLE_API_KEY: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map