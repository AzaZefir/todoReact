import css from './TodoList.module.css'

// props = text
const TodoList = (props) => {
  return (
    <form className={css.list}>
      <div>
        <input type="checkbox" id="check" />
        <label htmlFor="check">{props.text}</label>
      </div>
      <button>edit</button>
      <button>delete</button>
    </form>
  );
};
export default TodoList