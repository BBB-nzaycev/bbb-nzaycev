export const Bubble2 = function Bubble2(props) {
    const {children, onlyBody, onlyHeader} = props;
    const header = onlyBody ? undefined
              : onlyHeader ? children
              : Array.isArray(children) ? children[0]
              : children;
    const body = onlyBody ? children
              : onlyHeader ? undefined
              : Array.isArray(children) ? children[1]
              : undefined;
    return <Bubble {...props} header={header}>{body}</Bubble>
  }