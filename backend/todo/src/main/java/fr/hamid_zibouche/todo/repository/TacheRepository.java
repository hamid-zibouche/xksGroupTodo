package fr.hamid_zibouche.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import fr.hamid_zibouche.todo.model.Tache;

@Repository
public interface TacheRepository extends JpaRepository<Tache, Long> {
}