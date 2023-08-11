/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
    
    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            return this._teacher ? `Available teacher: ${this._teacher.firstName}` : 'No available teacher';
        }
    }
}