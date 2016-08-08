function terraces(arr){
	var count = 0;
	var max = function(arr){
		var big = arr[0];
		for(var i=0; i<arr.length;i++){
			if(arr[i]>big){
				big=arr[i];		
			}
		}
		return big
	}(arr);
	function scan(peak){
		if (peak==0){return count}
		var scanner = [];
		for(var i=0; i<arr.length; i++){
			scanner.push(arr[i]-(peak-1))
		}
		var scanned = [];
		for (var i=0; i<scanner.length; i++){
			if (scanner[i]>0){
				scanned.push(i);
			}
		} 
		if (scanned.length > 1){ 
			for (var i = 1; i<scanned.length; i++){
				if(scanned[i]-scanned[i-1] != 1){
					count += (scanned[i]-scanned[i-1])-1
				}
			}
			return scan(peak-1)
		}
		else if (scanned.length = 1){
			return scan(peak-1)
		}
		else { 
			count+=0 
		}
	}
	scan(max)
	return count		
}

console.log(terraces([4,3,2,1,2,3,4]));
console.log(terraces([1,2,3,4,4]));
console.log(terraces([3,3,2,1,1]));
console.log(terraces([1,2,3,2,1]));
console.log(terraces([2,1,2,1,2,1]));
console.log(terraces([3,2,3,1,0,3]));
console.log(terraces([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0]));
console.log(terraces([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0,6,5]));
console.log(terraces([2,3,4,3,2,2,3,1,0,5,5,3,2,0,1,0,1,0]));