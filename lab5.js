var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var z= 9; 
function print_largest(a,z){


 


    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

 


for (i=0; i<=z;i++){
    if (a>z) {
        var z=a[i];
    }
}
}


print_largest(a,z);
console.log(a);
console.log(z);

