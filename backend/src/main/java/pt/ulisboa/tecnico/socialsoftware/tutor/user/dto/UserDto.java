package pt.ulisboa.tecnico.socialsoftware.tutor.user.dto;
import io.swagger.models.auth.In;

import pt.ulisboa.tecnico.socialsoftware.tutor.user.User;

import java.io.Serializable;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

public class UserDto implements Serializable {
    private Integer id;
    private String username;
    private String name;
    private User.Role role;

    public UserDto(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.role = user.getRole();

    }

    public UserDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User.Role getRole() {
        return role;
    }

    public void setRole(User.Role role) {
        this.role = role;
    }


    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", role=" + role +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;


        UserDto userDto = (UserDto) o;

        if (id != userDto.id) return false;
        if (!Objects.equals(username, userDto.username)) return false;
        if (!Objects.equals(name, userDto.name)) return false;
        if (role != userDto.role) return false;
        return Objects.equals(creationDate, userDto.creationDate);
    }

    @Override
    public int hashCode() {

        int result = id;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (role != null ? role.hashCode() : 0);
        result = 31 * result + (creationDate != null ? creationDate.hashCode() : 0);
        return result;
    }
}
