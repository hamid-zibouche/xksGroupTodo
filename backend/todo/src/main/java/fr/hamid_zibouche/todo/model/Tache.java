package fr.hamid_zibouche.todo.model;
import jakarta.persistence.*;

@Entity
public class Tache {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private boolean completed;

    // Constructors
    public Tache() {
    }

    public Tache(String titre) {
        this.titre = titre;
        this.completed = false;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}