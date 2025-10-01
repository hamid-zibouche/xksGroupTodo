package main.model;

public class tache {
    private String id;
    private String titre;
    private boolean completed;

    // Constructor
    public tache(String id, String titre) {
        this.id = id;
        this.titre = titre;
        this.completed = false;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public String getTitre() {
        return titre;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
