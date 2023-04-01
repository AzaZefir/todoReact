import css from './Main.module.css';
import TodoList from './todoList/TodoList';

const Main = () => {
  return (
    <main className={css.main}>
      <section className={css.todoList}>
        <form>
          <input type="text" placeholder="enter todo task..." />
          <button type="submit">Add</button>
          {/* <input type="submit" value='Add'/> */}
        </form>
        <TodoList text={'redux'}/> 
        {/* TodoList(text='test') */}
        <TodoList text={'ts'}/> 
        {/* TodoList(text='hello') */}
        <TodoList  text={'js'}/> 
        <TodoList  text={'react'}/> 
      </section>
    </main>
  );
};

export default Main;
