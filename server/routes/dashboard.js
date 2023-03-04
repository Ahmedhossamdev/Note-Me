const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const {
    dashboard,
    dashboardViewNote,
    dashboardUpdateNote,
    dashboardDeleteNote,
    dashboardAddNote,
    dashboardAddNoteSubmit,
    dashboardSearch,
    dashboardSearchSubmit,
} = require('../controllers/dashbordController');


/*
 Dashboard Routes
*/

router.get('/dashboard', isLoggedIn, dashboard);
router.get('/dashboard/item/:id', isLoggedIn,dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn,dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggedIn,dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn, dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedIn, dashboardSearch);
router.post('/dashboard/search', isLoggedIn, dashboardSearchSubmit);



module.exports = router;
