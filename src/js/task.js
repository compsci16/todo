export default class Task{
    constructor(title, description, dueDate, priority, checkbox){
        this.title = title; 
        this.checkbox = checkbox; 
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority; 
    }
}