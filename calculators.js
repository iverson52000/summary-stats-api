//Functions for claculating mean, median, mode

function mean(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i += 1) {
        total += nums[i];
    }

    return total / nums.length;
}

function median(nums) {
    let median = 0;
    const numsLen = nums.length;
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
    let modes = [];
    let counts = {};
    let maxCount = 0;
 
    for (let i = 0; i < nums.length; i += 1) {
        num = nums[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
        }
    }
    const entries = Object.entries(counts)
    for (const [num, count] of entries) {
        if (count === maxCount) {
            modes.push(num);
        };
    }
    return modes;
}

module.exports = {
  mean: mean,
  median: median,
  mode: mode,
};
