function maximumGap(nums) {
    if (nums.length < 2)
        return 0;

    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const n = nums.length;
    const gap = Math.ceil((maxVal - minVal) / (n - 1));

    const minBucket = new Array(n - 1).fill(Number.MAX_SAFE_INTEGER);
    const maxBucket = new Array(n - 1).fill(Number.MIN_SAFE_INTEGER);

    for (let i = 0; i < n; i++) {
        if (nums[i] === minVal || nums[i] === maxVal)
            continue;
        
        const index = Math.floor((nums[i] - minVal) / gap);
        minBucket[index] = Math.min(minBucket[index], nums[i]);
        maxBucket[index] = Math.max(maxBucket[index], nums[i]);
    }

    let maxGap = 0;
    let previousMax = minVal;

    for (let i = 0; i < n - 1; i++) {
        if (minBucket[i] === Number.MAX_SAFE_INTEGER && maxBucket[i] === Number.MIN_SAFE_INTEGER)
            continue;
        
        maxGap = Math.max(maxGap, minBucket[i] - previousMax);
        previousMax = maxBucket[i];
    }

    maxGap = Math.max(maxGap, maxVal - previousMax);
    return maxGap;
}
