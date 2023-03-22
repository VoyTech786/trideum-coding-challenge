import { fibonacciMain, fibonacciPreprocess } from '../src/fibonacci';

describe('testing fibonacci file', () => {
  describe('basic fibonacci', () => {
    test('basic fibonacci of 1',() => {
      expect(fibonacciMain("1","1","2")).toBe("1");
    });
    test('basic fibonacci of 6',() => {
      expect(fibonacciMain("6","1","2")).toBe("1, 1, 2, 3, 5, 8");
    });
    test('basic fibonacci of 20',() => {
      expect(fibonacciMain("20","1","2")).toBe("1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765");
    });
  });
  describe('fibonacci, changing x and y', () => {
    test('F(1) with y=2, z=3',() => {
      expect(fibonacciMain("1","2","3")).toBe("1");
    });
    test('F(6) with y=2, z=3',() => {
      expect(fibonacciMain("6","2","3")).toBe("1, 1, 1, 2, 2, 3");
    });
    test('F(20) with y=2, z=3',() => {
      expect(fibonacciMain("20","2","3")).toBe("1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151");
    });

    test('should return \'1\'',() => {
      expect(fibonacciMain("3","3","5")).toBe("1, 1, 1");
    });
    test('should return \'1\'',() => {
      expect(fibonacciMain("6","3","5")).toBe("1, 1, 1, 1, 1, 2");
    });
    test('should return \'1\'',() => {
      expect(fibonacciMain("9","3","5")).toBe("1, 1, 1, 1, 1, 2, 2, 2, 3");
    });
    test('should return \'1\'',() => {
      expect(fibonacciMain("12","3","5")).toBe("1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5");
    });
  });
  describe('fibonacci validation and defaults', () => {
    test('All values valid',() => {
      expect(fibonacciPreprocess("1","2","3")).toStrictEqual([1, 2, 3, ""]);
    });

    test('Negative x',() => {
      expect(fibonacciPreprocess("-1","2","3")).toStrictEqual([-1, 2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Non-integer x',() => {
      expect(fibonacciPreprocess("1.2","2","3")).toStrictEqual([1.2, 2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Missing x - error',() => {
      expect(fibonacciPreprocess("","2","3")).toStrictEqual([0, 2, 3, "Invalid input. Input X is required. "]);
    });
    test('Non-sense x - error',() => {
      expect(fibonacciPreprocess("string input","2","3")).toStrictEqual([NaN, 2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });

    test('Negative y',() => {
      expect(fibonacciPreprocess("1","-2","3")).toStrictEqual([1, -2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Non-integer y',() => {
      expect(fibonacciPreprocess("1","2.2","3")).toStrictEqual([1, 2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Missing y - default of 1',() => {
      expect(fibonacciPreprocess("1","","3")).toStrictEqual([1, 1, 3, ""]);
    });
    test('Non-sense y - error',() => {
      expect(fibonacciPreprocess("1","string input","3")).toStrictEqual([1, 1, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });

    test('Negative z',() => {
      expect(fibonacciPreprocess("1","2","-3")).toStrictEqual([1, 2, -3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Non-integer z',() => {
      expect(fibonacciPreprocess("1","2","3.3")).toStrictEqual([1, 2, 3, "Invalid input(s). All inputs must be positive integers. "]);
    });
    test('Missing z - default of 2',() => {
      expect(fibonacciPreprocess("1","2","")).toStrictEqual([1, 2, 2, ""]);
    });
    test('Non-sense z - error',() => {
      expect(fibonacciPreprocess("1","2","string input")).toStrictEqual([1, 2, 2, "Invalid input(s). All inputs must be positive integers. "]);
    });
  });
});
