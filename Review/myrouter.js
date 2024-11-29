exports.myRouter = function(req) {
    const path = req.url;
    const verb = req.method;
    console.log(`path: ${path}`);
    console.log(`verb: ${verb}`);
    if (path === '/') {
        return 'The Home page was requested';
    } else if (path === '/lol') {
        if (verb === "GET") {
            return 'The lol page was requested';
        } else if (verb === "POST") {
            return 'The lol page was POST requested';
        }    
    } else if (path === '/hey') {
        return 'The hey path was requested';
    }
};

