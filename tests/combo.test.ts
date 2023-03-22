import { comboChallengeMain } from '../src/combo';

describe('fizzbuzz with only 1 parameter', () => {
  test('combo challenge with default values',() => {
    expect(comboChallengeMain("6","","","","","","")).toBe("1, 1, 2, fizz, buzz, 8");
  });
  test('combo challenge with all parameters',() => {
    expect(comboChallengeMain("6","1","2","3","5","fizz","buzz")).toBe("1, 1, 2, fizz, buzz, 8");
  });
  test('combo challenge with all parameters, changed values',() => {
    expect(comboChallengeMain("20","2","3","4","7","fizz","buzz")).toBe("1, 1, 1, 2, 2, 3, fizz, 5, buzz, 9, fizz, fizz, buzz, fizzbuzz, 37, buzz, 65, 86, 114, 151");
  });
  test('combo challenge of 20 with foo and bar',() => {
    expect(comboChallengeMain("20","","","","","foo","bar")).toBe("1, 1, 2, foo, bar, 8, 13, foo, 34, bar, 89, foo, 233, 377, bar, foo, 1597, 2584, 4181, foobar");
  });
});
