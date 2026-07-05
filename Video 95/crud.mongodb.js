// Crud applicatoin 
use("CrudDb")
// create
// db.createCollection("courses")
// db.courses.insertOne({
//     name: "ankit online course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })
// // insert
// db.courses.insertMany([
//     {
//         name: "Ankit Online Course",
//         price: 0,
//         assignments: 12,
//         projects: 45
//     },
//     {
//         name: "JavaScript Mastery",
//         price: 499,
//         assignments: 20,
//         projects: 8
//     },
//     {
//         name: "Python Basics",
//         price: 299,
//         assignments: 15,
//         projects: 5
//     },
//     {
//         name: "React Complete Guide",
//         price: 999,
//         assignments: 25,
//         projects: 12
//     },
//     {
//         name: "Node.js Backend",
//         price: 799,
//         assignments: 18,
//         projects: 10
//     },
//     {
//         name: "MongoDB Essentials",
//         price: 399,
//         assignments: 14,
//         projects: 6
//     },
//     {
//         name: "DSA in C",
//         price: 599,
//         assignments: 30,
//         projects: 15
//     },
//     {
//         name: "Web Development Bootcamp",
//         price: 1499,
//         assignments: 40,
//         projects: 20
//     },
//     {
//         name: "Android Development",
//         price: 899,
//         assignments: 22,
//         projects: 11
//     },
//     {
//         name: "Machine Learning Basics",
//         price: 1299,
//         assignments: 28,
//         projects: 9
//     }
// ]);
// read
db.courses.find({ price: 0 })
// update

db.courses.updateOne(
    { price: 0 },
    { $set: { price: 100 } }
)

db.courses.updateMany(
    { price: 0 },
    { $set: { price: 1000 } }
)
// delete
db.courses.deleteOne({price: 100})