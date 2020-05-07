package pt.ulisboa.tecnico.socialsoftware.tutor.tournament.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pt.ulisboa.tecnico.socialsoftware.tutor.post.domain.PostQuestion;
import pt.ulisboa.tecnico.socialsoftware.tutor.tournament.domain.Tournament;

import java.util.List;


@Repository
@Transactional
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {
}