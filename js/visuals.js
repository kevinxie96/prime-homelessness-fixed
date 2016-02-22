var race_data = [
    {
        value: 44,
        color:"#801010",
        highlight: "rgba(128,16,16,0.8)",
        label: "Black"
    },
    {
        value: 11,
        color: "#0080FF",
        highlight: "rgba(0,128,255,0.7)",
        label: "Latino"
    },
    {
        value: 44,
        color: "#A96619",
        highlight: "rgba(169,102,25, 0.8)",
        label: "White"
    },
    {
        value: 1,
        color: "black",
        highlight: "rgba(0,0,0, 0.8)",
        label: "Other(Pacific islander, Asian)"
    },

];


var gender_data = [
    {

        value: 67,
        color:"#DB9342",
        highlight: "rgba(219,147,66,0.8)",
        label: "Male"
    },
    {
        value: 33,
        color: "#729CBC",
        highlight: "#9ACBF0",
        label: "Female"
    },

];

var needs_data = [
	{
        value: 12,
        color: "#D18C3C",
        highlight: "rgba(209,140,60,0.8)",
        label: "Veteran"
    },
    {
        value: 35,
        color:"#4C97C9",
        highlight: "rgba(76,151,201,0.8)",
        label: "Mental Illness"
    },
    {
        value: 23,
        color: "#6899A1",
        highlight: "rgba(104,153,161,0.8)",
        label: "Disability"
    },
    {
        value: 30,
        color: "#A42424",
        highlight: "rgba(164,36,36,0.8)",
        label: "Addiction"
    }
    
];
Chart.types.Doughnut.extend({
        name: "DoughnutAlt",
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);
            this.chart.ctx.fillStyle = 'black';
            this.chart.ctx.textAlign = "center";
            this.chart.ctx.textBaseline = 'middle';
            this.chart.ctx.font = Chart.helpers.fontString(30, "italic bold", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif");
            this.chart.ctx.fillText("Race", this.chart.width / 2 , this.chart.height / 2);
        }
    });
Chart.types.Doughnut.extend({
        name: "DoughnutAlt1",
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);
            this.chart.ctx.fillStyle = 'black';
            this.chart.ctx.textAlign = "center";
            this.chart.ctx.textBaseline = 'middle';
            this.chart.ctx.font = Chart.helpers.fontString(30, "italic bold", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif");
            this.chart.ctx.fillText("Gender", this.chart.width / 2 , this.chart.height / 2);
        }
    });
Chart.types.Doughnut.extend({
        name: "DoughnutAlt2",
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);
            this.chart.ctx.fillStyle = 'black';
            this.chart.ctx.textAlign = "center";
            this.chart.ctx.textBaseline = 'middle';
            this.chart.ctx.font = Chart.helpers.fontString(30, "italic bold", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif");
            this.chart.ctx.fillText("Special", this.chart.width / 2 , this.chart.height / 2.3);
            this.chart.ctx.fillText("Needs", this.chart.width / 2 , this.chart.height / 1.7);
        }
    });

$(document).ready(function(){
var ctx1 = $("#RaceChart").get(0).getContext('2d');
var myDoughnutChart1 = new Chart(ctx1).DoughnutAlt(race_data, {
    
	  segmentShowStroke: false,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + '%' %>",
    /*onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx1.font="italic bold 2em Helvetica";
      ctx1.textBaseline="middle"; 
        
      var middletext = "Race";
      var textWidth = ctx1.measureText(middletext).width;
      
      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx1.fillText(middletext, txtPosx, canvasHeight/2);

      legend(document.getElementById("js-legend-race"), race_data, myDoughnutChart1, "<%=label%>: <%=value%>%");
        },
        */
       
    });
legend(document.getElementById("js-legend-race"), race_data, myDoughnutChart1, "<%=label%>: <%=value%>%");
var ctx2 = $("#GenderChart").get(0).getContext('2d');
var myDoughnutChart2 = new Chart(ctx2).DoughnutAlt1(gender_data, {
    
    segmentShowStroke: false,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + '%' %>",
    /*onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx2.font="italic bold 2em Helvetica";
      ctx2.textBaseline="middle"; 
        
      var middletext = "Gender";
      var textWidth = ctx1.measureText(middletext).width;
      
      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx2.fillText(middletext, txtPosx, canvasHeight/2);
        
      
        },
        */
    });
legend(document.getElementById("js-legend-gender"), gender_data, myDoughnutChart2, "<%=label%>: <%=value%>%");

var ctx3 = $("#SpecialNeeds").get(0).getContext('2d');
var myDoughnutChart3 = new Chart(ctx3).DoughnutAlt2(needs_data, {
    
    segmentShowStroke: false,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + '%' %>",
    /*onAnimationComplete: function() {
      
      var canvasWidth = $('#RaceChart').width();
      var canvasHeight = $('#RaceChart').height();

      ctx3.font="italic bold 2em Helvetica";
      ctx3.textBaseline="middle"; 
        
      var middletext = "Special";
      var middletext2 = "Needs";
      var textWidth = ctx3.measureText(middletext).width;
      var textWidth2 = ctx3.measureText(middletext2).width;

      var txtPosx = Math.round((canvasWidth - textWidth)/2);
      ctx3.fillText(middletext, txtPosx, canvasHeight/2.4);

      var txtPosx1 = Math.round((canvasWidth - textWidth2)/2);
      ctx3.fillText(middletext2, txtPosx1, canvasHeight/1.7);
        

      legend(document.getElementById("js-legend-needs"), needs_data, myDoughnutChart3, "<%=label%>: <%=value%>%");
        },
        */
    });
legend(document.getElementById("js-legend-needs"), needs_data, myDoughnutChart3, "<%=label%>: <%=value%>%");
});
    
        
    

