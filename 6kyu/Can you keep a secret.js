// Can you keep a secret?
// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (a) {
      secret = a;
    },
  };
}
