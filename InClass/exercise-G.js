const scores = [99,100,81,3,33,22,55,102];
function isHighScore(score){
    if(score >= 60){
        return true
    } else{
        return false
    }
}
const isHighScores = scores.filter(isHighScore)
console.log(isHighScores)