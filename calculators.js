//Functions for claculating mean, median, mode

function mean(nums) {
    var total = 0, i;
    for (i = 0; i < nums.length; i += 1) {
        total += nums[i];
    }
    return total / nums.length;
}

function median(nums) {
    var median = 0, numsLen = nums.length;
    nums.sort();
 
    if (
        // is even
        numsLen % 2 === 0 
    ) {
        // average of two middle nums
        median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
    } else { 
        // is odd => middle number only
        median = nums[(numsLen - 1) / 2];
    }
 
    return median;
}

function mode(nums) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < nums.length; i += 1) {
        number = nums[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}

module.exports = {
  mean: mean,
  median: median,
  mode: mode
};
