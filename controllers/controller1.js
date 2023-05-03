const sarahRoute = (req,res) => {
    res.send("Sarah Birch");
};

const stevenRoute = (req,res) => {
    res.send("Steven Valencia");
};

module.exports = {
    sarahRoute,
    stevenRoute
};
