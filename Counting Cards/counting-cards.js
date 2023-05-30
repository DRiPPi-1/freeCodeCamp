let count = 0;

function cc(card) {
  // Function to update the count based on the card value
  function updateCount(card) {
    if (card >= 2 && card <= 6) {
      count++;
    } else if (card === 10 || typeof card === 'string') {
      count--;
    }
  }
  
  // Update the count based on the card value
  updateCount(card);
  
  // Determine the player's decision based on the count
  let decision = count > 0 ? "Bet" : "Hold";
  
  // Return the current count and the player's decision
  return count + " " + decision;
}

console.log(cc(2)); // +1 Bet
console.log(cc(3)); // +2 Bet
console.log(cc(7)); // +2 Bet
console.log(cc('K')); // +1 Bet
console.log(cc('A')); // 0 Hold
