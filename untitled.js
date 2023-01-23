const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send('Hello there');
});
const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];
app.get("/api/courses", (req,res)=>
{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)
    {
        res.status(404).send("the course with the given ID wasnot found");
        return
    }
    res.send(course);
})
app.listen(3000, () =>
{
    console.log("listening on port 3000 ...")
})