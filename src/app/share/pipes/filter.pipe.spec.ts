import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('do search', () => {
    const pipe = new FilterPipe();
    const arrToSearch: any[] = [
      {title: 'Test 1'},
      {title: 'Hidden 1'},
      {title: 'Test 2'},
      {title: 'Hidden 2'},
    ];
    expect(pipe.transform(arrToSearch, 'title', 'test'))
      .toEqual([{title: 'Test 1'}, {title: 'Test 2'}]);
  });

  it('prop is not present', () => {
    const pipe = new FilterPipe();
    const arrToSearch: any[] = [
      {title: 'Test 1'},
      {title: 'Hidden 1'},
      {title: 'Test 2'},
      {title: 'Hidden 2'}
    ];
    expect(pipe.transform(arrToSearch, 'description', 'test'))
      .toEqual([
        {title: 'Test 1'},
        {title: 'Hidden 1'},
        {title: 'Test 2'},
        {title: 'Hidden 2'}
      ]);
  })
});
