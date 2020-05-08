package pt.ulisboa.tecnico.socialsoftware.tutor.suggestion.dto;

import pt.ulisboa.tecnico.socialsoftware.tutor.course.CourseExecution;
import pt.ulisboa.tecnico.socialsoftware.tutor.question.dto.OptionDto;
import pt.ulisboa.tecnico.socialsoftware.tutor.question.dto.TopicDto;
import pt.ulisboa.tecnico.socialsoftware.tutor.suggestion.domain.Suggestion;
import pt.ulisboa.tecnico.socialsoftware.tutor.user.dto.UserDto;

import java.io.Serializable;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class SuggestionDto implements Serializable{


    private Integer _id;
    private Integer key;
    private String _questionStr;
    private List<TopicDto> _topicsList = new ArrayList<>();
    private Boolean _changed = false;
    private String _justification;
    private String creationDate = null;
    private String _status;
    private UserDto _student;
    private CourseExecution _courseexecution;
    private List<OptionDto> options = new ArrayList<>();
    private Boolean _isprivate = false;


    private String title;


    public SuggestionDto(){
    }

    public SuggestionDto(Suggestion suggestion) {
        this._id= suggestion.get_id();
        this.key=suggestion.getKey();
        this._topicsList = suggestion.get_topicsList().stream().map(TopicDto::new).collect(Collectors.toList());
        this._courseexecution = suggestion.getCourse();
        this._changed=suggestion.get_changed();
        this._justification=suggestion.get_justification();
        this._student=new UserDto(suggestion.get_student());
        this._questionStr=suggestion.get_questionStr();
        this._status=suggestion.getStatus().name();
        this._isprivate = suggestion.get_isprivate();

        if (suggestion.getCreationDate() != null)
            this.creationDate = suggestion.getCreationDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));

        this.options = suggestion.getOptions().stream().map(OptionDto::new).collect(Collectors.toList());

        this.title= suggestion.getTitle();

    }


    public Integer get_id() {
        return _id;
    }

    public void set_id(Integer _id) {
        this._id = _id;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    public String get_questionStr() {
        return _questionStr;
    }

    public void set_questionStr(String _questionStr) {
        this._questionStr = _questionStr;
    }

    public List<TopicDto> get_topicsList() {
        return _topicsList;
    }

    public void set_topicsList(List<TopicDto> _topicsList) {
        this._topicsList = _topicsList;
    }

    public Boolean get_changed() {
        return _changed;
    }

    public void set_changed(Boolean _changed) {
        this._changed = _changed;
    }

    public String get_justification() {
        return _justification;
    }

    public void set_justification(String _justification) {
        this._justification = _justification;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public String getStatus() {
        return this._status;
    }

    public void setStatus(String status) {
        this._status = status;
    }

    public UserDto get_student() {
        return _student;
    }

    public void set_student(UserDto _student) {
        this._student = _student;
    }

    public void setCourse(CourseExecution _courseexecution) {
        this._courseexecution = _courseexecution;
    }

    public List<OptionDto> getOptions() {
        return options;
    }

    public void setOptions(List<OptionDto> options) {
        this.options = options;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SuggestionDto that = (SuggestionDto) o;
        return _id.equals(that._id) &&
                Objects.equals(key, that.key) &&
                Objects.equals(_questionStr, that._questionStr) &&
                Objects.equals(_topicsList, that._topicsList) &&
                Objects.equals(_changed, that._changed) &&
                Objects.equals(_justification, that._justification) &&
                Objects.equals(creationDate, that.creationDate) &&
                Objects.equals(_status, that._status) &&
                Objects.equals(_student, that._student);
    }

    @Override
    public int hashCode() {
        return Objects.hash(_id, key, _questionStr, _topicsList, _changed, _justification, creationDate, _status, _student);
    }

    @Override
    public String toString() {
        return "SuggestionDto{" +
                "_id=" + _id +
                ", key=" + key +
                ", _questionStr='" + _questionStr + '\'' +
                ", _topicsList=" + _topicsList +
                ", _changed=" + _changed +
                ", _justification='" + _justification + '\'' +
                ", creationDate='" + creationDate + '\'' +
                ", _status='" + _status + '\'' +
                ", _student=" + _student +
                '}';
    }

    public Boolean get_isprivate() {
        return _isprivate;
    }

    public void set_isprivate(Boolean _isprivate) {
        this._isprivate = _isprivate;
    }
}
