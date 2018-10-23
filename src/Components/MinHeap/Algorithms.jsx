const pushToFrames = (frames, heap, n, indexes, variables, pseudocode, currentLine) => {
  heap = [...heap];
  indexes = [...indexes];
  variables = [...variables];
  frames.push({
    heap,
    n,
    indexes,
    variables,
    pseudocode,
    currentLine,
    binaryTreeFrame: getBinaryTreeFrame(heap, n, indexes)
  });
}

const createVariable = (variables, name, value) => {
  variables.push({name, value});
}

const setVariable = (variables, name, value) => {
  variables.forEach((e, i) => {
    if (e.name === name)
      variables[i] = {
        name,
        value
      };
  });
}

const createIndex = (indexes, name, index) => {
  indexes.push({name, index});
}

const setIndex = (indexes, name, index) => {
  indexes.forEach((e, i) => {
    if (e.name === name)
      indexes[i] = {
        name,
        index
      };
  });
}

const getBinaryTreeFrame = (heap, n, indexes) => {
  if(n < 1)
    return {root: null, pointers: []};
  return getBinaryTreeFrameHelper(heap, 1, n, indexes);
}

const getBinaryTreeFrameHelper = (heap, i, n, indexes) => {
  if(i > n)
    return null;
  const leftSubtreeFrame = getBinaryTreeFrameHelper(heap, 2 * i, n, indexes);
  const rightSubtreeFrame = getBinaryTreeFrameHelper(heap, 2 * i + 1, n, indexes);
  let root = {val: heap[i], left: null, right: null};
  let frame = {root, pointers: []};
  const indexesToThisNode = indexes.filter((e)=>e.index === i);
  const pointersToThisNode = indexesToThisNode.map((e)=>{
    return {name: e.name, pointer: root};
  });
  frame.pointers = pointersToThisNode;
  if(leftSubtreeFrame){
    root.left = leftSubtreeFrame.root;
    frame.pointers = [...frame.pointers, ...leftSubtreeFrame.pointers];
  }
  if(rightSubtreeFrame){
    root.right = rightSubtreeFrame.root;
    frame.pointers = [...frame.pointers, ...rightSubtreeFrame.pointers];
  }
  return frame;
}

export const Insert = (heap, n, e) => {
  heap = [...heap];
  const pseudocode = `InsertHeap(heap,n,e)
  n <- n + 1
  ptr <- n
  while (ptr > 1)
    parent <- ptr / 2
    if (e >= heap[parent]) then
      heap[ptr] <- e
      return
    heap[ptr] <- heap[parent]
    ptr <- parent
  end while
  heap[1] <- e
  end`;

  let frames = [];
  let indexes = [];
  let variables = [];

  createVariable(variables, 'n', n);
  createVariable(variables, 'e', e);
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 1);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 2);
  n++;
  setVariable(variables, 'n', n);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 3);
  let ptr = n;
  createIndex(indexes, 'ptr', ptr);

  let parent = -1;
  createIndex(indexes, 'parent', parent);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 4);
  while (ptr > 1) {

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 5);
    parent = Math.floor(ptr / 2);
    setIndex(indexes, 'parent', parent);

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 6);
    if (e >= heap[parent]) {
      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 7);
      heap[ptr] = e;
      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 8);
      pushToFrames(frames, heap, n, [], [], pseudocode, 0);
      return frames;
    }

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 9);
    heap[ptr] = heap[parent];

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 10);
    ptr = parent;
    setIndex(indexes, 'ptr', ptr);
    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 4);
  }
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 11);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 12);
  heap[1] = e;

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 13);
  pushToFrames(frames, heap, n, [], [], pseudocode, 0);
  return frames;
}

export const Delete = (heap, n) => {
  heap = [...heap];
  const pseudocode = `DeleteHeap(heap,n,e)
  e <- heap[1]
  last <- heap[n]
  n <- n - 1
  if (n = 0) then
    return
  ptr <- 1
  left <- 2
  right <- 3
  while (right <= n)
    if(last < heap[left] and last <= heap[right])
      then
        heap[ptr] <- last
        return
    if(heap[right] >= heap[left])
      then
        heap[ptr] <- heap[left]
        ptr <- left
      else
        heap[ptr] <- heap[right]
        ptr <- right
    left <- 2*ptr
    right <- left + 1
  end while
  if(left = n and last > heap[left])
    then
      heap[ptr] <- heap[left]
      ptr <- left
  heap[ptr] <- last
  end`;

  let frames = [];
  let indexes = [];
  let variables = [];

  createVariable(variables, 'n', n);
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 1);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 2);
  let e = heap[1];
  createVariable(variables, 'e', e);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 3);
  let last = heap[n];
  createVariable(variables, 'last', last);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 4);
  heap[n] = null;
  n--;
  setVariable(variables, 'n', n);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 5);
  if (n === 0) {
    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 6);
    pushToFrames(frames, heap, n, [], [], pseudocode, 0);
    return frames;
  }
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 7);
  let ptr = 1;
  createIndex(indexes, 'ptr', ptr);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 8);
  let left = 2;
  createIndex(indexes, 'left', left);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 9);
  let right = 3;
  createIndex(indexes, 'right', right);

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 10);
  debugger;
  while (right <= n) {
    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 11);
    if (last < heap[left] && last <= heap[right]) {
      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 13);
      heap[ptr] = last;

      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 14);
      return frames;
    }

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 15);
    if (heap[right] >= heap[left]) {
      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 17);
      heap[ptr] = heap[left];

      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 18);
      ptr = left;
      setIndex(indexes, 'ptr', ptr);
    } else {
      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 20);
      heap[ptr] = heap[right];

      pushToFrames(frames, heap, n, indexes, variables, pseudocode, 21);
      ptr = right;
      setIndex(indexes, 'ptr', ptr);
    }

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 22);
    left = 2 * ptr;
    setIndex(indexes, 'left', left);

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 23);
    right = left + 1;
    setIndex(indexes, 'right', right);
    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 10);
  }
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 25);
  if (left === n && last > heap[left]) {
    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 27);
    heap[ptr] = heap[left];

    pushToFrames(frames, heap, n, indexes, variables, pseudocode, 28);
    ptr = left;
    setIndex(indexes, 'ptr', ptr);
  }
  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 29);
  heap[ptr] = last;

  pushToFrames(frames, heap, n, indexes, variables, pseudocode, 30);
  pushToFrames(frames, heap, n, [], [], pseudocode, 0);
  return frames;
}
