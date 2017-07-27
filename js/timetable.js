    // create a dataset with items
    // we specify the type of the fields `start` and `end` here to be strings
    // containing an ISO date. The fields will be outputted as ISO dates
    // automatically getting data from the DataSet via items.get().
    var items = new vis.DataSet({
        type: { start: 'ISODate', end: 'ISODate' }
    });
    var groups = new vis.DataSet([{
        id: 'bar', content:'Education'
    },{
        id: 'foo', content:'Work experience'
    }]);
    // add items to the DataSet
    items.add([
      {id: 0, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Social Studies (BA)</span><span> at Pazmany Peter Catholic University</span></div>', start: '2010-08', end: '2013-08', group:'bar'},
  		{id: 1, content: '<div style="display: flex; align-items: center;"><img src="img/eltecimer1.png" style="width:30px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Survey Statistic (MSc)</span><span> at Eotvos Lorand University</span></div>', start: '2013-09', end: '2016-08',group:'bar'},
      {id: 2, content: '<div style="display: flex; align-items: center;"><img src="img/educatio-logo.png" style="width:60px; height:20px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Trainee</span><span> at Educatio Public Service Nonprofit LLC</span></div>', start: '2012-07-23', end: '2013-05-13',group:'foo'},
      {id: 3, content: '<div style="display: flex; align-items: center;"><img src="img/educatio-logo.png" style="width:60px; height:20px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Higher Education Analyst</span><span> at Educatio Public Service Nonprofit LLC</span></div>', start: '2013-03-01', end: '2013-05-01',group:'foo'},
  		{id: 4, content: '<div style="display: flex; align-items: center;"><img src="img/ofi-logo.png" style="width:70px; height:20px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Trainee</span><span> at Hungarian Institute for Educational Research</span></div>', start: '2013-06-01', end: '2013-08-31',group:'foo'},
  		{id: 5, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Trainee</span><span> at Pazmany Peter Catholic University</span></div>', start: '2012-09-01', end: '2013-03-31',group:'foo'},
  		{id: 6, content: '<span style ="color:red; padding-right: 5px">Research Lead, Interviewer</span> at Szocio+ Social Research Group', start: '2012', end: '2015',group:'foo'},
  		{id: 7, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Graduates Career Tracking Rapporteur</span><span> at Pazmany Peter Catholic University</span></div>', start: '2013-04-01', end: '2014-05-30',group:'foo'},
  		{id: 8, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Higher Education Analyst </span><span> at Pazmany Peter Catholic University</span></div>', start: '2014-06-01', end: new Date(), group:'foo'},
  		{id: 9, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Head of Strategic Group</span><span> at Pazmany Peter Catholic University</span></div>', start: '2015-09-01', end: new Date(), group:'foo'},
  		{id: 10, content: '<div style="display: flex; align-items: center;"><img src="img/ppke-logo.png" style="width:20px; height:30px; padding-right: 5px"><span style ="color:red; padding-right: 5px">Guest Lecturer</span><span> at Pazmany Peter Catholic University</span></div>', start: '2016-09-12', end: '2017-01-31', group:'foo'},
		]);

    var container = document.getElementById('visualization');
    var options = {
      moveable: true,
      zoomable: false
    };

    var timeline = new vis.Timeline(container, items, groups, options);
