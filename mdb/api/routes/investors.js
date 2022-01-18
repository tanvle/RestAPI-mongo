
// router skeleton
const mongo = require('mongodb');
const db = require('../../dbase');
    const colName = 'investors';

module.exports = function(router) {

    router.get('/investors', (req, res) => {
        return res.send('GET all - not yet implemented'); 
    });

    router.post('/investors', (req, res) => {
        return res.send('POST - not yet implemented'); 
    });
    
    router.get('/investors/:id', (req, res) => {
        return res.send('GET single - not yet implemented'); 
    });
    
    router.put('/investors/:id', (req, res) => {
        return res.send('PUT - not yet implemented'); 
    });
    
    router.delete('/investors/:id', (req, res) => {
        return res.send('DELETE - not yet implemented'); 
    });
    

// end of function
}