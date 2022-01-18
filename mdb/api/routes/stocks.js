// router skeleton

module.exports = function(router) {

    router.get('/stocks', (req, res) => {
        return res.send('GET all - not yet implemented'); 
    });

    router.post('/stocks', (req, res) => {
        return res.send('POST - not yet implemented'); 
    });
    
    router.get('/stocks/:id', (req, res) => {
        return res.send('GET single - not yet implemented'); 
    });
    
    router.put('/stocks/:id', (req, res) => {
        return res.send('PUT - not yet implemented'); 
    });
    
    router.delete('/stocks/:id', (req, res) => {
        return res.send('DELETE - not yet implemented'); 
    });
    

// end of function
}