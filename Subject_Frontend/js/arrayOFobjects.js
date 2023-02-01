let arr = [ {
    firstName: "Alina",
    lastName: "Rusu",
    averageScore: 9
  },
  {
    firstName: "Vasile",
    lastName: "Vlas",
    averageScore: 6.5
  },
  {
    firstName: "Ion",
    lastName: "Rotaru",
    averageScore: 5
  },
  {
    firstName: "Renata",
    lastName: "Albu",
    averageScore: 5.2
  },
  {
    firstName: "Ala",
    lastName: "Rusu",
    averageScore: 5
  },
  {
    firstName: "Anastasia",
    lastName: "Bou",
    averageScore: 9
  },
  {
    firstName: "Camelia",
    lastName: "Lungu",
    averageScore: 7.3
  }
]

let peste_cinci = [];
let sub_cinci = [];

for (let i in arr) {
    let rez = arr[i].averageScore;
    if(rez > 5){
        peste_cinci.push(arr[i]);
    } else
        sub_cinci.push(arr[i]);
}
    console.log(peste_cinci); // studenti cu media > 5
    console.log(sub_cinci);  // studenti cu medie <= 5
 