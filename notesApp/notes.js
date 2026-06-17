import fs from 'node:fs'
import chalk from 'chalk'
function loadNotes() {
    const data = fs.readFileSync('notes.json')

    const notes = JSON.parse(data.toString())

    return notes
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json', dataJSON)
}

export function addNote(title, body) {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => {
        return note.title === title
    })

    if (duplicateNote) {
        console.log(chalk.red("Note with this title already exists"))
    } else {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)

        console.log(chalk.green("New note added"))
    }
}
export function removeNote(title){
    const  notes =loadNotes()

    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
    })
    if(notes.length>notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green("Note Removed"))
    }else{
        console.log(chalk.red("No note found with this title"))
    }
}
export function readNote(title){
    const notes = loadNotes()

    const note = notes.find((note)=>{
        return note.title=== title
    })
    if(note){
        console.log("Title :", chalk.green(note.title))
        console.log("Body : ",note.body)
    }else{
        console.log(chalk.red("Note not found"))
    }
}
export function updateNote(title,body){
    const notes = loadNotes()

    const note = notes.find((note)=>{
        return note.title === title
    })
    if(note){
        note.body=body
        saveNotes(notes)

        console.log(chalk.green("note updated"))
    }else{
        console.log(chalk.red("Note not found"))
    }
}