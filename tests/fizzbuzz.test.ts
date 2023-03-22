import { fizzbuzzMain, fizzbuzzIndividual } from '../src/fizzbuzz';

describe('testing fizzbuzz file', () => {
  describe('fizzbuzz with only 1 parameter - testing defaults', () => {
    test('fizzbuzz(1) should return \"0,1\"',() => {
      expect(fizzbuzzMain("1","","","","")).toBe("0, 1");
    });
    test('fizzbuzz(3) should return \'fizz\'',() => {
      expect(fizzbuzzMain("3","","","","")).toBe("0, 1, 2, fizz");
    });
    test('fizzbuzz(5) should return \'buzz\'',() => {
      expect(fizzbuzzMain("5","","","","")).toBe("0, 1, 2, fizz, 4, buzz");
    });
    test('fizzbuzz(6) should return \'fizz\'',() => {
      expect(fizzbuzzMain("6","","","","")).toBe("0, 1, 2, fizz, 4, buzz, fizz");
    });
    test('fizzbuzz(15) should return \'fizzbuzz\'',() => {
      expect(fizzbuzzMain("15","","","","")).toBe("0, 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz");
    });
  });

  describe('fizzbuzz tests with all 5 parameters', () => {
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("1","4","7","foo","bar")).toBe("0, 1");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("4","4","7","foo","bar")).toBe("0, 1, 2, 3, foo");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("7","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("8","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("9","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo, 9");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("12","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo, 9, 10, 11, foo");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("14","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo, 9, 10, 11, foo, 13, bar");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("28","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo, 9, 10, 11, foo, 13, bar, 15, foo, 17, 18, 19, foo, bar, 22, 23, foo, 25, 26, 27, foobar");
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzMain("56","4","7","foo","bar")).toBe("0, 1, 2, 3, foo, 5, 6, bar, foo, 9, 10, 11, foo, 13, bar, 15, foo, 17, 18, 19, foo, bar, 22, 23, foo, 25, 26, 27, foobar, 29, 30, 31, foo, 33, 34, bar, foo, 37, 38, 39, foo, 41, bar, 43, foo, 45, 46, 47, foo, bar, 50, 51, foo, 53, 54, 55, foobar");
    });
  });

  describe('fizzbuzzIndividual tests with all 5 parameters', () => {
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(1,4,7,"foo","bar")).toBe('1');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(2,4,7,"foo","bar")).toBe('2');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(3,4,7,"foo","bar")).toBe('3');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(4,4,7,"foo","bar")).toBe('foo');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(5,4,7,"foo","bar")).toBe('5');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(6,4,7,"foo","bar")).toBe('6');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(7,4,7,"foo","bar")).toBe('bar');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(8,4,7,"foo","bar")).toBe('foo');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(9,4,7,"foo","bar")).toBe('9');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(12,4,7,"foo","bar")).toBe('foo');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(14,4,7,"foo","bar")).toBe('bar');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(28,4,7,"foo","bar")).toBe('foobar');
    });
    test('should return \'1\'',() => {
      expect(fizzbuzzIndividual(56,4,7,"foo","bar")).toBe('foobar');
    });
  });

  describe('fizzbuzz tests with 3 parameters set and 2 default values', () => {
    test('fizzbuzz(1,3,5) should return \'1\'',() => {
      expect(fizzbuzzMain("1","3","5","","")).toBe("0, 1");
    });
    test('fizzbuzz(2,3,5) should return \'2\'',() => {
      expect(fizzbuzzMain("2","3","5","","")).toBe("0, 1, 2");
    });
    test('fizzbuzz(3,3,5) should return \'fizz\'',() => {
      expect(fizzbuzzMain("3","3","5","","")).toBe("0, 1, 2, fizz");
    });
    
    test('fizzbuzz(1,4,5) should return \'1\'',() => {
      expect(fizzbuzzMain("1","4","5","","")).toBe("0, 1");
    });
    test('fizzbuzz(5,4,5) should return \'fizz\'',() => {
      expect(fizzbuzzMain("5","4","5","","")).toBe("0, 1, 2, 3, fizz, buzz");
    });
    test('fizzbuzz(20,4,5) should return \'fizzbuzz\'',() => {
      expect(fizzbuzzMain("20","4","5","","")).toBe("0, 1, 2, 3, fizz, buzz, 6, 7, fizz, 9, buzz, 11, fizz, 13, 14, buzz, fizz, 17, 18, 19, fizzbuzz");
    });

    test('fizzbuzz(1,4,5) should return \'1\'',() => {
      expect(fizzbuzzMain("1","","","foo","bar")).toBe("0, 1");
    });
    test('fizzbuzz(5,4,5) should return \'fizz\'',() => {
      expect(fizzbuzzMain("5","","","foo","bar")).toBe("0, 1, 2, foo, 4, bar");
    });
    test('fizzbuzz(20,4,5) should return \'fizzbuzz\'',() => {
      expect(fizzbuzzMain("20","","","foo","bar")).toBe("0, 1, 2, foo, 4, bar, foo, 7, 8, foo, bar, 11, foo, 13, 14, foobar, 16, 17, foo, 19, bar");
    });
  });

});
