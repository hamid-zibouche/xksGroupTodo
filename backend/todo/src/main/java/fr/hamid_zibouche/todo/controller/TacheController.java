package fr.hamid_zibouche.todo.controller;

import fr.hamid_zibouche.todo.model.Tache;
import fr.hamid_zibouche.todo.repository.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TacheController {

    @Autowired
    private TacheRepository tacheRepository;

    //recuperer toutes les tâches
    @GetMapping
    public List<Tache> getAllTaches() {
        return tacheRepository.findAll();
    }

    //creer une nouvelle tâche
    @PostMapping
    public Tache createTache(@RequestBody Tache tache) {
        return tacheRepository.save(tache);
    }

    //Mettre a jour une tache
    @PutMapping("/{id}")
    public ResponseEntity<Tache> updateTache(@PathVariable Long id, @RequestBody Tache tacheDetails) {
        return tacheRepository.findById(id).map(tache -> {

            tache.setCompleted(tacheDetails.isCompleted());
            Tache updatedTache = tacheRepository.save(tache);
            return ResponseEntity.ok(updatedTache);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Supprimer une tache
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTache(@PathVariable Long id) {
        if (tacheRepository.existsById(id)) {
            tacheRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}