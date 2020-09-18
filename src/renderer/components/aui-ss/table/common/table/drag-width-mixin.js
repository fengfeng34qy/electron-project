"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=require("../utils/utils.js"),_utils2=_interopRequireDefault(_utils);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}exports.default={data:function(){return{draggingColumn:null,isDragging:!1,draggingStartX:0,draggingEndX:0,minColumnWidth:15}},methods:{handleTitleMouseMove:function(t,i){var e,n=void 0;if(this.isDragging&&this.setDragLinePosition(t),Array.isArray(i)){if(i.length>1)return!1;i=i[0]}if(!this.showVerticalBorder)return!1;for(n=t.target;n&&(n.className&&-1===n.className.indexOf("v-table-title-cell")||!n.className);)n=n.parentNode;e=n.getBoundingClientRect();var s=document.body.style;e.width>=this.minColumnWidth&&e.right-t.pageX<10?(this.isDragging||(this.draggingColumn=this.internalColumns.find(function(t){return t.field===i})),s.cursor="col-resize"):this.isDragging||(this.draggingColumn=null,s.cursor="")},handleTitleMouseOut:function(){this.isDragging||(document.body.style.cursor="")},handleTitleMouseDown:function(t,i){if(!this.draggingColumn||!this.showVerticalBorder)return!1;this.isDragging=!0,this.draggingStartX=t.clientX,this.setDragLinePosition(t),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},_utils2.default.bind(document,"mousemove",this.handleDragMouseMove),_utils2.default.bind(document,"mouseup",this.handleDragMouseUp)},handleDragMouseMove:function(t){if(!this.isDragging)return!1;this.setDragLinePosition(t)},setDragLinePosition:function(t){var i=_utils2.default.getViewportOffset(this.$el).left,e=this.$el.querySelector(".v-table-drag-line"),n=t.clientX;this.draggingColumn.width+(n-this.draggingStartX)<=this.minColumnWidth||(e.style.left=n-i+"px")},handleDragMouseUp:function(t){if(!this.isDragging)return!1;this.draggingEndX=t.clientX;var i=this.draggingEndX-this.draggingStartX;if(Math.abs(i)>1){var e=this.draggingColumn;e.width+i<this.minColumnWidth?e.width=this.minColumnWidth:e.width+=i}var n=this.$el.querySelector(".v-table-rightview .v-table-body");this.totalColumnsWidth<this.internalWidth?(n.style.overflowX="hidden",n.classList.remove("v-table-rightview-special-border")):(n.style.overflowX="scroll",this.hasFrozenColumn||n.classList.add("v-table-rightview-special-border")),this.draggingColumn=null,document.body.style.cursor="",this.isDragging=!1,_utils2.default.unbind(document,"mousemove",this.handleDragMouseMove),_utils2.default.unbind(document,"mouseup",this.handleDragMouseUp)}}};