function voteAge() {
    var age, vote;
age = document.getElementById("age").value;
vote = (age < 18) ? "You are too young":"You are old enough to vote!"
document.getElementById("vote").innerHTML = vote + " to vote.";
}