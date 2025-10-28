//Write a for loop that converts temperatures from 0°C to 50°C (increment by 5) to Fahrenheit. Formula: F = (C × 9/5) + 32

for(let i=0; i<=50; i+=5){
    let F = (i * 9/5) + 32
    console.log(i+" degrees C = "+F+" degrees F")
}