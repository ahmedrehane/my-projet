
const Button = ({onClickHandler,value,title}) =>{
    return(
        <>
        <button onClick={onClickHandler} value={value}classname='btns'>
            {title}
        </button>
        </>
    )
}


export default Button

