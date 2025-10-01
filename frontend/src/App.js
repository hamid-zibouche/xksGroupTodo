
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'http://localhost:8080/api/tasks';

  // Charger les tâches au montage
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(API_BASE_URL);
        if (!res.ok) throw new Error('Erreur réseau');
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        setError('Impossible de charger les tâches. Vérifiez que le serveur est démarré.');
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Ajouter une tâche (appelé par TaskForm)
  const addTask = async (titre) => {
    try {
      const res = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, completed: false })
      });
      if (!res.ok) throw new Error('Impossible d\'ajouter la tâche');
      const newTask = await res.json();
      setTasks(prev => [...prev, newTask]);
      return true;
    } catch (err) {
      console.error(err);
      setError('Impossible d\'ajouter la tâche.');
      return false;
    }
  };

  // Basculer l'état d'une tâche
  const toggleTask = async (id, completed) => {
    try {
      const res = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
      });
      if (!res.ok) throw new Error('Impossible de mettre à jour la tâche');
      
      // Mettre à jour localement
      setTasks(prev => prev.map(task => 
        task.id === id ? { ...task, completed } : task
      ));
    } catch (err) {
      console.error(err);
      setError('Impossible de mettre à jour la tâche.');
    }
  };

  // Supprimer une tâche
  const deleteTask = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      return;
    }
    
    try {
      const res = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Impossible de supprimer la tâche');
      
      // Supprimer localement
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      console.error(err);
      setError('Impossible de supprimer la tâche.');
    }
  };

  return (
    <div className="container">
      <h1>📝 Todo List - XKS Group</h1>
      <TaskForm onAdd={addTask} />
      {error && <div className="error">{error}</div>}
      {loading ? 
        <div className="loading">Chargement des tâches...</div>
        : <TaskList 
            tasks={tasks} 
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
      }
    </div>
  );
}
