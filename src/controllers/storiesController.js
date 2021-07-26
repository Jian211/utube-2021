export const home = (req, res) => res.render("home",{
    pageTitle : "home",
})
export const trending = (req, res) => res.render("trending",{
    "pageTitle" : "trending",
});
export const newStories = (req, res) => res.render("layout",{
    "pageTitle" : "newStories",
});
export const seeStory = (req, res) => res.send(`<h1>seeStory: ${req.params.id}</h1>`);
export const editStory = (req, res) =>  res.send(`<h1>editStory: ${req.params.id}</h1>`);
export const deleteStory = (req, res) => res.render("deleteStory",{
    "pageTitle" : "deleteStory",
});