const course = {
    courseName : "JS in one shot",
    coursePrice : "9999",
    courseInstructor : "Hitesh"

}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : Instructor} = course  //////Destructuring..........
console.log(Instructor);

const {coursePrice : price} = course
console.log(price);




//////////////////APIs///////////////////
//  {
//     "name" : "Hitesh",
//     "courseName" : "JS in hindi",   /////////JSON API
//     "price" : "free"
//  }