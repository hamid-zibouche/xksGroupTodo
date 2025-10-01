package fr.hamid_zibouche.todo.config;

import fr.hamid_zibouche.todo.model.Tache;
import fr.hamid_zibouche.todo.repository.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private TacheRepository tacheRepository;

    @Override
    public void run(String... args) throws Exception {
        //quelque exemples pour ne pas laisser la base de donnees vide au depart
        if (tacheRepository.count() == 0) {
            tacheRepository.save(new Tache("Apprendre Spring Boot"));
            tacheRepository.save(new Tache("Apprendre React"));
            
            System.out.println("Données d'exemple ajoutées à la base de données.");
        }
    }
}