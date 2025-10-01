import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const t = title.trim();
    if (!t) {
      alert('Veuillez entrer une tâche');
      return;
    }
    setSaving(true);
    setErr(null);
    const ok = await onAdd(t);
    if (ok) setTitle('');
    else setErr('Impossible d’ajouter la tâche');
    setSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Entrez une nouvelle tâche..."
        aria-label="Titre de la tâche"
      />
      <button type="submit" disabled={saving}>
        {saving ? 'Ajout...' : 'Ajouter'}
      </button>
      {err && <div className="error">{err}</div>}
    </form>
  );
}
