// The Coupon Code
//www.codewars.com/kata/539de388a540db7fec000642/train/javascript

https: function checkCoupon(
  enteredCode,
  correctCode,
  currentDate,
  expirationDate
) {
  let coupon = enteredCode === correctCode;
  let date = Date.parse(currentDate) <= Date.parse(expirationDate);

  return coupon && date;
}
