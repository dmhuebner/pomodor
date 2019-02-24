import { Pipe, PipeTransform } from '@angular/core';
import TaskList from '../../shared/interfaces/taskList.interface';

@Pipe({
  name: 'activeTaskList'
})
export class ActiveTaskListPipe implements PipeTransform {

  transform(taskLists: TaskList[], args?: any): any {
    return taskLists.filter(taskList => !taskList.active);
  }

}
