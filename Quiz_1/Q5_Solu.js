const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }


const ages = ['a','b','a','c','d','c',"a,b,c"]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges)