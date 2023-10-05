const mapMovementApiToVm = (movement) => ({
  ...movement,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
});

export const mapMovementsApiToVm = (movements) =>
  Array.isArray(movements)
    ? movements.map((movement) => mapMovementApiToVm(movement))
    : [];
