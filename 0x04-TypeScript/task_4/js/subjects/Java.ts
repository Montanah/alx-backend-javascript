/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            return this._teacher ? `Available teacher: ${this._teacher.firstName}` : 'No available teacher';
        }
    }
}