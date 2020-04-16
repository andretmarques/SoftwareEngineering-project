
import Topic from '@/models/management/Topic';
import User from '@/models/user/User';

export default class Suggestion {
  id: number | null = null;
  //title: string = '';
  status: string = 'AVAILABLE';
  creationDate!: string | null;
  sequence: number | null = null;
  changed: boolean = false;
  justification: string = '';
  _student!: User | null;
  _questionStr: string = '';



  //options: Option[] = [new Option(), new Option(), new Option(), new Option()];
  _topicsList: Topic[] = [];

  constructor(jsonObj?: Suggestion) {
    if (jsonObj) {
      this.id = jsonObj.id;
      //this.title = jsonObj.title;
      this.status = jsonObj.status;
      this.creationDate = jsonObj.creationDate;
      this.changed = jsonObj.changed;
      this.justification = jsonObj.justification;
      this._student = jsonObj._student;
      this._questionStr = jsonObj._questionStr;

      /*this.options = jsonObj.options.map(
        (option: Option) => new Option(option)
      );*/

      this._topicsList = jsonObj._topicsList.map((topic: Topic) => new Topic(topic));
    }
  }
}
