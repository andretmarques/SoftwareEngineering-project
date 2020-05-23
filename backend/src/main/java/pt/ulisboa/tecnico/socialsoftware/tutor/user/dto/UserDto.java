package pt.ulisboa.tecnico.socialsoftware.tutor.user.dto;

import pt.ulisboa.tecnico.socialsoftware.tutor.config.DateHandler;
import pt.ulisboa.tecnico.socialsoftware.tutor.user.User;

import java.io.Serializable;
import java.util.Objects;

public class UserDto implements Serializable {
    private Integer id;
    private String username;
    private String name;
    private User.Role role;
    private Integer score;
    private String creationDate;
    private Boolean isDashboardPrivate;
    private Integer numberofsuggestions;
    private Integer numberofsuggestionsapproved;



    public UserDto(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.name = user.getName();
        this.role = user.getRole();
        this.creationDate = DateHandler.toISOString(user.getCreationDate());
        if (user.getScore() == null )
            this.score = 0;
        else
            this.score = user.getScore();

        if(user.getDashboardPrivate() == null)
            this.isDashboardPrivate = false;
        else
            this.isDashboardPrivate = user.getDashboardPrivate();

        this.numberofsuggestions = user.getNumberOfSuggestions();
        this.numberofsuggestionsapproved = user.getNumberOfSuggestionsApproved();

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

    public String getCreationDate() {
        return creationDate;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public Boolean getDashboardPrivate() {
        return isDashboardPrivate;
    }

    public void setDashboardPrivate(Boolean dashboardPrivate) {
        isDashboardPrivate = dashboardPrivate;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", role=" + role +
                ", creationDate=" + creationDate +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto userDto = (UserDto) o;
        return id.equals(userDto.id) &&
                Objects.equals(username, userDto.username) &&
                Objects.equals(name, userDto.name) &&
                role == userDto.role;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, name, role);
    }

    public Integer getNumberofsuggestionsapproved() {
        return numberofsuggestionsapproved;
    }

    public void setNumberofsuggestionsapproved(Integer numberofsuggestionsapproved) {
        this.numberofsuggestionsapproved = numberofsuggestionsapproved;
    }

    public Integer getNumberofsuggestions() {
        return numberofsuggestions;
    }

    public void setNumberofsuggestions(Integer numberofsuggestions) {
        this.numberofsuggestions = numberofsuggestions;
    }
}
