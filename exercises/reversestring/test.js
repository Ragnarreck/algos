const reverse = require('./index');

describe('test', () => {
  it('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });
  
  it('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });
  
  it('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
})
