const calculators = require('./calculators');


const nums1 = [];
const nums2 = [1, 2, 3];
const nums3 = [1, 1, 1];

it('test mean', () => {
  expect(calculators.mean(nums1)).toEqual(0);
  expect(calculators.mean(nums2)).toEqual(2);
  expect(calculators.mean(nums3)).toEqual(1);
})

it('test median', () => {
  expect(calculators.median(nums1)).toEqual(0);
  expect(calculators.median(nums2)).toEqual(2);
  expect(calculators.median(nums3)).toEqual(1);
})

it('test mode', () => {
  expect(calculators.mode(nums1)).toEqual(0);
  expect(calculators.mode(nums2)).toEqual([1, 2, 3]);
  expect(calculators.mode(nums3)).toEqual([1]);
})