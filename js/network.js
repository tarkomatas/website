			// create an array with nodes
			var nodes = new vis.DataSet([
				{id: 1, color: 'rgba(97,195,238,0.5)'},
				{id: 2, color: 'rgba(226,88,246,0.5)'},
				{id: 3, color: 'rgba(226,88,246,0.5)'},
				{id: 4, color: 'rgba(226,88,246,0.5)'},
				{id: 5, color: 'rgba(97,195,238,0.5)'},
				{id: 6, color: 'rgba(241,48,48,0.5)'},
				{id: 7, color: 'rgba(241,48,48,0.5)'},
				{id: 8, color: 'rgba(20,163,54,0.5)'},
				{id: 9, color: 'rgba(20,163,54,0.5)'},
				{id: 10, color: 'rgba(20,163,54,0.5)'}
			]);

			// create an array with edges
			var edges = new vis.DataSet([
				{from: 1, to: 3},
				{from: 1, to: 2},
				{from: 2, to: 4},
				{from: 2, to: 4},
				{from: 2, to: 7},
				{from: 2, to: 6},
				{from: 2, to: 5},
				{from: 3, to: 4},
				{from: 3, to: 5},
				{from: 3, to: 1},
				{from: 4, to: 1},
				{from: 4, to: 5},
				{from: 4, to: 7},
				{from: 5, to: 1},
				{from: 5, to: 2},
				{from: 5, to: 3},
				{from: 6, to: 1},
				{from: 6, to: 7},
				{from: 6, to: 5},
				{from: 7, to: 5},
				{from: 7, to: 4},
				{from: 8, to: 9},
				{from: 8, to: 10},
				{from: 8, to: 1},
				{from: 8, to: 2},
				{from: 8, to: 3},
				{from: 9, to: 1},
				{from: 9, to: 2},
				{from: 9, to: 3},
				{from: 9, to: 4},
				{from: 10, to: 5},
				{from: 10, to: 4}
			]);

			// create a network
			var container = document.getElementById('network-plot');

			// provide the data in the vis format
			var data = {
				nodes: nodes,
				edges: edges
			};
			var options = {
					nodes: {
						size: 40,

					},
					edges: {
						width: 2,
						color: '#848484',
					},
					interaction:{
						zoomView: false
					}
				};

			// initialize your network!
			var network = new vis.Network(container, data, options);
