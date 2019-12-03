function fnException() {
  throw new Error('you are using wrong JDK')
}

test('expected exception', () => {
  expect(fnException).toThrow();
  expect(fnException).toThrow(Error);

  expect(fnException).toThrow(/JDK/);
  expect(fnException).toThrow('you are using wrong JDK');
});
