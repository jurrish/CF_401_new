const {
  LinkedList,
  Node
} = require('./linked-list');

describte('Linked List', () => {
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
    list.insert('apples';
    expect(list.head.value).toBe('apples');
  });

  xit('should insert at head with populated list', () => {
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
