import React from 'react'

// export const InputSelectFrom = () => {
//   return (
//     <div>InputSelectFrom</div>
//   )
// }

// When initiating this component, make sure to pass "title" as props
const InputSelectFrom = (props) => {
    // Title is bound to state within this component
    const [title, setTitle] = useState(props.title);
    
    const _onChangeTitle = e => {
      setTitle(e.target.value);
    }
    
    return (
      <input
        className="input-edit-note"
        name="title"
        onChange={_onChangeTitle}
        value={title}             // title will always be state title
        placeholder={props.title} // props.title will always remain the same
      />
    )
  }
