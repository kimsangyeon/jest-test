const shoppingList = [
  'monitor',
  'keyboard',
  'phone',
  'bear',
];

test('the shopping list has bear on it', () => {
  expect(shoppingList).toContain('bear');
  expect(new Set(shoppingList)).toContain('bear');
});
