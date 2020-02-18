const {
  LinkedList,
  Node
} = require('./linked-list');

describe('Linked List', () => {
  describe('creation', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(LinkedList);
  });

  it('new list should have null head when constructed with no argument', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('shoud have node as head when constructed with argument', () => {
    const node = new Node('apples');
    const list = new LinkedList(node);
    expect(list.head.value).toBe('apples');
  });
});

describe('insertion', () => {
  it('should insert at head with empty list', () => {
    const list =  new LinkedList();
    list.insert('apples');
    expect(list.head.value).toBe('apples');
  });

  it('should insert at head with populated list', () => {
    const list = new LinkedList();
    list.insert('apples');
    list.insert('bananas');
    expect(list.head.value).toBe('bananas');
    expect(list.head.next.value).toBe('apples');
  })
})

describe('includes', () => {
  it('should return true if value found', () => {
    const list = new LinkedList();
    list.insert('bananas');
    list.insert('apples');
    const actual = list.includes('bananas');
    expect(actual).toBe(true);
  });
  it('should return false if value not found', () => {
    const list = new LinkedList();
    list.insert('apples');
    const actual = list.includes('bananas');
    expect(actual).toBe(false);
  })
})

xdescribe('print', () => {
  it('should print out balues', () => {
    const list = new LinkedList();
    list.insert('bananas');
    list.insert('apples');
    const expected = 'apples, bananas,';
    const actual = list.print();
    expect(actual).toBe(expected);
  })
})

xdescribe('linked list - node', () => {
  it('should have null next by default', () => {
    const expected = null;
    const actual = (new Node()).next();
    expect(actual).toBe(expected);
  });

  it('should have next node when passed to constructor', () => {
    const apples = new Node('apples');
    const bananas = new Node('bananas', apples);
    expect(bananas.next.value).toBe('apples')
  })
})
