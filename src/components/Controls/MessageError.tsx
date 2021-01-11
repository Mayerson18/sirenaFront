function MessageError(
  props: any
) {
  const {errors, type} = props;
  console.log('errors', errors)
  console.log('type', type)
  if (errors[type]) {
    if (errors[type].message) {
      return <span style={{display: "block", color: "red"}}> {errors[type].message} </span>  
    }
    return <span style={{display: "block", color: "red"}}> This field is required </span>
  }
  return <></>
}

export default MessageError;