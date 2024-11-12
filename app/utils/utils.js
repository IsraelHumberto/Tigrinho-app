export const getResultSymbols = (symbols) => {
  const result = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  return result;
};

export const playGame = (
  bet,
  balance,
  setBalance,
  setMessageBet,
  setResult,
  symbols
) => {
  if (bet > balance) {
    setMessageBet("Saldo insuficiente");
    return;
  }

  if (bet === 0) {
    setMessageBet("Digite um valor");
    return;
  }

  setMessageBet("");
  setBalance(balance - bet);
  setResult(getResultSymbols(symbols));
};
