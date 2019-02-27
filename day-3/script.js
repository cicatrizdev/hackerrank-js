// # ARRAYS (sponsored by stackoverflow)
function getSecondLargest(nums) {
    return [...new Set(nums)].sort((a, b) => b - a)[1];
}

// # TRY, CATCH AND FINALLY
function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}