export default function(router){
	router.get('/', (req, res) => {
		return res.render('index');
	});
	return router;
}


