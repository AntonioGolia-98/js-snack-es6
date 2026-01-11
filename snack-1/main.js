const bike = [
    { nome : "tipe1", peso : 12},
    { nome : "type2", peso : 8},
    { nome : "type3", peso : 14},
    { nome : "type4", peso : 18},
]

let bikeLight = bike [0];

for (let i = 0; i < bike.length; i++) {
    if(bike[i].peso < bikeLight){
        bikeLight = bike[i];
    }    
}