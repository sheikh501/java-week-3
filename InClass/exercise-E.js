function calculateAge(birthYear){
    return 2021 - birthYear;
}
const birthYears = [1964,2008,1999,2005,1978,1985,1919];
const age = birthYears.map(calculateAge);
console.log(age)
