import {cabinService} from "./cabinFitService";

test('adds 1 + 2 to equal 3', () => {
    expect(cabinService.sum(1, 2)).toBe(3);
  });

  test('Throw error when product is unavailable', () => {
      expect(cabinService.isProductAvailable('test').toThrow("Ürün bulunamadı."))
  })