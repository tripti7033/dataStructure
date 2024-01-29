class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
      return null; 
    }
  
    const getLength = (node) => {
      let length = 0;
      while (node) {
        length++;
        node = node.next;
      }
      return length;
    };
  
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);
  
    let currentA = headA;
    let currentB = headB;
  
   
    for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
      if (lengthA > lengthB) {
        currentA = currentA.next;
      } else {
        currentB = currentB.next;
      }
    }
  
    while (currentA !== null && currentB !== null) {
      if (currentA === currentB) {
        return currentA;
      }
      currentA = currentA.next;
      currentB = currentB.next;
    }
  
    return null; 
  }

  const commonNode = new ListNode(7);
  
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = commonNode;
  list1.next.next.next = new ListNode(9);
  list1.next.next.next.next = new ListNode(5);
  
  const list2 = new ListNode(4);
  list2.next = new ListNode(6);
  list2.next.next = commonNode;
  
  const intersectionPoint = getIntersectionNode(list1, list2);
  console.log(intersectionPoint ? intersectionPoint.value : "No intersection")