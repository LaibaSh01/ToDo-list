
// console.log(module);
// module.exports = "Hello World";

// we are creating our own modules

// but what if there are other functions too and i want to export them too tou wo kaise hoga??
// export javascript ka object hai . ham isko aese karsakhtay hain.

// module.exports = getDate;

exports.getDate = function () {

//we can save the function into any variable 
// function getDate(){

// let getDate = function() {
//however we can do one more thing that we can save our function as a anonymous after the exports
const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    };

    //refactoring

    // let day = today.toLocaleDateString("en-US", options);

    return today.toLocaleDateString("en-US", options);


    // return day;
}

// module.exports.getDay = getDay;
// function getDay(){

// module.exports.getDay = function () {
// we can make it more shorts by just writing exports 
exports.getDay = function () {

    const today = new Date();
    
        const options = {
            weekday: "long",
    
        };
    
        // let day = today.toLocaleDateString("en-US", options);
        return today.toLocaleDateString("en-US", options);

    
        return day;
    }