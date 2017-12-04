$(document).ready(function() //dokuemtum készen áll, minden betöltődött
{
    daySelector();
    getMonthListandDayList();
    

});

function daySelector()
{
    $('#calendar >  table tbody td').click(function()
    {
        var ix = $(this).attr('data-ix');
        console.log('Clicked: '+ix);
    //    $(this).css( 'background', "lime" );
    //    $('#displayTasks h2').html("Ez a felugróablak új címe");
        $('#displayTasks').fadeIn(1100);
    });
    
    var taskPanelClose = true;
    
    $('#displayTasks').mouseup(function()
    {
        if(taskPanelClose) $('#displayTasks').fadeOut(500);
        taskPanelClose = true;
    });
    $('#displayTasks *').mousedown(function()
    {
        taskPanelClose = false;
    });
}

function getMonthListandDayList()
{
    $('#container > header nav ul li a').click(function(e) 
    {
        e.preventDefault(); // az ANCHOR miatt kell...link...submit..aminek van ala funkciója..ezzel letiltom a saját klikkeseményét...
        $()
        var id = $(this).attr('id');
        if( id == "linkListMonths" )
        {
            $('#displayMonths').fadeIn(1100);
        }else {
            $('#displayDays').fadeIn(1100);
        }
    });
    
    var taskPanelClose = true;
    $('#displayMonths').mouseup(function () 
    {
        if(taskPanelClose) $('#displayMonths').fadeOut(500);
        taskPanelClose = true;
        
    });
    $('#displayDays').mouseup(function () 
    {
        if(taskPanelClose) $('#displayDays').fadeOut(500);
        taskPanelClose = true;
        
    });
    $('#displayMonths *').mousedown(function() // Itt a * a benne lévő elemekre vonatkozik..
    {
        taskPanelClose = false;
    });
    $('#displayDays *').mousedown(function()
    {
        taskPanelClose = false;
    });
}