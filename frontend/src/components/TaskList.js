
export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (!tasks || tasks.length === 0) {
    return <div className="no-tasks">Aucune tâche pour le moment</div>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input 
            type="checkbox" 
            className="task-checkbox"
            checked={task.completed}
            onChange={(e) => onToggleTask(task.id, e.target.checked)}
          />
          <span className="task-title">{task.titre}</span>
          <button 
            className="delete-btn" 
            onClick={() => onDeleteTask(task.id)}
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}
