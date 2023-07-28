function calculateDiscount(totalAmount) {
  let discountPercentage = 0;
  
  if (totalAmount >= 50 && totalAmount <= 100) {
    discountPercentage = 0.05; // 5% discount
  } else if (totalAmount > 100 && totalAmount <= 200) {
    discountPercentage = 0.10; // 10% discount
  } else if (totalAmount > 200) {
    discountPercentage = 0.15; // 15% discount
  }
  
  const discountAmount = totalAmount * discountPercentage;
  const discountedTotal = totalAmount - discountAmount;
  
  console.log(`Total amount: $${totalAmount.toFixed(2)}`);
  
  if (discountPercentage > 0) {
    console.log(`Discounted amount: $${discountedTotal.toFixed(2)} (with ${discountPercentage * 100}% discount)`);
    console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
  } else {
    console.log("No discount applied.");
  }
  
  return discountedTotal;
}

// Example usage:
const totalPurchaseAmount = 150;
const discountedAmount = calculateDiscount(totalPurchaseAmount);
