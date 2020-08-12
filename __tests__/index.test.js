import {thumb} from '../';

describe('image-view2', () => {
  test('thumb', () => {
    expect(thumb('test.jpg')).toBe('test.jpg?imageView2/2/w/100/h/100/q/75');
  });

  test('thumb size', () => {
    expect(thumb('test.jpg', 200)).toBe('test.jpg?imageView2/2/w/200/h/200/q/75');
  });
})

