/** Represents mapping between note and parent note */
class Branch {
    constructor(froca, row) {
        this.froca = froca;

        this.update(row);
    }

    update(row) {
        /** @param {string} primary key */
        this.branchId = row.branchId;
        /** @param {string} */
        this.noteId = row.noteId;
        /** @param {string} */
        this.parentNoteId = row.parentNoteId;
        /** @param {int} */
        this.notePosition = row.notePosition;
        /** @param {string} */
        this.prefix = row.prefix;
        /** @param {boolean} */
        this.isExpanded = !!row.isExpanded;
        /** @param {boolean} */
        this.fromSearchNote = !!row.fromSearchNote;
    }

    /** @returns {NoteShort} */
    async getNote() {
        return this.froca.getNote(this.noteId);
    }

    /** @returns {NoteShort} */
    getNoteFromCache() {
        return this.froca.getNoteFromCache(this.noteId);
    }

    /** @returns {NoteShort} */
    async getParentNote() {
        return this.froca.getNote(this.parentNoteId);
    }

    /** @returns {boolean} true if it's top level, meaning its parent is root note */
    isTopLevel() {
        return this.parentNoteId === 'root';
    }

    get toString() {
        return `Branch(branchId=${this.branchId})`;
    }
}

export default Branch;
