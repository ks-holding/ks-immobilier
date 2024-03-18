const Tasks = props => {
  const tasks = props.tasks;

  return (
    <>
      <h3>Tâches réalisées</h3>
      <ul className="dotlist">
        {tasks.map((task, key) => (
          <li key={key}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
