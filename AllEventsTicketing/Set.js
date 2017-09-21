function Set() {
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];

        /*-------------------------------Insert your code here -------------------------------------*/
	   if (listA === null || listB === null) {
	   	return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
	   	var nextValue = listA[i];

	   	for (var j = 0; j < listB.length; j++) {
	   		if (listB[j] === nextValue) {
	   			resultList.push(listB[j]);
	   			break;
			}
		}
	   }
        /*-------------------------------Insert your code here -------------------------------------*/
	   return resultList;
	}

	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }

        var aList = this.symmetricDifference(listA, listB)
        var bList = this.intersection(listA, listB)

        resultList = aList.concat(bList);
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}

	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }

        for (var i = 0; i < listA.length; i++) {
            var nextValueA = listA[i];

            for (var j = 0; j < listB.length; j++) {
                var nextValueB = listB[j];
                if (nextValueA === nextValueB) {
                    break;
                }
            }
            if (nextValueA !== nextValueB) {
                resultList.push(nextValueA)
            }
        }
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }

        var aList = this.relativeComplement(listA, listB);
        var bList = this.relativeComplement(listB, listA);

        for (var i = 0; i < aList.length; i++) {
        	resultList.push(aList[i]);
		}

        for (var i = 0; i < bList.length; i++) {
            resultList.push(bList[i]);
        }

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
