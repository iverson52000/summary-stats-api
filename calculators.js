//Functions for claculating mean, median, mode

function mean(nums) {
    if (nums.length === 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return median(nums);

    let total = 0;

    for (let i = 0; i < nums.length; i += 1) {
        total += nums[i];
    }

    return total / nums.length;
}

function isEven(length) {
    return (length % 2 === 0);
}

function median(nums) {
    if (nums.length === 0) return 0

    let median = 0;
    const numsLen = nums.length;
    nums.sort();
 
    if (isEven(nums.length)) {
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
    if (nums.length === 0) return 0

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
            modes.push(Number(num));
        };
    }
    return modes;
}

function std(nums) {
    if (nums.length === 0) return 0;
    
    const avg = mean(nums);
    let residual = 0;
    for (num of nums) {
        residual += (num-avg)**2;
    }
    res = (residual/nums.length)**(0.5);
    return res;
}

module.exports = {
  mean: mean,
  median: median,
  mode: mode,
  std: std
};
