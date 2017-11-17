const findById = (tree, testID) => {
  if(tree.props && tree.props.testID === testID) {
    return tree
  }
  if(tree.children && tree.children.length > 0)
  {
    let childs = tree.children
    for(let i = 0; i < childs.length; i++)
    {
      let item = findById(childs[i], testID)
      if(typeof(item) !== 'undefined') {
        return item
      }
    }
  }
}
export default findById;