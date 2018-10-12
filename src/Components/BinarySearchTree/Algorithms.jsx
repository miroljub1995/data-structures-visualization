const getPointersToTreeClone = (root, cloneRoot, pointers) => {
  if (!root)
    return [];
  let rootPointers = pointers.filter((val) => val.pointer === root);
  let newRootPointers = rootPointers.map((ptr) => ({name: ptr.name, pointer: cloneRoot}));
  let leftPointers = getPointersToTreeClone(root.left, cloneRoot.left, pointers);
  let rightPointers = getPointersToTreeClone(root.right, cloneRoot.right, pointers);
  return leftPointers.concat(newRootPointers).concat(rightPointers);
}

const pushToFrames = (frames, root, pointers) => {
  let newRoot = JSON.parse(JSON.stringify(root));
  frames.push({root: newRoot, pointers: getPointersToTreeClone(root, newRoot, pointers)});
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
  let newPointers = pointers.map((val) => val);
  newPointers.push({name: 'currentNode', pointer: root});
  pushToFrames(frames, root, newPointers);
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
        pushToFrames(frames, root, newPointers);

        break;
      } else {
        currentNode = currentNode.left;
        //
        newPointers = frames[frames.length - 1].pointers.map((val) => {
          if (val.name === 'currentNode')
            return {name: 'currentNode', pointer: currentNode};
          return val;
        });
        pushToFrames(frames, root, newPointers);
        //
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        pushToFrames(frames, root, newPointers);
        break;
      } else {
        currentNode = currentNode.right;
        //
        newPointers = frames[frames.length - 1].pointers.map((val) => {
          if (val.name === 'currentNode')
            return {name: 'currentNode', pointer: currentNode};
          return val;
        });
        pushToFrames(frames, root, newPointers);
        //
      }
    }
  }
  return frames;
}
