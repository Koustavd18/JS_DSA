
function remove(nums:number[], val:number) {
  const data = [];

  for(let i =0 ; i< nums.length ; i++){
    if(nums[i] !== val) {
      data.push(nums[i]);
    }
  }
  return data;
}

//console.log(remove([0,1,2,2,3,0,4,2], 2))
//console.log(remove([3,2,2,3],3))

function rotate(nums:number[], k:number){
  const p = performance.now();
  const a = nums.slice(0,k+1);
  const b = nums.slice(k+1);
  nums = [...b,...a];
  console.log(performance.now() - p);
  return nums;
}

console.log(rotate([1,2,3,4,5,6,7],3))
