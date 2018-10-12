const getPointersToTreeClone = (root, cloneRoot, pointers) => {
  if (!root)
    return [];
  let rootPointers = pointers.filter((val) => val.pointer === root);
  let newRootPointers = rootPointers.map((ptr) => ({name: ptr.name, pointer: cloneRoot}));
  let leftPointers = getPointersToTreeClone(root.left, cloneRoot.left, pointers);
  let rightPointers = getPointersToTreeClone(root.right, cloneRoot.right, pointers);
  return leftPointers.concat(newRootPointers).concat(rightPointers);
};

const pushToFrames = (frames, root, pointers, pseudocode, currentLine) => {
  let newRoot = JSON.parse(JSON.stringify(root));
  frames.push({
    root: newRoot,
    pointers: getPointersToTreeClone(root, newRoot, pointers),
    pseudocode,
    currentLine
  });
};

const setPointerValue = (pointers, name, newVal) => {
  for (let i = 0; i < pointers.length; i++) {
    if (pointers[i].name === name) {
      pointers[i] = {
        name: name,
        pointer: newVal
      };
    }
  }
};

const createPointer = (pointers, name, initVal) => {
  pointers.push({name, pointer: initVal});
}

export const Insert = (root, val) => {

  let frames = [];

  //let frameRoot = root;
  let pointers = [];

  pushToFrames(frames, root, pointers);

  if (!root) {
    root = {
      val,
      left: null,
      right: null
    };
    //
    frames.push({root, pointers: []});
    //
    return frames;
  }

  var currentNode = root;
  //
  pointers.push({name: 'currentNode', pointer: root});
  pushToFrames(frames, root, pointers);
  //

  var newNode = {
    val,
    left: null,
    right: null
  };

  while (currentNode) {
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        pushToFrames(frames, root, pointers);

        break;
      } else {
        currentNode = currentNode.left;
        //
        pointers = pointers.map((val) => {
          if (val.name === 'currentNode')
            return {name: 'currentNode', pointer: currentNode};
          return val;
        });
        pushToFrames(frames, root, pointers);
        //
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        pushToFrames(frames, root, pointers);
        break;
      } else {
        currentNode = currentNode.right;
        //
        pointers = pointers.map((val) => {
          if (val.name === 'currentNode')
            return {name: 'currentNode', pointer: currentNode};
          return val;
        });
        pushToFrames(frames, root, pointers);
        //
      }
    }
  }
  return frames;
}

export const Insert2 = (root, val) => {
  const pseudocode = `Tree-Insert(T, newNode)
  parentNode <- null
  currentNode <- root(T)
  while (currentNode != null)
    parentNode <- currentNode
    if (key(newNode) < key(currentNode))
      then currentNode <- left(currentNode)
      else currentNode <- right(currentNode)
  end while
  if (parentNode = null)
    then root(T) <- newNode
    else if (key(newNode) < key(parentNode))
      then left(parentNode) <- newNode
      else right(parentNode) <- newNode
  end`;

  let currentLine = 0;
  let frames = [];
  let pointers = [];
  pushToFrames(frames, root, pointers, pseudocode, 2);

  var parentNode = null;
  createPointer(pointers, 'parentNode', parentNode);
  pushToFrames(frames, root, pointers, pseudocode, 3);

  var currentNode = root;
  createPointer(pointers, 'currentNode', currentNode);
  pushToFrames(frames, root, pointers, pseudocode, 4);

  while (currentNode) {
    pushToFrames(frames, root, pointers, pseudocode, 5);
    parentNode = currentNode;
    setPointerValue(pointers, 'parentNode', parentNode);

    pushToFrames(frames, root, pointers, pseudocode, 6);
    if (val < currentNode.val) {
      pushToFrames(frames, root, pointers, pseudocode, 7);
      currentNode = currentNode.left;
      setPointerValue(pointers, 'currentNode', currentNode);
    } else {
      pushToFrames(frames, root, pointers, pseudocode, 8);
      currentNode = currentNode.right;
      setPointerValue(pointers, 'currentNode', currentNode);
    }
    pushToFrames(frames, root, pointers, pseudocode, 4);
  }
  pushToFrames(frames, root, pointers, pseudocode, 9);

  let newNode = {
    val,
    left: null,
    right: null
  };

  pushToFrames(frames, root, pointers, pseudocode, 10);
  if (!parentNode) {
    pushToFrames(frames, root, pointers, pseudocode, 11);
    root = newNode;
  } else {
    pushToFrames(frames, root, pointers, pseudocode, 12);
    if (val < parentNode.val) {
      pushToFrames(frames, root, pointers, pseudocode, 13);
      parentNode.left = newNode;
    } else {
      pushToFrames(frames, root, pointers, pseudocode, 14);
      parentNode.right = newNode;
    }
  }
  pushToFrames(frames, root, pointers, pseudocode, 15);
  pushToFrames(frames, root, [], pseudocode, 0);
  return frames;
};
