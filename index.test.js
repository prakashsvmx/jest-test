import sum from './index';

describe('Sum Function tests', ()=>{

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('2+3=5',()=>{
    expect(sum(2,3)).toBe(5);
  });

});
