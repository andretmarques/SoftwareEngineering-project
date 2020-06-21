package pt.ulisboa.tecnico.socialsoftware.tutor.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "select * from users u where u.username = :username", nativeQuery = true)
    User findByUsername(String username);

    @Query(value = "select * from users u where u.key = :key", nativeQuery = true)
    User findByKey(Integer key);

    @Query(value = "select MAX(id) from users", nativeQuery = true)
    Integer getMaxUserNumber();

    @Query(value = "select * from User u join u.course_executions c where c.id = :id", nativeQuery = true)
    List<User> findByCourseExecution(Integer id);
}