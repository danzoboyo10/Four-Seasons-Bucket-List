// require dependencies 
const express = require('express'); //node module use the singleton pattern
const Season = require('../models/season')

// initialize the router object
const router = express.Router(); // factory function - function that returns an object once invoked 


// define router/controller code 
// SEED DATA: 
const seasonSeed = require('../models/seasonSeed.js');

router.get('/seed', (req, res) => {
	Season.deleteMany({}, (error, allSeasons) => {});

	Season.create(seasonSeed, (error, data) => {
		res.redirect('/seasons');
	});
});

//ROUTES




//INDEX

router.get('/', (req, res) => {
	Season.find({}, (error, allSeasons) => {
		res.render('index.ejs', {
			seasons: allSeasons,
		});
	});
});


//NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');


})
//DELETE
router.delete('/:id', (req, res) => {
	Season.findByIdAndDelete(req.params.id, (err, data) => {
		res.redirect("/seasons")
	})
})

// Update
router.put("/:id", (req, res) => {
	if (req.body.completed === "on") {
	  req.body.completed = true
	} else {
	  req.body.completed = false
	}
  
	Season.findByIdAndUpdate(
	  req.params.id,
	  req.body,
	  {
		new: true,
	  },
	  (error, updatedSeason) => {
		res.redirect(`/seasons/${req.params.id}`)
	  }
	)
  })




// CREATE
router.post('/', (req, res) => {
    if (req.body.completed === 'on') {
		//if checked, req.body.completed is set to 'on'
		req.body.completed = true;
	} else {
		//if not checked, req.body.completed is undefined
		req.body.completed = false;
	}
    // 
	Season.create(req.body, (error, createdSeason) => {
		res.redirect('/seasons');
	});
});

// Edit
router.get("/:id/edit", (req, res) => {
	Season.findById(req.params.id, (error, foundSeason) => {
	  res.render("edit.ejs", {
		season: foundSeason,
	  })
	})
  })
// Show for Summer
router.get('/summer', (req, res) => {
	Season.find({}, (err, foundSeason) => {
		console.log(foundSeason)
		res.render('show/summerShow.ejs', {
			season: foundSeason, 
		});
	});
});
// Show for Spring
router.get('/spring', (req, res) => {
	Season.find({}, (err, foundSeason) => {
		console.log(foundSeason)
		res.render('show/springShow.ejs', {
			season: foundSeason, 
		});
	});
});

// Show for Fall
router.get('/fall', (req, res) => {
	Season.find({}, (err, foundSeason) => {
		console.log(foundSeason)
		res.render('show/fallShow.ejs', {
			season: foundSeason, 
		});
	});
});
// Show for Winter
router.get('/winter', (req, res) => {
	Season.find({}, (err, foundSeason) => {
		console.log(foundSeason)
		res.render('show/winterShow.ejs', {
			season: foundSeason, 
		});
	});
});

// Show
router.get('/:id', (req, res) => {
	Season.findById(req.params.id, (err, foundSeason) => {
		console.log(foundSeason)
		res.render('show/showAll.ejs', {
			season: foundSeason, 
		});
	});
});





// export the router object 
module.exports = router;