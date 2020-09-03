// set two counters for apples(app) and organges(org)
// start looping apples
//** */ if a plus apples[i] is greater than or equal to s and less than or equal to t then app++ 
// start looping oranges 
//** */ if b plus oranges[i] is less than or equal to t and greater than or equal to s then org++ 
// Return app & org

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let app = 0
    let org = 0
    for (var i = 0; i < apples.length; i++) {
        if ((a + apples[i]) >= s && t >= (a + apples[i]))  {
            app++
        }
    }
    for (var j = 0; j < oranges.length; j++) {
        if((b + oranges[j]) <= t && s <= (b + oranges[j])) {
            org++
        }
    }
    console.log(app + "\n" + org)
}


