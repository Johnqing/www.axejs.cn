/**
export default function(router){
	router.get('/', (req, res) => {
		return res.render('index');
	});
	return router;
}
*/

module.exports = function(router){
	router.get('/', function(req, res){
		return res.render('index');
	})
	return router
}

